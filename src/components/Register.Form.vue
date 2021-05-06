<template>
  <div
    class="px-lg-5 px-md-5 pt-lg-4 pt-md-4 register-w"
    style="margin:0 auto; background-image: url('/static/img/contactus-kotak.png'); background-size: 100% 100%;"
  >
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" align="left" class="px-2 py-4">
      <b-row>
        <div class="col-md-6 mb-4">
          <h4 class="size-16 light-bold pb-3">DATA SEKOLAH</h4>
          <b-form-group
            id="InputGroup1"
            class="text-gray text-14 mb-0"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nama Sekolah:"
            label-for="Input1"
          >
            <b-form-input
              id="Input1"
              class="text-white bg-secondary border border-warning border-radius"
              type="text"
              size="sm"
              v-model="form.namaSekolah"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="InputGroup2"
            class="text-gray text-14 mb-0"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Alamat Sekolah:"
            label-for="Input2"
          >
            <b-form-input
              id="Input2"
              class="text-white bg-secondary border border-warning border-radius"
              type="text"
              size="sm"
              v-model="form.alamatSekolah"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="InputGroup3"
            class="text-gray text-14 mb-0"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Daftar Kota:"
            label-for="Input3"
          >
            <b-form-select
              v-model="kotaSekolah"
              class="text-white text-14 bg-secondary border border-warning border-radius col-md-12"
              :options="optionKota"
              :label-cols="4"
              breakpoint="sm"
              size="sm"
            />
          </b-form-group>

          <b-form-group
            id="InputGroup3"
            class="text-gray text-14 m-input invisible"
            horizontal
            :label-cols="4"
            breakpoint="sm"
            label="Kota Pilihan:"
            label-for="Input3"
            v-if="kotaSekolah != 99"
          >
            <b-form-input
              id="Input3"
              class="text-white bg-secondary border border-warning border-radius text-14"
              type="text"
              size="sm"
            ></b-form-input>
          </b-form-group>

          <!-- SEKOLAH LAINNYA -->
          <b-form-group
            id="InputGroupLainnya"
            class="text-gray text-14 mb-0"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Kota yang Diajukan <a class='text-white'>*</a>:"
            label-for="InputLainnya"
            v-else
          >
            <b-form-input
              id="Input44"
              class="text-white bg-secondary border border-warning border-radius"
              type="text"
              size="sm"
              v-model="form.kotaLainnya"
            ></b-form-input>
            <!-- <b-form-select v-model="kotaLainnya" class="text-white text-14 bg-secondary border border-warning border-radius col-md-12"
                          :options="optionKotaLainnya"
                          :label-cols="4"
                          breakpoint="sm"
            size="sm" />-->
          </b-form-group>
          <!-- END SEKOLAH LAINNYA -->

          <b-form-group
            id="InputGroup4"
            class="text-gray text-14 mb-0"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="No. Telepon Sekolah:"
            label-for="Input4"
          >
            <b-form-input
              id="Input4"
              class="text-white bg-secondary border border-warning border-radius"
              type="text"
              size="sm"
              v-model="form.teleponSekolah"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="InputGroup5"
            class="text-gray text-14 mb-0"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Email Sekolah:"
            label-for="Input5"
          >
            <b-form-input
              id="Input5"
              class="text-white bg-secondary border border-warning border-radius"
              type="email"
              size="sm"
              v-model="form.emailSekolah"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="InputGroup6"
            class="text-gray text-14 mb-0"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nama PIC/Pembina:"
            label-for="Input6"
          >
            <b-form-input
              id="Input6"
              class="text-white bg-secondary border border-warning border-radius"
              type="text"
              size="sm"
              v-model="form.namaGuru"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="InputGroup7"
            class="text-gray text-14 mb-0"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Nomor Telepon PIC/Pembina:"
            label-for="Input7"
          >
            <b-form-input
              id="Input7"
              class="text-white bg-secondary border border-warning border-radius"
              type="text"
              size="sm"
              v-model="form.teleponGuru"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="InputGroup8"
            class="text-gray text-14 mb-0"
            horizontal
            :label-cols="4"
            breakpoint="md"
            label="Email PIC/Pembina:"
            label-for="Input8"
          >
            <b-form-input
              id="Input8"
              class="text-white bg-secondary border border-warning border-radius"
              type="email"
              size="sm"
              v-model="form.emailGuru"
            ></b-form-input>
          </b-form-group>

          <!-- <b-form-group id="InputGroupDrop"
                        horizontal
                        :label-cols="3"
                        breakpoint="md"
                        label="dropdown:"
                        label-for="InputDrop">
            <b-form-select id="InputDrop"
                          :options="dropdown"
                          
                          v-model="form.dropdown">
            </b-form-select>
          </b-form-group>-->
          <!-- <p class="text-justify text-white text-12">*I-cafe di kota yang diajukan akan di proses oleh pihak penyelenggara terlebih dahulu.</p> -->
        </div>

        <div class="col-md-5 ml-lg-5 ml-md-5 mt-md-5">
          <b-form-group label="Game yang dimainkan :" class="text-14 pl-3 text-gray">
            <!-- <b-form-checkbox-group id="checkboxgames" name="games" v-model="games" :options="gamePilihan" class="text-14 text-gray">
            </b-form-checkbox-group>-->
            <b-form-select
              v-model="games"
              class="text-white text-14 bg-secondary border border-warning border-radius col-md-12"
              :options="gamePilihan"
              :label-cols="4"
              breakpoint="sm"
              size="sm"
              @change="onChangeGames($event)"
            />
          </b-form-group>

          <b-form-group
            label="I-Cafe yang dituju :"
            class="text-14 pl-3 text-gray"
            v-if="games == 'dota'"
          >
            <b-form-select
              v-model="icafe"
              class="text-white text-14 bg-secondary border border-warning border-radius col-md-12"
              :label-cols="4"
              breakpoint="sm"
              size="sm"
            >
              <option :value="null" disabled>Silahkan pilih I-Cafe</option>
              <optgroup v-for="(group, name) in icafePilihan" :label="name" :key="name">
                <option
                  v-for="option in group"
                  :value="option.value"
                  :key="option.id"
                >{{ option.text }}</option>
              </optgroup>
            </b-form-select>
          </b-form-group>

          <b-form-group label="Team Yamisok :" class="text-14 pl-3 text-gray" v-if="games != null">
            <form-autocomplete
              :reqUrl="'/api/v1/teams?game_id='+selectedGameId"
              v-model="searchTeam"
            ></form-autocomplete>
            <p
              class="text-justify text-white text-12 pb-2"
            >*Untuk Mengikuti High School League, Pastikan Sekolah kalian sudah memiliki Team di Yamisok</p>
          </b-form-group>

          <b-form-group
            label="Team Member :"
            class="text-14 pl-3 text-gray"
            v-if="searchTeam != null"
          >
            <ul class="list-group">
              <li
                class="list-group-item d-flex"
                v-for="(member,index) in searchTeam.team_member"
                :key="index"
              >
                <div class="list-group-item--avatar">
                  <img class="img-circle" :src="member.player.avatar_url" />
                </div>
                <div class="list-group-item--title d-flex">
                  <p>{{member.player.username}}</p>
                  <p>
                    <span
                      :class="member.player.in_game_id ? 'badge-primary' : 'badge-danger'"
                      class="badge"
                    >{{member.player.in_game_id ? 'Connected' : 'Not connected yet'}}</span>
                  </p>
                </div>
              </li>
            </ul>
          </b-form-group>
          <b-form-group
            label="Nomor Telepon Captain :"
            class="text-14 pl-3 text-gray"
            v-if="searchTeam != null"
          >
            <b-form-input
              id="Input11"
              class="text-white bg-secondary border border-warning border-radius"
              type="text"
              size="sm"
              v-model="form.teleponCaptain"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Nomor Telepon Vice-Captain :"
            class="text-14 pl-3 text-gray"
            v-if="searchTeam != null"
          >
            <b-form-input
              id="Input12"
              class="text-white bg-secondary border border-warning border-radius"
              type="text"
              size="sm"
              v-model="form.teleponViceCaptain"
            ></b-form-input>
          </b-form-group>

          <div class="d-flex">
            <div class="flex-column col-md-6 col-sm-6 col-xs-6">
              <label class="text-12 mt-upload text-gray">Foto surat izin sekolah*:</label>
              <div class="container mb-5">
                <input-image :index="1" @setSelectedImage="setSelectedImage"></input-image>
              </div>
            </div>

            <div class="flex-column col-md-6 col-sm-6 col-xs-6">
              <label class="text-12 mt-upload text-gray">Logo sekolah*:</label>
              <div class="container mb-5">
                <input-image :index="2" @setSelectedImage="setSelectedImage"></input-image>
              </div>
            </div>
          </div>

          <div class="pt-0 pl-3">
            <div>
              <p class="text-justify text-white text-12 pb-2">*Ukuran foto tidak boleh melebihi 2MB.</p>
              <p class="text-justify text-gray text-12">
                Silahkan mengunduh contoh surat izin sekolah
                <a
                  href="/static/formulir pendaftaran HSL 2019.pdf"
                  target="_blank"
                  class="font-italic"
                >
                  <u class="text-yellow font-italic">disini</u>
                </a>.
              </p>

              <b-form-group id="GroupChecks" class="text-gray">
                <b-form-checkbox-group v-model="form.isAgree" id="Checks">
                  <b-form-checkbox value="true" class="text-gray text-12">
                    Dengan ini saya menyetujui
                    <a v-b-modal="'myModal'" style="cursor:pointer;">
                      <u class="text-yellow font-italic">syarat & ketentuan</u>
                    </a> yang berlaku di Indonesia High School League.
                  </b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
            </div>

            <div class="mb-2">
              <b-button
                type="submit"
                variant="primary"
                class="border-yellow"
                v-if="!btnSubmit && form.isAgree && form.isAgree.length > 0"
              >
                <b class="px-1 text-black text-16">Submit Form</b>
              </b-button>
              <b-button
                type="submit"
                variant="primary"
                class="border-yellow"
                v-else-if="!btnSubmit && (!form.isAgree || form.isAgree.length === 0)"
                disabled
              >
                <b class="px-1 text-black text-16">Submit Form</b>
              </b-button>
              <b-button type="submit" variant="primary" class="border-yellow" v-else disabled>
                <b class="px-1 text-black text-16">loading..</b>
              </b-button>
              <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
            </div>
          </div>
        </div>

        <div class="col-md-12 fixed-top p-alert my-5 px-5">
          <b-modal
            id="myModal"
            size="lg"
            title="Syarat dan Ketentuan"
            header-bg-variant="dark"
            header-text-variant="light"
            body-bg-variant="dark"
            body-text-variant="light"
            footer-bg-variant="dark"
            footer-text-variant="dark"
          >
            <div class="w-100 text-11 text-gray">
              <h5 class="text-white">Tentang Turnamen</h5>
              <p class="text-justify">
                Peserta dari liga ini adalah seluruh sekolah di Indonesia. Setiap tim harus mendapatkan ijin untuk mendaftar dan bertanding dari pihak sekolah. Tim akan merepresentasikan sekolah mereka,
                dan setiap sekolah hanya dapat mengirimkan 1 tim. Liga akan dibagi menjadi 4 divisi, serie A (Top 20), serie B (Pos 21-60), serie C (Pos 61-140), dan serie D (Pos 141 kebawah).
                Pertandingan akan diadakan setiap sabtu dan minggu sepanjang semester.
              </p>

              <h5 class="text-white">Linimasa</h5>
              <ul class="ul.square">
                <li>Pendaftaran peserta secara online di www.ihsl.id dari 6 September hingga 12 Oktober 2018.</li>
                <li>14 Oktober 2018 – pengumuman bracket turnamen</li>
                <li>
                  20 Oktober – 18 November 2018 – babak kualifikasi dan seleksi daerah diselenggarakan.
                  Setiap tim dari sekolah yang terdaftar akan bersaing secara nasional di icafe terdekat.
                  Setiap sekolah hanya dapat mengirim 1 tim. Jika ada lebih dari 1 tim, sekolah harus memilih satu tim dengan kualifikasi internal.
                  Kualifikasi akan diadakan setiap hari Sabtu dan Minggu pukul 15.00 - 19.00. Kualifikasi ini akan disiarkan online oleh MoobaTV melalui Yamisok Platform.
                </li>
                <li>15 – 16 Desember 2018 penyelenggaraan FINAL tingkat Nasional di High Grounds Jakarta.</li>
              </ul>

              <h5 class="text-white">Syarat dan Ketentuan</h5>
              <b class="text-14">Peserta</b>
              <ul class="ul.square">
                <li>Pihak Sekolah yang berpartisipasi WAJIB untuk mendaftarkan peserta sebelum batas waktu yang ditentukan oleh pihak penyelenggara.</li>
                <li>Berikut ini persyaratan peserta yang berhak mengikuti High School League:</li>
                <ul class="ul.circle">
                  <li>Usia 15-18 tahun dan merupakan pelajar Sekolah Menengah Atas (SMA), Sekolah Menengah Kejuruan (SMK), dan sederajat yang dibawah naungan organisasi sekolah.</li>
                  <li>Peserta harus mendapatkan ijin dari orang tua dan sekolah (dapat diwakili oleh guru).</li>
                  <li>Peserta dibatasi untuk pelajar dengan nilai akademis memadai yang ditentukan oleh sekolah.</li>
                  <li>Sekolah wajib menyediakan 1 (satu) guru pendamping yang dipersiapkan untuk menjadi pembimbing peserta.</li>
                  <li>Sekolah hanya dapat mendaftarkan maksimal 10 orang (pemain inti dan cadangan) dalam satu tim dan tidak dapat diganti selama liga pada musim tersebut.</li>
                  <li>Peserta harus terdaftar di dalam satu sekolah yang sama.</li>
                  <li>Peserta yang telah lulus tidak dapat mengikuti liga di musim berikutnya.</li>
                  <li>Sekolah (yang dapat diwakili oleh guru pembimbing) WAJIB mengirimkan data pemain kepada panitia.</li>
                  <li>Peserta bersedia menyetujui aturan dalam pertandingan yang disediakan oleh penyelenggara.</li>
                  <li>Peserta tidak terdaftar dalam satu organisasi team profesional baik di dalam maupun luar negeri.</li>
                </ul>
              </ul>

              <b class="text-14">Penyelenggara</b>
              <ul class="ul.square">
                <li>Sistem pertandingan akan dibagi menjadi 2 fase (a) Sistem turnamen untuk kualifikasi dan (b) Sistem Liga (per musim).</li>
                <li>
                  <b class="text-14">Kualifikasi:</b>
                </li>
                <ul class="ul.circle">
                  <li>Pendaftaran kualifikasi berakhir pada tanggal 12 Oktober 2018 dan bracket akan bracket akan diumumkan pada tanggal 18 Oktober 2018 melalui website www.ihsl.id.</li>
                  <li>Sistem turnamen yang digunakan adalah single eliminations.</li>
                  <li>Turnamen akan diadakan setiap hari sabtu dan minggu menyesuaikan kegiatan regular sekolah selama tanggal 20 Oktober 2018 - 18 November 2018.</li>
                  <li>Sekolah dengan fasilitas lab komputer yang belum memadai WAJIB untuk bertanding di lokasi iCafe yang ditunjuk oleh panitia.</li>
                  <li>Final pertandingan akan diadakan di Jakarta, 15-16 Desember 2018.</li>
                  <li>Peserta final (2 besar) dari luar Jakarta bersedia untuk diterbangkan ke Jakarta untuk event ini.</li>
                  <li>Pemenang 20 besar dari kualifiasi ini BERHAK untuk mengikuti babak Liga musim pertama (Januari - Juli 2017) dan mendapatkan subsidi bimbingan guru bertahap (ketentuan terdapat di penjelasan sistem hadiah).</li>
                  <li>Hadiah kualifikasi akan diberikan untuk 3 pemenang utama dalam berupa beasiswa dan penyediaan komputer untuk lab esports yang disediakan oleh sponsor event ini (Syarat dan ketentuan disebutkan kemudian).</li>
                </ul>
              </ul>

              <h5 class="text-white">Liga (Musim)</h5>
              <ul class="ul.square">
                <li>Peserta berasal dari sekolah pemenang 20 besar babak kualifikasi.</li>
                <li>Liga akan diadakan setiap sabtu dan minggu untuk menyesuaikan dengan kegiatan regular sekolah.</li>
                <li>Sekolah yang berpartisipasi dalam 'High School League' tidak diperkenankan mengikuti liga serupa.</li>
                <li>Detail sistem liga akan diberikan dalam aturan pertandingan yang disediakan oleh penyelenggara.</li>
                <li>Sekolah tidak dapat mengundurkan diri selama dalam masa kontrak liga musim tersebut.</li>
                <li>Biaya subsidi untuk guru pembimbing kegiatan ekstrakurikuler esports yang akan diberikan kepada sekolah peserta liga adalah sebagai berikut:</li>
                <ul class="ul.circle">
                  <li>Pertandingan ke-1 sampai ke-11 akan diberikan Rp. 500.000,- per pertandingan</li>
                  <li>Pertandingan ke-12 sampai ke 16 akan diberikan Rp. 1.000.000,- per pertandingan</li>
                  <li>Pertandingan ke-17 sampai ke 19 akan diberikan Rp.1.500.000,- per pertandingan</li>
                  <li>Biaya subsidi dapat di terima pada akhir musim selesai.</li>
                </ul>
                <li>Sekolah dapat mengajukan perubahan/penyesuaian jadwal tanding dengan ketentuan sebagai berikut:</li>
                <ul class="ul.circle">
                  <li>Perubahan jadwal disepakati oleh kedua belah pihak (dengan team lawan) paling lambat 2 hari sebelum jadwal terdaftar.</li>
                  <li>Pertandingan wajib dilaksanakan selambatnya 2 hari sebelum pertandingan minggu depannya dimulai.</li>
                </ul>
                <li>Sekolah hanya diperkenankan WO sebanyak maksimal 2 kali dalam satu musim, sekolah akan di degradasi setelah WO ke-3 dan WAJIB mengembalikan subsidi pertandingan.</li>
                <li>Hadiah dari babak Liga akan diberikan dalam berupa beasiswa.</li>
                <li>Peserta pemenang liga (3 besar) yang berasal dari luar Jakarta bersedia diterbangkan untuk menghadiri acara pemberian hadiah (jika diadakan).</li>
                <li>Pemenang 16 besar dalam liga ini BERHAK untuk mengikuti liga di musim berikutnya.</li>
              </ul>

              <h5 class="text-white">Tentang High School League</h5>
              <p class="text-justify">
                High School league (HSL) adalah sebuah liga eSports dengan Dota 2 sebagai game utama. Namun akan selalu ada kemungkinan bertambahnya
                cabang game di musim berikutnya. Liga akan berlangsung selama 1 semester dan akan diadakan pertandingan setiap Sabtu dan Minggu.
                Tujuan liga ini adalah menjadi pencetus liga pelajar di Indonesia, memperkenalkan industri digital melalui eSports, memperkenalkan karir
                yang ada di industri digital, mencari bibit-bibit atlit esports, dan membentuk mental dan attitude atlet eSports.
                Tahun ini, babak kualifikasi HSL digelar di 8 kota yaitu Jakarta, Bandung, Bogor, Solo, Surabaya, Malang, Makassar, dan Medan.
                Liga akan dibagi menjadi 4 divisi, seri A (Top 20), seri B (Pos 21-60), seri C (Pos 61-140), dan seri D (Pos 141 kebawah).
              </p>
            </div>
          </b-modal>
        </div>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import InputImage from '@/components/Register.InputImage'
import FormAutoComplete from '@/components/Register.FormAutoComplete'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import Vue from 'vue'

Vue.use(VueSweetalert2)

export default {
  components: {
    'input-image': InputImage,
    'form-autocomplete': FormAutoComplete
  },
  data () {
    return {
      MAX_TEAM_MEMBER: 5,
      btnSubmit: false,
      form: {
        namaSekolah: '',
        alamatSekolah: '',
        teleponSekolah: '',
        emailSekolah: '',
        websiteSekolah: '',
        sosmedSekolah: '',
        namaGuru: '',
        teleponGuru: '',
        emailGuru: '',
        kotaLainnya: '',
        isAgree: false,
        selectedImages: {
          legal: '',
          schoolLogo: ''
        }
      },
      show: true,
      kotaSekolah: null,
      // kotaLainnya: null,
      optionKota: [
        { value: null, text: 'Silahkan pilih kota', disabled: true },
        { value: 'Jabodetabek', text: 'Jabodetabek' },
        { value: 'Bandung', text: 'Bandung' },
        { value: 'Malang', text: 'Malang' },
        { value: 'Makassar', text: 'Makassar' },
        { value: 'Medan', text: 'Medan' },
        { value: 'Solo', text: 'Solo' },
        { value: 'Surabaya', text: 'Surabaya' },
        { value: 'Balikpapan', text: 'Balikpapan' },
        { value: 'Denpasar', text: 'Denpasar' },
        { value: 'Blitar', text: 'Blitar' },
        { value: 'Jambi', text: 'Jambi' },
        { value: 'Jember', text: 'Jember' },
        { value: 'Palembang', text: 'Palembang' },
        { value: 'Purwokerto', text: 'Purwokerto' },
        { value: 'Samarinda', text: 'Samarinda' },
        { value: 'Lampung', text: 'Lampung' },
        { value: 'Semarang', text: 'Semarang' },
        { value: 'Yogyakarta', text: 'Yogyakarta' },
        { value: 99, text: 'Lainnya - Ajukan kotamu' }
      ],
      optionKotaLainnya: [
        { value: null, text: 'Kota yang diajukan', disabled: true },
        { value: 'Bengkalis', text: 'Bengkalis' },
        { value: 'Dumai', text: 'Dumai' },
        { value: 'Garut', text: 'Malang' },
        { value: 'Indramayu', text: 'Indramayu' },
        { value: 'Jambi', text: 'Jambi' },
        { value: 'Karawang', text: 'Karawang' },
        { value: 'Mataram', text: 'Mataram' },
        { value: 'Muara Bungo', text: 'Muara Bungo' },
        { value: 'Padang', text: 'Padang' },
        { value: 'Pemalang', text: 'Pemalang' },
        { value: 'Tanjung Pinang', text: 'Tanjung Pinang' }
      ],
      optioniCafe: [
        { value: null, text: 'Silahkan pilih i-Cafe', disabled: true },
        { value: 'Jabodetabek', text: 'Jabodetabek' },
        { value: 'Bandung', text: 'Bandung' },
        { value: 'Malang', text: 'Malang' },
        { value: 'Makassar', text: 'Makassar' },
        { value: 'Medan', text: 'Medan' },
        { value: 'Solo', text: 'Solo' },
        { value: 'Surabaya', text: 'Surabaya' },
        { value: 99, text: 'Lainnya - Ajukan kotamu' }
      ],
      // games: [], // Must be an array reference!
      games: null,
      gamePilihan: [
        { text: 'Silahkan pilih game', value: null, disabled: true },
        { text: 'Dota 2', value: 'dota' },
        { text: 'Mobile Legends', value: 'ml' }
      ],
      icafe: null,
      icafePilihan: {
        DKI_Jakarta: [
          { text: 'Ibisa', value: 'Ibisa' },
          { text: 'Barol Gaming', value: 'Barol Gaming' },
          { text: 'Dota Cafe', value: 'Dota Cafe' },
          { text: 'HIghGrounds', value: 'HIghGrounds' }
        ],
        JAWA_BARAT: [
          {
            text: 'Chronos Bandung Batununggal',
            value: 'Chronos Bandung Batununggal'
          },
          { text: 'RedFox', value: 'RedFox' }
        ],
        JAWA_TENGAH: [
          { text: 'D.Net', value: 'D.Net' },
          { text: 'TNC Pedurungan', value: 'TNC Pedurungan' },
          { text: 'TNC Sampangan', value: 'TNC Sampangan' },
          { text: 'TNC Banyumanik', value: 'TNC Banyumanik' },
          { text: 'Poseidon Game Center', value: 'Poseidon Game Center' }
        ],
        JAWA_TIMUR: [
          { text: 'MansCave', value: 'MansCave' },
          { text: 'Level 99 Jember', value: 'Level 99 Jember' },
          { text: 'Hardcore Malang', value: 'Hardcore Malang' },
          { text: 'Xgate surabaya', value: 'Xgate surabaya' },
          { text: 'Army Gaming', value: 'Army Gaming' },
          { text: 'Playhouse Surabaya', value: 'Playhouse Surabaya' },
          { text: 'Gunzie', value: 'Gunzie' },
          { text: '3Kingdom', value: '3Kingdom' },
          {
            text: 'Warlock Aghanim Surabaya',
            value: 'Warlock Aghanim Surabaya'
          }
        ],
        DI_YOGYAKARTA: [
          { text: 'Supernova Cybercafe', value: 'Supernova Cybercafe' },
          { text: 'TNC Gondomanan', value: 'TNC Gondomanan' }
        ],
        SUMATERA_UTARA: [{ text: 'iCAFE MEDAN', value: 'iCAFE MEDAN' }],
        BALI: [
          { text: 'De Throne 3 Ultimate', value: 'De Throne 3 Ultimate' },
          { text: 'De Throne Ultimate', value: 'De Throne Ultimate' }
        ],
        JAMBI: [{ text: 'RESPAWN GAMING', value: 'RESPAWN GAMING' }],
        KALIMANTAN_TIMUR: [
          { text: 'Cunz37 E-Sports', value: 'Cunz37 E-Sports' },
          { text: 'MAGNET CYBERSPORTS', value: 'MAGNET CYBERSPORTS' }
        ],
        LAMPUNG: [{ text: 'EmpireZ 3 I-cafe', value: 'EmpireZ 3 I-cafe' }],
        SULAWESI_UTARA: [{ text: 'TNC Makassar', value: 'TNC Makassar' }],
        SUMATERA_SELATAN: [
          { text: 'Hans Pro Gaming', value: 'Hans Pro Gaming' }
        ]
      },
      searchTeam: null,
      searchTeamUrl: ''
    }
  },
  computed: {
    selectedGameId () {
      return this.games === 'dota' ? 1 : 3
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.btnSubmit = true
      console.log(JSON.stringify(this.form))
      let isAgree = 0
      if (this.form.isAgree.length > 0) {
        isAgree = 1
      }

      if (isAgree === 1) {
        let data = {
          namaSekolah: this.form.namaSekolah,
          alamatSekolah: this.form.alamatSekolah,
          teleponSekolah: this.form.teleponSekolah,
          emailSekolah: this.form.emailSekolah,
          // 'websiteSekolah': this.form.websiteSekolah,
          // 'sosmedSekolah': this.form.sosmedSekolah,
          gamePilihan: this.games,
          kotaSekolah: this.kotaSekolah,
          kotaLainnya: this.form.kotaLainnya,
          namaGuru: this.form.namaGuru,
          teleponGuru: this.form.teleponGuru,
          emailGuru: this.form.emailGuru,
          icafePilihan: this.icafe,
          teleponCaptain: this.form.teleponCaptain,
          teleponViceCaptain: this.form.teleponViceCaptain,
          isAgree: isAgree,
          legal: this.form.selectedImages.legal,
          schoolLogo: this.form.selectedImages.schoolLogo,
          teamId: this.searchTeam ? this.searchTeam.id : null,
          teamName: this.searchTeam ? this.searchTeam.title : null,
          teamMembers:
            this.searchTeam && this.searchTeam.team_member
              ? this.searchTeam.team_member
              : null
        }
        console.log(data)
        let isValidate = this.isValidate(data)
        if (isValidate.code) {
          axios.post(process.env.API_URL + '/api/v1/register', data).then(
            response => {
              if (response.data.status) {
                this.$swal('Register Successfull', '', 'success')
                this.$router.push('/home')
                this.form = []
              } else {
                this.btnSubmit = false
                this.$swal({
                  type: 'error',
                  title: 'Registrasi Gagal',
                  html: response.data.errors
                })
              }
            },
            response => {
              this.$swal({
                type: 'error',
                title: 'Registrasi Gagal',
                text: response
              })
              this.btnSubmit = false
            }
          )
        } else {
          this.$swal({
            type: 'error',
            title: 'Registrasi Gagal',
            text: isValidate.text
          })
          this.btnSubmit = false
        }
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
    },
    setSelectedImage (imageUrl, key) {
      if (key === 1) {
        this.form.selectedImages.legal = imageUrl
      } else if (key === 2) {
        this.form.selectedImages.schoolLogo = imageUrl
      }
    },
    onChangeGames (event) {
      this.searchTeam = null
      if (event === 'dota') {
        this.selectedGame = 1
      } else if (event === 'ml') {
        this.selectedGame = 3
      }
    },
    isValidate (data) {
      for (let index in data) {
        // if (data[index] === null || data[index] === '') {
        //   return {
        //     code: false,
        //     text: 'Kamu belum mengisi semua form yang tersedia'
        //   }
        // } else
        if (index === 'teamMembers' && data[index] !== null) {
          if (data['teamMembers'].length !== this.MAX_TEAM_MEMBER) {
            return {
              code: false,
              text:
                'Jumlah anggota tim kamu harus ' +
                this.MAX_TEAM_MEMBER +
                ' orang'
            }
          } else {
            for (let i in data['teamMembers']) {
              if (data['teamMembers'][i].in_game_id === null) {
                return {
                  code: false,
                  text: 'Anggota tim kamu ada yang belum memasukkan in game id'
                }
              }
            }
          }
        }
      }
      return {
        code: true,
        message: 'Registrasi valid'
      }
    }
  }
}
</script>
<style>
.list-group-item {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  margin-bottom: 5px;
  border-radius: 10px;
}
.list-group-item--avatar {
  align-items: center;
}
.list-group-item--avatar img {
  width: 50px;
  height: 50px;
  border-radius: 100%;
}
.list-group-item--title {
  flex-direction: column;
  margin-left: 15px;
}
.list-group-item--title p {
  margin-bottom: 0;
}
</style>

<!-- b-form-1.vue -->