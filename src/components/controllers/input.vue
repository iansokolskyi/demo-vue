<template>
  <input v-model="text" v-on:input="$emit('change-in-input', text)" >
  <p>{{text}}</p>
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

<style lang="sass" scoped>

</style>
