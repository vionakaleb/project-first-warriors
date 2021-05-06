<template>
  <b-container fluid class="bg-img" style="overflow-x: hidden;">
    <!-- MENU BUTTON -->
    <div class="sec-menu-button pad-top-80 center-content">
      <button v-bind:class="'menu-blue '+ isActive1" v-on:click="changeTab(1)">Jadwal Kompetisi</button>
      <button v-bind:class="'menu-blue '+ isActive2" v-on:click="changeTab(2)">Informasi Lokasi</button>
      <button v-bind:class="'menu-blue '+ isActive3" v-on:click="changeTab(3)">Profil Pemain</button>
      <button v-bind:class="'menu-blue '+ isActive4" v-on:click="changeTab(4)">Profil Juri</button>
    </div>
    <!-- MENU BUTTON -->

    <!-- LIT COMPETITION -->
    <div v-if="currentTab == 1">
      <div class="pad-top-80 text-center">
        <span class="dinMedium title-all">Jadwal&nbsp;</span>
        <span class="dinMedium title-all" style="color: #1b90bc; font-weight: bold">Kompetisi</span>
      </div>
      <div class="container-fluid for-desktop w-100 mb-20">
        <div
          class="d-flex flex-row justify-content-between"
          style="margin: 50px auto; max-width: 1230px;"
        >
          <div
            class="tab-list"
            :class="isCity == 'jabodetabek' ? 'active-city' : ''"
            v-on:click="getTournament('jabodetabek')"
          >Jabodetabek</div>
          <div
            class="tab-list"
            :class="isCity == 'medan' ? 'active-city' : ''"
            v-on:click="getTournament('medan')"
          >Medan</div>
          <div
            class="tab-list"
            :class="isCity == 'surabaya' ? 'active-city' : ''"
            v-on:click="getTournament('surabaya')"
          >Surabaya</div>
          <div
            class="tab-list"
            :class="isCity == 'bandung' ? 'active-city' : ''"
            v-on:click="getTournament('bandung')"
          >Bandung</div>
          <div
            class="tab-list"
            :class="isCity == 'batam' ? 'active-city' : ''"
            v-on:click="getTournament('batam')"
          >Batam</div>
          <div
            class="tab-list"
            :class="isCity == 'semarang' ? 'active-city' : ''"
            v-on:click="getTournament('semarang')"
          >Semarang</div>
        </div>
        <div
          class="row padding-list pad-y-20 wrap-1300"
          v-for="(featured, index) in arrTournament"
          :key="index"
        >
          <div class="d-flex" style="margin: auto;">
            <div class="col-md-3 pad-0">
              <div class="card card-list">
                <img class="card-img-top card-img-tournament-desktop" :src="featured.resizePoster" />
              </div>
            </div>
            <div class="col-md-9 pad-0">
              <div class="card-body bg-card d-flex flex-column bd-highlight">
                <div class="wrappers d-flex" style="margin-top: 5px;">
                  <div class="btn-featured" v-if="featured.featured === '1'">Featured</div>
                  <div class="btn-series" v-if="featured.type === 'series'">Series</div>
                  <!-- <div class="btn-vip">VIP</div> -->
                  <p class="title-space">{{featured.name}}</p>
                  <p
                    class="txt-upcoming text-right"
                    style="margin-top: 7px;"
                    v-if="featured.status === 0"
                  >Upcoming</p>
                  <p
                    class="txt-ongoing text-right"
                    style="margin-top: 7px;"
                    v-else-if="featured.status === 1"
                  >Ongoing</p>
                  <p class="txt-end text-right" style="margin-top: 7px;" v-else>End</p>
                </div>
                <div class="d-flex" style="margin-top: 30px;">
                  <p class="menu col-md-4" style="font-size: 13px; color: #5f5f5f;">ENTRY</p>
                  <!-- <p class="menu col-md-2">ENTRY</p> -->
                  <p class="menu col-md-2" style="font-size: 13px; color: #5f5f5f;">SLOTS</p>
                  <p class="menu col-md-2" style="font-size: 13px; color: #5f5f5f;">DATE</p>
                  <p class="menu col-md-2" style="font-size: 13px; color: #5f5f5f;">TIME</p>
                  <p
                    class="menu col-md-2"
                    style="text-align:right"
                    v-if="now() < featured.unixTimeTegistrationClose"
                  >CLOSE IN</p>
                  <p class="menu col-md-2" style="text-align:right" v-else>REGISTRATION</p>
                </div>
                <div class="d-flex bd-highlight" style="margin-top: -15px;">
                  <p class="menu col-md-4">Free</p>
                  <!-- <p class="menu col-md-2">Free</!-->
                  <p class="menu col-md-2">{{ featured.countParticipant }}/{{ featured.team_slot }}</p>
                  <p class="menu col-md-2">{{ setStartDateFormat(featured.start_time) }}</p>
                  <p class="menu col-md-2">{{ setStartTimeFormat(featured.start_time) }}</p>
                  <p class="menu col-md-2" style="text-align:right">
                    <countdownregis :start="now()" :end="featured.unixTimeTegistrationClose"></countdownregis>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="for-mobile">
        <div style="width: 100%; margin: 10px auto;">
          <b-form-select v-model="isCity" v-on:change="getTournament($event)" class="mb-3">
            <option value="jabodetabek">Jabodetabek</option>
            <option value="medan">Medan</option>
            <option value="surabaya">Surabaya</option>
            <option value="bandung">Bandung</option>
            <option value="batam">Batam</option>
            <option value="semarang">Semarang</option>
          </b-form-select>
        </div>
        <div
          class="card"
          style="width: 18rem; margin: 0 auto; margin-bottom: 10px;"
          v-for="(featured, index) in arrTournament"
          :key="index"
        >
          <img class="card-img-top" :src="featured.resizePoster" />
          <div class="card-body bgCard-mobile">
            <div class="card-title d-flex">
              <div class="btn-featured" v-if="featured.featured === '1'">Featured</div>
              <div class="btn-series" v-if="featured.type === 'series'">Series</div>

              <p
                class="txt-upcoming text-right"
                style="width: 100%;"
                v-if="featured.status === 0"
              >Upcoming</p>
              <p
                class="txt-ongoing text-right"
                style="width: 100%;"
                v-else-if="featured.status === 1"
              >Ongoing</p>
              <p class="txt-end text-right" style="width: 100%;" v-else>End</p>
            </div>
            <p style="margin: 0 10px 10px 0px;">{{featured.name}}</p>
            <!-- <div class="card-text row">
              <p class="menu col-4">PRIZE</p>
              <p v-if="featured.prize_type != 4 && featured.total_prize == null">None</p>
              <p
                v-else-if="featured.prize_type == 1 && !isNaN(featured.total_prize)"
              >IDR {{ setFormatMoney(featured.total_prize) }}</p>
              <p v-else-if="featured.prize_type == 4">Other</p>
              <p v-else>Unknown</p>
            </div>-->
            <!-- <div class="card-text row">
              <p class="menu col-s-2">ENTRY</p>
              <p>Free</p>
            </div>-->
            <div class="card-text row">
              <p class="menu col-4">SLOTS</p>
              <p class="col-s-2">{{ featured.countParticipant }}/{{ featured.team_slot }}</p>
            </div>
            <div class="card-text row">
              <p class="menu col-4">DATE</p>
              <p class="col-s-2">{{ setStartDateFormat(featured.start_time) }}</p>
            </div>
            <div class="card-text row">
              <p class="menu col-4">TIME</p>
              <p class="col-s-2">{{ setStartTimeFormat(featured.start_time) }}</p>
            </div>
            <div class="card-text row">
              <p class="menu col-4" v-if="now() < featured.unixTimeTegistrationClose">CLOSE IN</p>
              <p class="menu col-4" v-else>REGISTRATION</p>
              <p class="col-s-2">
                <countdownregis :start="now()" :end="featured.unixTimeTegistrationClose"></countdownregis>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- LIST COMPETITION -->

    <!-- VENUE -->
    <div v-if="currentTab == 2">
      <div class="pad-top-80 text-center">
        <span class="dinMedium title-all">Informasi&nbsp;</span>
        <span class="dinMedium title-all" style="color: #1b90bc; font-weight: bold">Lokasi</span>
      </div>
      <div class="sec-venue pad-x-60 pad-y-20 wrap-1300">
        <div class="card-venue">
          <div class="row">
            <div class="col-md-4">
              <img
                src="/static/img/lokasi/medan.jpg"
                class="card-img-top border-radius-img"
                style="height: 200px; "
              />
            </div>
            <div class="col-md-8 py-3">
              <div class="card-block">
                <h5 class="card-title">MEDAN</h5>
                <h3 class="card-title">SUN PLAZA</h3>
                <p
                  class="card-text"
                >Jl. KH. Zainul Arifin No.7, Madras Hulu, Kec. Medan Polonia, Kota Medan, Sumatera Utara 20152</p>
                <a
                  href="https://goo.gl/maps/dBvfpdos5qj2Uqy77"
                  target="_blank"
                  class="float-right px-3 lihat-lokasi"
                  style="color: #007af3"
                >
                  <u>Lihat Lokasi</u>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="card-venue">
          <div class="row">
            <div class="col-md-4">
              <img
                src="/static/img/lokasi/surabaya.jpg"
                class="card-img-top border-radius-img"
                style="height: 200px;"
              />
            </div>
            <div class="col-md-8 py-3">
              <div class="card-block">
                <h5 class="card-title">SURABAYA</h5>
                <h3 class="card-title">GALAXY MALL</h3>
                <p
                  class="card-text"
                >Jalan Dharmahusada Indah Timur No.35-37, Mulyorejo, Kec. Mulyorejo, Kota SBY, Jawa Timur 60115</p>
                <a
                  href="https://goo.gl/maps/Eh1g43gqt1Hehm2A7"
                  target="_blank"
                  class="float-right px-3 lihat-lokasi"
                  style="color: #007af3"
                >
                  <u>Lihat Lokasi</u>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="card-venue">
          <div class="row">
            <div class="col-md-4">
              <img
                src="/static/img/lokasi/bandung.jpg"
                class="card-img-top border-radius-img"
                style="height: 100%;"
              />
            </div>
            <div class="col-md-8 py-3">
              <div class="card-block">
                <h5 class="card-title">BANDUNG</h5>
                <h3 class="card-title">ISTANA PLAZA</h3>
                <p
                  class="card-text"
                >Jl. Pasir Kaliki No.121-123, Pamoyanan, Kec. Cicendo, Kota Bandung, Jawa Barat 40173</p>
                <a
                  href="https://goo.gl/maps/3gojRuxLTrrK6tDZ9"
                  target="_blank"
                  class="float-right px-3 lihat-lokasi"
                  style="color: #007af3"
                >
                  <u>Lihat Lokasi</u>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="card-venue">
          <div class="row">
            <div class="col-md-4">
              <img
                src="/static/img/lokasi/jakarta.jpg"
                class="card-img-top border-radius-img"
                style="height: 200px;"
              />
            </div>
            <div class="col-md-8 py-3">
              <div class="card-block">
                <h5 class="card-title">JAKARTA</h5>
                <h3 class="card-title">LIPPO MALL PURI</h3>
                <p
                  class="card-text"
                >Walikota Jakarta Barat, RT.1/RW.2, Kembangan Sel., Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11610</p>
                <a
                  href="https://goo.gl/maps/th3626ugGB3dEM1e9"
                  target="_blank"
                  class="float-right px-3 lihat-lokasi"
                  style="color: #007af3"
                >
                  <u>Lihat Lokasi</u>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="card-venue">
          <div class="row">
            <div class="col-md-4">
              <img
                src="/static/img/lokasi/online-batam.png"
                class="card-img-top border-radius-img"
                style="height: 200px;"
              />
            </div>
            <div class="col-md-8 py-3">
              <div class="card-block">
                <h5 class="card-title">BATAM</h5>
                <h3 class="card-title">Batam Online Qualifiers</h3>
                <p class="card-text">Join online qualifier in Yamisok</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-venue">
          <div class="row">
            <div class="col-md-4">
              <img
                src="/static/img/lokasi/online-semarang.png"
                class="card-img-top border-radius-img"
                style="height: 200px;"
              />
            </div>
            <div class="col-md-8 py-3">
              <div class="card-block">
                <h5 class="card-title">SEMARANG</h5>
                <h3 class="card-title">Semarang Online Qualifiers</h3>
                <p class="card-text">Join online qualifier in Yamisok</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- VENUE -->

    <!-- WARRIORS -->
    <div v-if="currentTab == 3">
      <div class="pad-top-80 text-center">
        <span style="font-size: 62px;">Profil&nbsp;</span>
        <span class="boldProx" style="font-size: 62px; color: #ffc800;">Pemain</span>
      </div>
      <div class="row pad-x-60 pad-y-20 wrap-1300">
        <div
          class="col-md-3 d-flex mar-bot-20 justify-content-center"
          v-for="(participants, index) in arrParticipants"
          :key="index"
        >
          <div class="card war-card d-flex">
            <img class="card-img-top picProf" :src="participants.image" alt="Card image cap" />
          </div>
          <div class="s-card p-1 pl-2 text-truncate">
            <span
              style="font-size: 18px; color: white;"
              :title="participants.name"
            >{{participants.name}}</span>
            <br />
            <span style="font-size: 15px;">{{participants.city}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- WARRIORS -->

    <!-- JUDGES -->
    <div v-if="currentTab == 4">
      <div class="pad-top-80 text-center">
        <span class="title-all dinMedium">Profil&nbsp;</span>
        <span class="title-all dinMedium" style="color: #1b90bc; font-weight: bold">Juri</span>
      </div>
      <div class="sec-judges pad-x-60 pad-y-20 wrap-1300">
        <div class="col-md-3 mar-bot-20" v-for="(judges, index) in arrJudges" :key="index">
          <div class="card card-judges">
            <img
              v-if="judges.image === ''"
              src="https://efecs.eu/assets/efecs/image/1773.jpg"
              class="card-img-top height-img"
              alt="..."
            />
            <img
              v-if="judges.image !== ''"
              v-bind:src="judges.image"
              class="card-img-top height-img"
              alt="..."
            />
            <div class="card-body">
              <div class="card-title text-center">
                <span style="font-size: 20px; color: white;">{{judges.name}}</span>
              </div>
              <p class="card-text text-center">
                <span style="font-size: 16px; color: #007af3">{{judges.job}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- JUDGES -->
  </b-container>
</template>

<script>
import Vue from 'vue'
import VueBus from 'vue-bus'
import axios from 'axios'
import moment from 'moment'
import countdownregis from './CountdownRegis'

Vue.use(VueBus)

export default {
  data () {
    return {
      selected: null,
      currentTab: 1,
      isActive1: 'is-active',
      isActive2: '',
      isActive3: '',
      isActive4: '',

      isCity: '',

      arrTournament: [],
      arrJudges: [],
      arrParticipants: []
    }
  },

  components: { countdownregis },

  mounted () {
    this.currentTab = 1
    this.getTournament('jabodetabek')
    this.getParticipants()
  },

  methods: {
    changeTab (index) {
      this.currentTab = index
      if (index === 1) {
        this.isActive1 = 'is-active'
        this.isActive2 = ''
        this.isActive3 = ''
        this.isActive4 = ''
      } else if (index === 2) {
        this.isActive1 = ''
        this.isActive2 = 'is-active'
        this.isActive3 = ''
        this.isActive4 = ''
      } else if (index === 3) {
        this.isActive1 = ''
        this.isActive2 = ''
        this.isActive3 = 'is-active'
        this.isActive4 = ''
      } else if (index === 4) {
        this.isActive1 = ''
        this.isActive2 = ''
        this.isActive3 = ''
        this.isActive4 = 'is-active'
      }
    },

    setStartDateFormatNews: function (startTime) {
      var value = startTime * 1000
      return moment(value).format('DD MMM YYYY')
    },

    now () {
      var str = new Date().getTime()
      str = str.toString()
      str = str.slice(0, -3)
      str = parseInt(str)
      return str
    },

    setStartDateFormat: function (startTime) {
      return moment(startTime).format('DD MMM YYYY')
    },

    setStartTimeFormat: function (startTime) {
      return moment(startTime).format('H:mm')
    },

    setFormatMoney: function (prize) {
      var rev = parseInt(prize, 10)
        .toString()
        .split('')
        .reverse()
        .join('')
      var rev2 = ''
      for (var i = 0; i < rev.length; i++) {
        rev2 += rev[i]
        if ((i + 1) % 3 === 0 && i !== rev.length - 1) {
          rev2 += '.'
        }
      }
      return rev2
        .split('')
        .reverse()
        .join('')
    },

    getTournament (value) {
      this.isCity = value
      this.arrTournament = []
      axios
        .get(
          process.env.API_URL +
            '/api/v1/first-warrior-schedule/2?page=1&status=all&game_id=all&city=' +
            value
        )
        .then(response => {
          if (response.data.status === 200) {
            this.arrTournament = response.data.data[0].tournament_childs
          } else {
            this.arrTournament = []
          }
        })
        .catch(_error => {
          console.log(_error)
        })
    },

    getParticipants () {
      axios
        .get(process.env.API_URL + '/api/v1/first-warrior-participant')
        .then(response => {
          if (response.data.status === 200 || response.data.status === 201) {
            this.arrParticipants = response.data.data
            this.getJudges()
          } else {
            this.getJudges = []
          }
        })
        .catch(_error => {
          console.log(_error)
        })
    },

    getJudges () {
      axios
        .get(process.env.API_URL + '/api/v1/first-warrior-judges')
        .then(response => {
          if (response.data.status === 200) {
            this.arrJudges = response.data.data
          } else {
            this.arrJudges = []
          }
        })
        .catch(_error => {
          console.log(_error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.center-content {
  @media only screen and (min-width: 1200px) {
    max-width: 1300px;
  }
  @media only screen and (max-width: 1024px) {
    margin: 0 5vw;
  }
}

// GENERAL
p {
  @media only screen and (max-width: 1024px) {
    margin-left: 10px;
    margin-block-end: 0;
    font-size: 2.4vmin;
    margin-block-start: 0;
  }
}

.wrap-1300 {
  max-width: 1300px;
  margin: auto;
}
// GENERAL

// ALL PADDING AND MARGIN
// PADDING
.pad-0 {
  padding: 0px;
}

.pad-20 {
  padding: 20px;
}

.pad-60 {
  padding: 60px;
}

.pad-y-20 {
  padding-left: 20px;
  padding-right: 20px;
}

.pad-top-80 {
  padding-top: 80px;
}

.pad-x-30 {
  padding-top: 30px;
  padding-bottom: 30px;
}

.pad-x-60 {
  padding-top: 60px;
  padding-bottom: 60px;
}

.pad-x-80 {
  padding-top: 80px;
  padding-bottom: 80px;
}

// MARGIN
.mar-auto {
  margin: auto;
}

.mar-top-10 {
  margin-top: 10px;
}

.mar-top-20 {
  margin-top: 20px;
}

.mar-bot-10 {
  margin-bottom: 10px;
}

.mar-bot-20 {
  margin-bottom: 20px;
}

.mar-bot-25 {
  margin-bottom: 25px;
}

.mar-bot-30 {
  margin-bottom: 20px;
}

.mar-bot-40 {
  margin-bottom: 40px;
}

.mar-bot-60 {
  margin-bottom: 60px;
}
// ALL PADDING AND MARGIN

// SECTION MENU BUTTON
.sec-menu-button {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.menu-blue {
  background-color: #0b0f13;
  border: 0px;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  width: 300px;
  height: 60px;

  font-size: 23px;
}

.is-active {
  background-color: #007af3;
}

@media only screen and (max-width: 1280px) {
  .menu-blue {
    background-color: #0b0f13;
    border: 0px;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    width: 210px;
    height: 50px;

    font-size: 19px;
  }

  .is-active {
    background-color: #007af3;
  }
}

@media only screen and (max-width: 900px) {
  .menu-blue {
    background-color: #0b0f13;
    border: 0px;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    width: 150px;
    height: 40px;

    font-size: 15px;
  }

  .is-active {
    background-color: #007af3;
  }
}

@media only screen and (max-width: 600px) {
  .menu-blue {
    background-color: #0b0f13;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    width: 100px;
    height: 30px;

    font-size: 10px;
  }

  .is-active {
    background-color: #007af3;
  }
}
// SECTION MENU BUTTON

// SECTION LIST TOURNAMENT
.tab-list {
  font-size: 28px;
  line-height: 34px;
  font-family: proximaReg;
  cursor: pointer;
}

.active-city {
  border-bottom: 4px solid #007af3;
}

.for-desktop {
  display: block;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
}

.padding-list {
  padding-top: 10px;
  padding-bottom: 10px;
}

.padding-list:first-child {
  padding-top: 60px;
  padding-bottom: 10px;
}

.padding-list:last-child {
  padding-top: 10px;
  padding-bottom: 60px;
}

.for-mobile {
  display: none;
  @media only screen and (max-width: 1024px) {
    display: block;
  }
}

.bgCard-mobile {
  background-color: #171717;
  padding: 3vmin;
}

.menu {
  color: white;
  font-size: 14px;
  @media only screen and (max-width: 1024px) {
    font-size: 2.5vmin;
    width: 25%;
    padding: 0 3vmin;
  }
}

.menu2 {
  font-size: 1.7vmin;
  height: fit-content;
  width: fit-content;
  margin: 3vmin auto;
}

.details {
  padding-top: 2vw;
}

.wrappers {
  border-bottom: 1px solid grey;
}

.txt-upcoming {
  float: right;
  width: 35%;
  color: #f3c500;
  text-shadow: 0 0 5px #f3c500;
  font-size: 12px;

  @media only screen and (max-width: 1024px) {
    font-size: 2vmin;
    line-height: 4vmin;
    margin-block-end: 0;
    margin-block-start: 0;
    width: 80%;
  }
}

.txt-ongoing {
  float: right;
  width: 35%;
  color: #1eeb07;
  text-shadow: 0 0 5px #1eeb07;
  font-size: 12px;

  @media only screen and (max-width: 1024px) {
    font-size: 2vmin;
    line-height: 4vmin;
    margin-block-end: 0;
    margin-block-start: 0;
    width: 80%;
  }
}

.txt-end {
  float: right;
  width: 35%;
  color: #f20000;
  text-shadow: 0 0 5px #f20000;
  font-size: 12px;

  @media only screen and (max-width: 1024px) {
    font-size: 2vmin;
    line-height: 4vmin;
    margin-block-end: 0;
    margin-block-start: 0;
    width: 80%;
  }
}

.bg-card {
  background-color: #171717;
  height: 100%;
  width: 100%;
  padding: 10px;
  border-radius: 0 10px 10px 0;
  @media only screen and (min-width: 1900px) {
    width: 100%;
  }
}

.btn-featured {
  background-image: linear-gradient(to right, #f3c400, #ff6f00);
  border: none;
  border-radius: 5px;
  font-size: 12px;
  cursor: default;
  width: 7vw;
  height: 2vw;
  text-align: center;
  padding-top: 5px;
  color: black;
  font-weight: 900;
  @media only screen and (max-width: 1024px) {
    font-size: 2vmin;
    width: 12vmin;
    height: 4vmin;
    text-align: center;
    padding-top: 1vmin;
    line-height: 2vmin;
  }
}

.btn-vip {
  background-image: linear-gradient(to right, #a9500c, #925f40);
  border: none;
  border-radius: 5px;
  font-size: 12px;
  width: 5vw;
  height: 2vw;
  padding-top: 5px;
  margin-left: 1vw;
  text-align: center;
  cursor: default;
  font-weight: 900;
  @media only screen and (max-width: 1024px) {
    font-size: 2vmin;
    width: 10vmin !important;
    height: 4vmin;
    margin-left: 1vw;
    line-height: 1.5vmin;
  }
}

.btn-series {
  background-image: linear-gradient(to right, #68d8ad, #0a945f);
  border: none;
  border-radius: 5px;
  font-size: 11px;
  padding-left: 10px !important;
  padding-right: 10px !important;
  margin-right: 10px;
  cursor: default;
}

// RESOLUTION UNDER OR SAME 1366
@media only screen and (max-width: 1366px) {
  .bg-card {
    width: 100% !important;
  }
  .title-space {
    width: 40vw;
    margin-left: 10px;
  }
  // .btn-featured {
  //   width: 7vw !important;
  // }
  // .btn-vip {

  // }
}

// RESOLUTION UP 1600
@media only screen and (min-width: 1600px) {
  .title-space {
    width: 40vw;
    margin-left: 10px;
  }
  .btn-featured {
    // width: 7vw !important;
    height: 1.5vw !important;
  }
  .btn-vip {
    height: 1.5vw !important;
  }
  .bg-card {
    width: 100% !important;
  }
  .details {
    padding-top: 4vw !important;
  }
}
// SECTION LIST TOURNAMENT

// SECTION VENUE
.sec-venue {
  width: 1300px;
  margin: auto;
}
.lihat-lokasi {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.card-venue {
  background-color: #0b0f13;
  border-radius: 10px;
  margin-bottom: 20px;
}
.card-block {
  margin: 10px;
}
.border-radius-img {
  border-radius: 10px 0 0 10px;
  object-fit: cover;
  object-position: left;
  @media only screen and (max-width: 900px) {
    border-radius: 10px 10px 0 0;
  }
}
@media only screen and (max-width: 1300px) {
  .sec-venue {
    width: 900px;
    margin: 0 auto;
  }
}

@media only screen and (max-width: 960px) {
  .sec-venue {
    width: 100%;
    margin: 0 auto;
  }
}
// SECTION VENUE

// SECTION WARRIOR
.s-card {
  background-color: #2a343a;
  border-radius: 0 10px 10px 0;
  width: 60%;
}

.war-card {
  border-radius: 10px 0px 0 10px;
}

.picProf {
  width: 85px;
  height: 60px;
  border-radius: 10px 0px 0 10px;
}

.sec-warrior {
  width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

@media only screen and (max-width: 1300px) {
  .sec-warrior {
    width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}

@media only screen and (max-width: 960px) {
  .sec-warrior {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
// SECTION WARRIOR

// SECTION JUDGES
.card-judges {
  background-color: #2a343a;
}

.card-img-top {
  border-top-left-radius: calc(15px - 1px);
  border-top-right-radius: calc(15px - 1px);
}

.card-img-tournament-desktop {
  border-top-left-radius: calc(15px - 1px) !important;
  border-bottom-left-radius: calc(15px - 1px) !important;
  border-top-right-radius: 0;
}

.height-img {
  width: 100%;
  object-fit: cover;
}

.sec-judges {
  width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

@media only screen and (max-width: 1300px) {
  .sec-judges {
    width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}

@media only screen and (max-width: 960px) {
  .sec-judges {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}
// SECTION JUDGES
</style>