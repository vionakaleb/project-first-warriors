<template>
	<b-modal class="d-modal--one" id="myModalTutorial" hide-footer size="lg" title="Tutorial">
    <div class="p-2">
		  <h5 class="my-3 text-white text-left font-weight-bold size-24"><b>Cara Mendaftarkan i Cafe</b></h5>

      <ol class="text-left font-weight-normal size-15 pb-2" style="line-height: 220%; color:#A5A5A5;">
        <li>Klik button <b-link v-b-modal.myModalDaftar class="text-yellow">Daftar Gratis Sekarang.</b-link></li>
        <li>Apabila kamu telah memiliki akun di Yamisok, kamu bisa langsung login dengan akun Yamisok.</li>
        <li>Apabila kalian belum memiliki akun di Yamisok, klik button <b-link v-b-modal.myModalDaftar class="text-yellow">Daftar Gratis Sekarang</b-link>, dan klik button <b-link v-b-modal.myModalDaftar class="text-yellow">Belum Memiliki akun?</b-link> Kamu akan dialihkan ke halaman Yamisok.com</li>
        <li>Lakukan registrasi, apabila registrasi di halaman Yamisok.com telah berhasil, kamu dapat kembali ke halaman ini dan klik button <b-link v-b-modal.myModalDaftar class="text-yellow">Daftar Gratis Sekarang,</b-link> dan lakukan login dengan akun yang telah kamu buat.</li>
        <li>Isi formulir dan data yang disediakan selengkap-lengkapnya.</li>
        <li>Selamat, iCafe kalian telah terdaftar dan mendapatkan keuntungan sebagai partner iCafe Yamisok.</li>
      </ol>
    </div>
	</b-modal>
</template>
<script>
  export default {
    props: {
      myModalTutorial: {
        default: null
      }
    }
  }
</script>