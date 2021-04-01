<template>
  <div>
    <input v-model="text" v-on:input="$emit('change-in-input', text)" >
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  data() {
    return {
      text: ''
    }
  }
}
</script>

<style scoped>
input {
  margin: 10px;
}
</style>
