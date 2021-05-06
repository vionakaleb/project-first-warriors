<template>
	<div class="bg-img responsive img-responsive pt-3">
    <b-container fluid class="pt-5">
        <div class="contactus-w contactus-p center-content contactus-bg mb-3"> 
        	<div class="contacth-w center-content contactus-box-header"></div>

		    <b-form @submit="onSubmit" @reset="onReset" v-if="show" align=left>
		      <b-row>
		        <div class="col-md-6 mt-md-4 mt-sm-3 mt-xs-5 pt-md-4 pt-sm-3 pt-xs-5 contactus-pt">
		          
		          <b-form-group id="InputGroup1" class="text-white text-18 light-bold mb-3"
		                        :label-cols="4"
		                        breakpoint="md"
		                        label="Nama:"
		                        label-for="Input1">
		            <b-form-input id="Input1" class="bg-secondary border border-warning border-radius"
		                          type="text"
		                          size="sm"
		                          v-model="form.namaKontak"
		                          required>
		            </b-form-input>
		          </b-form-group>

		          <b-form-group id="InputGroup2" class="text-white text-18 light-bold mb-3"
		                        :label-cols="4"
		                        breakpoint="md"
		                        label="Email:"
		                        label-for="Input2">
		            <b-form-input id="Input2" class="bg-secondary border border-warning border-radius"
		                          type="text"
		                          size="sm"
		                          v-model="form.emailKontak"
		                          required>
		            </b-form-input>
		          </b-form-group>

		          </div>

		          <div class="col-md-6 mt-md-4 mt-sm-0 mt-xs-0 pt-md-4 pt-sm-0 pt-xs-0">

		            <b-form-group id="InputGroup3" class="text-white text-18 light-bold mb-3"
		                        :label-cols="4"
		                        breakpoint="md"
		                        label="Nama Sekolah:"
		                        label-for="Input3">
		            <b-form-input id="Input3" class="bg-secondary border border-warning border-radius"
		                          type="text"
		                          size="sm"
		                          v-model="form.namaSekolah"
		                          required>
		            </b-form-input>
		          </b-form-group>

		          <b-form-group id="InputGroup4" class="text-white text-18 light-bold mb-3"
		                        :label-cols="4"
		                        breakpoint="md"
		                        label="Subject:"
		                        label-for="Input4">
		            <b-form-input id="Input4" class="bg-secondary border border-warning border-radius"
		                          type="text"
		                          size="sm"
		                          v-model="form.subjekPesan"
		                          required>
		            </b-form-input>
		          </b-form-group>
		        </div>

		        <div class="col-md-12 pt-2">
              <p class="text-left text-white text-18 light-bold">Isi Pesan:</p>
		        	<b-form-textarea id="textarea1" class="bg-secondary border border-warning border-radius"
      		        	 dark
      		        	 no-resize="true"
                     v-model="form.isiPesan"
                     :rows="8"
                     :max-rows="10">
  				    </b-form-textarea>
  		        </div>

  		        <div class="center-content pt-3 pb-4">
  		                <b-button type="submit" variant="primary" class="border-yellow" v-if="!btnSubmit" ><b class="px-5 text-black text-20">KIRIM</b></b-button>
  		                <b-button type="submit" variant="primary" class="border-yellow" v-else disabled>loading..</b-button>
  		                <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
  		      </div>

		      </b-row>
		    </b-form>

        </div>
        <!-- <div class="col-md-6 mt-4">
              <FormOwner class="w-100 mb-3"></FormOwner>         
        </div> -->

    </b-container>
  </div>
</template>

<script>
import InputImage from '@/components/Register.InputImage'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import Vue from 'vue'

Vue.use(VueSweetalert2)

export default {
  components: {
    'input-image': InputImage
  },
  data () {
    return {
      btnSubmit: false,
      form: {
        namaKontak: '',
        namaSekolah: '',
        emailKontak: '',
        subjekPesan: '',
        isiPesan: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.btnSubmit = true
      console.log(JSON.stringify(this.form))
      let data = {
        'namaKontak': this.form.namaKontak,
        'namaSekolah': this.form.namaSekolah,
        'emailKontak': this.form.emailKontak,
        'subjekPesan': this.form.subjekPesan,
        'isiPesan': this.form.isiPesan
      }
      axios.post(process.env.API_URL + '/api/v1/message', data)
        .then(response => {
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
        }, response => {
          this.$swal({
            type: 'error',
            title: 'Failed to Operate',
            text: 'Please contact our team via Phone'
          })
          this.btnSubmit = false
        })
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

<style>
label {display:block;clear:both;}
</style>