<template>
	<b-modal class="d-modal--one" id="myModalDaftar" hide-footer size="md">
		<p class="my-2">
			<form @submit="onSubmit">
        <div class="p-2">
          <h5 class="text-white text-left font-weight-bold size-24">Login dengan akun Yamisok</h5>
          <p class="size-14 text-left" style="color:#A5A5A5;">Login disini apabila kamu telah memiliki akun di <a href="http://yamisok.com/">yamisok.com</a></p>
          <span v-if="failed" class="size-14 text-center" style="color:rgb(255, 16, 16);">{{error_msg}}</span>
        </div>
        <div class="mt-2 p-2">
          <div style="position: relative;">
            <div class="input-icon">
              <img src="static/img/icon-user.jpg" class="margin-icon">
            </div>
  				  <input type="text" name="email" v-model="form.email" class="input-dark" placeholder="Username/E-Mail">
          </div>
          <div style="position: relative;">
            <div class="input-icon">
              <img src="static/img/icon-padlock.jpg" class="margin-icon">
            </div>
  				  <input type="password" name="password" v-model="form.password" class="input-dark" placeholder="Password">
          </div>
        </div>
        <div class="mt-5 p-2 pb-0 d-flex justify-content-between">
          <button type="submit" class="btn d-btn--yellow-border login-button boldest-bold" size="medium">Login</button>
          <button type="button" class="btn d-btn--yellow register-button boldest-bold" size="medium" @click="toGeneral()">Belum memiliki akun?</button>
        </div>
			</form>
		</p>
	</b-modal>
</template>
<script>
import VueSweetalert2 from 'vue-sweetalert2'
import Vue from 'vue'
import axios from 'axios'

Vue.use(VueSweetalert2)
export default {
  props: {
    myModalDaftar: {
    }
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      failed: false,
      error_msg: ''
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      console.log(JSON.stringify(this.form))
      let data = {
        'email': this.form.email,
        'password': this.form.password
      }
      axios.post(process.env.API_URL + '/login', data)
        .then(response => {
          console.log(response)

          if (response.data && response.data.status === 200) {
            localStorage.setItem('token', response.data.token)
            this.$root.$emit('checkLoggedPlayer')
            this.$root.$emit('bv::hide::modal', 'myModalDaftar')
            window.location = './form'
            this.failed = false
            this.error_msg = ''
          } else {
            // this.$swal({
            //   type: 'error',
            //   title: 'Failed to Login',
            //   text: response.data.message
            // })
            this.failed = true
            this.error_msg = 'Username dan password tidak cocok.'
          }
        }, response => {
          // console.log(response.data)
          this.failed = true
          this.error_msg = 'Username atau password tidak boleh kosong.'
        })
    },
    toGeneral () {
      window.location = 'https://www.yamisok.com/login'
    }
  }
}
</script>

<style type="text/css">
  .input-dark{
    width: 100%;
    background-color: #252525;
    color: #484647;
    border: none;
    margin: 8px 0 8px 0;
    padding: 8px 0 8px 60px;
  }
  .input-icon{
    background-color: #484647; 
    height: 40px; 
    position: absolute; 
    top: 8px; 
    padding: 4px 4px 0px 4px;
  }
  .margin-icon{
    margin: 0 4px;
  }

  .login-button:hover {
    color: #110F10;
    background-color: #b38003;
    border: 2px solid #b38003;
  }
  .register-button:hover {
    color: #110F10;
    background-color: #b38003;
    border: 2px solid #b38003;
    /*border: 2px solid #e2a100;*/
  }
</style>