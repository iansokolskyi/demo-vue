<template>
  <div class="header">
  </div>
</template>

<script>
import store from '../helpers/store';

export default {
  name: 'Header',
  store,
  data() {
    return {
      myCount: this.$store.state.count,
      text: this.$store.getters.retrieveCount,
    }
  },
  computed: {
    retriveText() {
      return `I am header ${this.$store.state.count}`
    }
  }
}
</script>

<style  scoped>
.header {
  width: 100vw;
  height: 50px;
  background-color: rgb(70, 75, 138);
  color: violet;
}
</style>
