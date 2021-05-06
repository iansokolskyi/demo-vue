<template>
  <div>
    <h1>Login</h1>
    <CustomInput :label="'Email'" v-on:change-in-input="getEmail"/>
    <CustomInput :label="'Password'" v-on:change-in-input="getPassword"/>
    <button class="my-button" @click="submit">Submit</button>
  </div>
</template>

<script>
import CustomInput from '../components/controllers/input';
import apiService from '../helpers/api';
import store from '../helpers/store';

export default {
  name: 'SignUp',
  store,
  components: {
    CustomInput
  },
  data() {
    return {
      dataForSubmit: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    async submit () {
      await apiService.post('/users/sign-in', this.dataForSubmit)
        .then((res) => {
          const token = res.data.tokens.accessToken;
          console.log(token)
          window.localStorage.setItem('token', token);
          this.$router.push('users');
        })
        .catch((err) => {
          alert(err.response.data)
        });
      // this.$store.state.count = 'sssss'
      // this.$store.commit('increment', 10);
      // const user = {
      //   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjoiNmUzNzQwNjctZjIyZS00M2EyLTkyM2QtODUzN2Q1MWY3MTdmIiwidCI6MSwiaWF0IjoxNTk5NzUyMjA5LCJleHAiOjQxMDM5NTgxNTIyMDl9.SFUajvp8cSZgAphu661vVRpacSSloMi_dFZGiGh9pkE',
      //   name: 'My name',
      // }
      // window.localStorage.setItem('user', JSON.stringify(user));
      // console.log(window.localStorage.getItem('user'));
    },
    getEmail(data) {
      this.dataForSubmit.email = data
    },
    getPassword(data) {
      this.dataForSubmit.password = data
    },
  }
}
</script>

<style lang="sass" scoped>

</style>
