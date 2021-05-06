<template>
	<b-modal class="d-modal--one" id="myModalSukses" hide-footer size="md" title="Sukses" v-model="modalShow" @hide="hideModal()">
    <div class="p-2 text-center">
      <img src="static/img/icons/success.jpg" width="40px" class="text-center">
		  <h5 class="my-3 text-left font-weight-bold size-24 text-center text-white"><b>Terimakasih!</b></h5>
      <p class="font-gray">Telah berpartisipasi dan menjadi bagian dari komunitas iCafe Yamisok.
        Apabila anda ingin menambah daftar iCafe, silahkan kembali isi form.</p>
    </div>
	</b-modal>
</template>
<script>
  export default {
    props: {
      myModalSukses: {
        default: null
      },
      modalShow: {
        default: true
      }
    },
    methods: {
      hideModal () {
        this.$emit('hideModal')
      }
    }
  }
</script>