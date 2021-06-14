<template>
  <div>
    <h4>{{ title }}</h4>
    <form>
      <div v-for="(input, key) in inputs">
        <label>{{ input.label }}</label>
        <input :type="input.type" v-model="initialInputs[key]">
      </div>
      <div v-if="isEdit">
        <label>Status</label>
        <select v-model="initialInputs.status">
          <option value="1">Active</option>
          <option value="0">Deactive</option>
        </select>
      </div>
      <div>
        <button type="button" @click="submit">Submit</button>
        <button type="button" @click="close">Close</button>
      </div>
    </form>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Form",
  props: {
    inputs: {
      type: Object,
      default: {}
    },
    isEdit: {
      type: Boolean,
      default: false
    },
    detail: {
      type: Object,
      default: {}
    }
  },
  watch: {
    isEdit() {
      if (!this.isEdit) {
        this.initialInputs = {}
      }
    },
    detail() {
      this.initialInputs = this.detail
    }
  },
  data() {
    return {
      initialInputs: {}
    }
  },
  computed: {
    title() {
      const routeTitle = this.$route.meta.title
      return this.isEdit ? `Update ${routeTitle}` : `Create ${routeTitle}`
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    submit(){
        this.$emit('save',{
          data: this.initialInputs,
          done(){

          }
        })
    }
  }
}
</script>

<style scoped>

</style>