<template>
  <button class="my-button" :class="{ isBlue: isRed }" @click="incriment" >{{ title }}: {{ count }}</button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    title: String,
    isRed: Boolean,
  },
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    incriment() {
      this.count += 1;
    }
  }
}
</script>

<style lang="sass" scoped>
.my-button
  height: 30px
  width: 100px
  background-color: green
  border-radius: 5px
  opacity: 0.8
  border: none
  outline: none
  margin: 10px
  &:hover
    opacity: 1

.isBlue
  background-color: blue
</style>
