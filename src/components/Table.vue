<template>
  <div>
    <a href="javascript:void(0)" @click="show()">Create New</a>
    <table>
      <thead>
      <tr>
        <th v-for="col in columns"> {{ col.label }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in data">
        <td v-for="col in columns">
          <template v-if="col.field !== 'action'">
             {{ item[col.field] }}
          </template>
          <template v-else>
            <a href="javascript:void(0)" @click="show(item.id)">Edit</a> | <a href="javascript:void(0)"  @click="handleDelete(item.id)">Delete</a>
          </template>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
  },
  methods: {
    show(id = null){
      this.$emit('show', id)
    },
    handleDelete(id){
      if(confirm('Do you sure delete this?')){
        this.$emit('handleDelete', id)
      }
    }
  }
}
</script>

<style scoped>

</style>