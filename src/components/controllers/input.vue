<template>
  <div>
    <label>{{ label }}</label>
    <input v-model="text" v-on:input="$emit('change-in-input', text)" >
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    label: String,
    default: () => '',
  },
  data() {
    return {
      text: ''
    }
  },
  created() {
    console.log(this.label)
  }
}
</script>

<style scoped>
input {
  margin: 10px;
}
</style>
