<template>
  <div>
    <h1>Sign Up</h1>
    <CustomInput v-on:change-in-input="getName"/>
    <CustomInput v-on:change-in-input="getSurname"/>
    <button class="my-button" @click="submit">Submit</button>
  </div>
</template>

<script>
import CustomInput from '../components/controllers/input';
import apiService from '../helpers/api';

export default {
  name: 'SignUp',
  components: {
    CustomInput
  },
  data() {
    return {
      dataForSubmit: {
        fname: '',
        lname: '',
        active: true,
      }
    }
  },
  methods: {
    async submit () {
      await apiService.post('/user', this.dataForSubmit)
        .then(() => {
          this.$router.push('users');
        })
        .catch((err) => {
          alert(err.response.data)
        });
    },
    getName(data) {
      this.dataForSubmit.fname = data
    },
    getSurname(data) {
      this.dataForSubmit.lname = data
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
