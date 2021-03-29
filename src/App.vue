<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <div v-for="item in items" v-bind:key="item.id">
      <CustomInput v-on:change-in-input="getName" />
      <CustomButton :title="item.text" :isRed="item.id > 1"/>
    </div>
  </div>
</template>

<script>
import CustomButton from './components/controllers/button.vue';
import CustomInput from './components/controllers/input.vue';

export default {
  name: 'App',
  components: {
    CustomButton,
    CustomInput,
  },
  data() {
    return {
      dataForaaaa: {},
      items: [
        { id: 1, text: 'I am Text' },
        { id: 2, text: 'I am not text' }
      ]
    }
  },
  methods: {
    getName(data) {
      console.log(data);
    }
  }
}
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>