<template>
  <div class="bg-img text-center" style="padding: 60px;">
    <div class="row" style="margin-bottom: 30px;">
      <div class="col-md-12 text-center title-all">
        <span class="mobile-white dinMedium title-all">Hubungi</span>
        <span
          class="dinMedium title-all mobile-yellow"
          style="color: #1b90bc; font-weight: bold"
        >&nbsp;Kami</span>
      </div>
    </div>
    <div
      class="row width-desktop"
      style="margin: auto; background-color: #0b0f13; padding: 30px; border-radius: 10px;"
    >
      <div style="margin-bottom:10px">
        <h3>Jika ada pertanyaan, Silahkan hubungi kami melalui nomor:</h3>
        <div style="float:left">
          <img style="margin-right:10px; margin-bottom: 10px;" width="29.9" height="29.9" src="/static/img/contactus/contact-wa.png" alt=""><span style="font-size: 32px">0877-7632-1274</span>
        </div>
      </div>
      <form @submit="onSubmit" @reset="onReset" v-if="show">
        <div class="row row-mobile" style="width: 100%;">
          <div class="col-md-2 text-left" style="margin-bottom: 10px;">
            <label style="font-size: 16px; color: #7d7d7d">Nama Anda</label>
          </div>
          <div class="col-md-10 text-left" style="margin-bottom: 10px;">
            <input v-model="form.namaKontak" type="text" required />
          </div>
          <div class="col-md-2 text-left" style="margin-bottom: 10px;">
            <label style="font-size: 16px; color: #7d7d7d">Subyek</label>
          </div>
          <div class="col-md-10 text-left" style="margin-bottom: 10px;">
            <input v-model="form.subjekPesan" type="text" required />
          </div>
          <div class="col-md-2 text-left" style="margin-bottom: 10px;">
            <label style="font-size: 16px; color: #7d7d7d">Alamat Email</label>
          </div>
          <div class="col-md-10 text-left" style="margin-bottom: 10px;">
            <input v-model="form.emailKontak" type="email" required />
          </div>
          <div class="col-md-2 text-left" style="margin-bottom: 10px;">
            <label style="font-size: 16px; color: #7d7d7d">Pesan Anda</label>
          </div>
          <div class="col-md-10 text-left" style="margin-bottom: 10px;">
            <textarea rows="5" v-model="form.isiPesan" type="text" required></textarea>
          </div>
        </div>
        <div class="btn-space">
          <button
            @click="onSubmit"
            class="btn-send"
            v-if="!btnSubmit"
            :disabled="!form.namaKontak || !form.subjekPesan || !form.emailKontak || !form.isiPesan"
          >Kirim Pesan</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import Vue from 'vue'

Vue.use(VueSweetalert2)

export default {
  components: {},
  data () {
    return {
      btnSubmit: false,
      form: {
        namaKontak: '',
        subjekPesan: '',
        emailKontak: '',
        isiPesan: ''
      },
      show: true
    }
  },
  methods: {
    validEmail (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },

    onSubmit (evt) {
      evt.preventDefault()
      this.btnSubmit = true

      let data = {
        namaKontak: this.form.namaKontak,
        subjekPesan: this.form.subjekPesan,
        emailKontak: this.form.emailKontak,
        isiPesan: this.form.isiPesan
      }

      if (!this.validEmail(this.form.emailKontak)) {
        this.btnSubmit = false
        this.$swal({
          type: 'error',
          title: 'Email tidak valid',
          html: 'Mohon isi data email yang benar'
        })
      } else {
        axios
          .post(process.env.API_URL + '/api/v1/first-warrior-message', data)
          .then(
            response => {
              if (response.data.status) {
                this.$swal('Message Sent Successfully', '', 'success')
                this.$router.push('/home')
                this.form = []
              } else {
                this.btnSubmit = false
                this.$swal({
                  type: 'error',
                  title: 'Failed to Sent Message',
                  html: response.data.errors
                })
              }
            },
            response => {
              this.$swal({
                type: 'error',
                title: 'Failed to Operate',
                text: 'Please contact our team via Phone'
              })
              this.btnSubmit = false
            }
          )
      }
    },

    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.checked = []
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style lang="scss">
.width-desktop {
  @media only screen and (min-width: 1366px) {
    width: 80%;
  }
}

.btn-space {
  width: 100%;
  @media only screen and (max-width: 1024px) {
    width: fit-content;
    margin: 0 auto;
  }
}

.row-mobile {
  @media only screen and (max-width: 1024px) {
    width: 100% !important;
    margin-right: 0px;
    margin-left: 0px;
  }
}
.btn-send {
  background-color: #007af3;
  border-radius: 30px;
  width: 10vw;
  height: 3vw;
  line-height: 3vw;
  float: right;
  margin-right: 2.3vw;
  font-size: 1vw;
  border: 0;
  color: white;

  @media only screen and (max-width: 1024px) {
    width: 40vmin;
    height: 8vmin;
    line-height: 8vmin;
    margin: 0 auto;
    font-size: 4vmin;
  }
}

input[type="text"],
[type="email"] {
  width: 380px;
  background-color: #303539;
  border: 0px;
  border-radius: 5px;
  color: white;
  padding: 5px;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
}

button:disabled {
  background-color: #808080;
}

textarea {
  width: 100%;
  color: white;
  background-color: #303539;
  border: 0px;
  border-radius: 5px;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
}

.mobile-white {
  @media only screen and (max-width: 1024px) {
    font-size: 40px !important;
  }
}

.mobile-yellow {
  @media only screen and (max-width: 1024px) {
    font-size: 35px !important;
  }
}
</style>