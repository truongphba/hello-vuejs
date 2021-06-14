<template>
  <div style="text-align: left">
    <h2>Students</h2>
    <Table
        @show="show"
        :columns="columns"
        :data="students"
        @handleDelete="handleDelete"
    />
    <Form
        @close="isShow = false"
        v-if="isShow"
        :is-edit="isEdit"
        :inputs="inputs"
        :detail="student"
        @save="save"
    />
  </div>
</template>

<script>
import Table from "../components/Table";
import Form from "../components/Form";
import {mapState, mapActions} from 'vuex'

export default {
  name: "Student",
  components: {
    Table,
    Form
  },
  data() {
    return {
      columns: [
        {
          label: 'Id',
          field: 'id'
        },
        {
          label: 'Full Name',
          field: 'fullName'
        },
        {
          label: 'Email',
          field: 'email'
        },
        {
          label: 'Status',
          field: 'status'
        },
        {
          label: 'Created At',
          field: 'createdAt'
        },
        {
          label: 'Action',
          field: 'action'
        },
      ],
      inputs: {
        fullName: {
          label: 'Full Name',
          type: 'text'
        },
        email: {
          label: 'Email',
          type: 'text'
        }
      },
      isShow: false,
      isEdit: false
    }
  },
  mounted() {
    this.loadStudents()
  },
  computed: {
    ...mapState('student', [
      'students',
      'student'
    ])
  },
  methods: {
    ...mapActions({
      loadStudents: 'student/loadStudents',
      loadStudent: 'student/loadStudent',
      saveStudent: 'student/saveStudent',
      deleteStudent: 'student/deleteStudent',
    }),
    async show(id = null) {
      this.isEdit = false
      if (id != null) {
        this.isEdit = true
        await this.loadStudent(id)
      }
      this.isShow = true
    },
    async save({data}){
      await this.saveStudent(data)
      await this.loadStudents()
      this.isShow = false
    },
    async handleDelete(id){
      await this.deleteStudent(id)
      await this.loadStudents()
      this.isShow = false
    }
  }
}
</script>

<style scoped>

</style>