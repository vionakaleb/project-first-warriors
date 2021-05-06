<template>
  <div>
    <!-- BANNER -->
    <div class="sec-banner">
      <img class="img-banner" src="/static/img/home/header-grand-final.jpg" />
    </div>
    <!-- BANNER -->

    <!-- COUNTDOWN -->
    <!-- <div class="bg-countdown">
      <div class="pad-x-60 pad-y-20 wrap-1300">
        <div class="row mar-bot-20">
          <div class="col-md-12 mar-bot-30 text-center">
            <span
              style="font-size: 17px; color: white"
            >S&nbsp;E&nbsp;G&nbsp;E&nbsp;R&nbsp;A&emsp;D&nbsp;I&nbsp;M&nbsp;U&nbsp;L&nbsp;A&nbsp;I&emsp;D&nbsp;A&nbsp;L&nbsp;A&nbsp;M</span>
          </div>
          <div class="row sec-countdown">
            <div class="box-countdown text-center">
              <span id="days" class="text-tick-countdown GothamBook">23</span>
              <span class="text-sub">Days</span>
            </div>
            <div class="box-countdown text-center">
              <span id="hours" class="text-tick-countdown GothamBook">23</span>
              <span class="text-sub">Hours</span>
            </div>
            <div class="box-countdown text-center">
              <span id="minutes" class="text-tick-countdown GothamBook">23</span>
              <span class="text-sub">Minutes</span>
            </div>
            <div class="box-countdown text-center">
              <span id="seconds" class="text-tick-countdown GothamBook">23</span>
              <span class="text-sub">Second</span>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <!-- COUNTDOWN -->

    <!-- INFORMATION -->
    <div class="bg-information">
      <div class="pad-x-60 pad-y-20 wrap-1300">
        <div class="row mar-bot-40">
          <div class="col-md-12 text-center" style="line-height: 25px;">
            <span class="title-all" style="color: #fff">Pertama kali&nbsp;</span>
            <span class="dinMedium title-all" style="font-weight: bold; color: #fff">di Indonesia</span>
          </div>
        </div>
        <div class="row mar-bot-60">
          <div class="col-md-12 text-center">
            <span class="GothamBook" style="font-size: 20px; color: #fff ">
              First Warriors adalah ajang pencarian bakat esports gamer terbaik dari seluruh Indonesia yang memiliki kemampuan individu yang kompetitif,
              profesionalisme, kerjasama team, dan memiliki sikap yang baik yang nantinya akan di olah dalam program karantina yang dimana terdapat keterampilan
              skill game serta pembentukan karakter untuk dapat menjadi pemain profesional untuk dapat berkompetitif di nasional maupun internasional.
              Pada saat yang bersamaan juga memberikan informasi kepada seluruh gamers di dunia tentang dunia esports sebagai hobi, karir, dan sebagai bentuk prestasi sebuah negara.
            </span>
          </div>
        </div>
        <div class="row sec-information">
          <div class="text-center box-information">
            <span style="font-size: 16px; font-family:GothamBook">Kualifikasi</span>
            <span class="GothamBookBold text-point-information">6</span>
            <span style="font-size: 28px; font-family:GothamBook; color:#1b90bc">Kota Besar</span>
          </div>
          <div class="text-center box-information">
            <span style="font-size: 16px; font-family:GothamBook">Karantina</span>
            <span class="GothamBookBold text-point-information">16</span>
            <span style="font-size: 28px; font-family:GothamBook; color:#1b90bc">Hari</span>
          </div>
          <div class="text-center box-information">
            <span style="font-size: 16px; font-family:GothamBook">Audisi</span>
            <span class="GothamBookBold text-point-information">2</span>
            <span style="font-size: 28px; font-family:GothamBook; color:#1b90bc">Tim terbaik</span>
          </div>
          <div class="text-center box-information">
            <span style="font-size: 16px;">Reality Show</span>
            <span class="GothamBookBold text-point-information">13</span>
            <span style="font-size: 28px; font-family:GothamBook; color:#1b90bc">Episode</span>
          </div>
        </div>
        <div class="row sec-information">
          <a href="https://www.yamisok.com/login">
            <button class="d-btn--red size-btn-join-info GothamBook">Gabung Sekarang</button>
          </a>
          <router-link to="/tutorial">
            <button class="d-btn--white-border size-btn-join-info GothamBook">Tutorial mengikuti tournament</button>
          </router-link>
        </div>
      </div>
    </div>
    <!-- INFORMATION -->

    <!-- ALUR TOURNAMENT -->
    <section>
      <div class="bg-alur">
        <div class="col-md-12 text-center alur-text">
          <span class="title-alur" style="color: #fff">Alur&nbsp;</span>
          <span class="dinMedium title-alur" style="font-weight: bold; color: #fff">Tournament</span>
        </div>
        <img
          style="width:100%;"
          class="for-desktop"
          src="/static/img/home/alur-tournament_rev-desktop.jpg"
          alt
        />
        <img
          style="width:100%;"
          class="for-mobile"
          src="/static/img/home/alur-tournament_rev-mobile.jpg"
          alt
        />
      </div>
    </section>
    <!-- ALUR TOURNAMENT -->

    <!-- SCHEDULE -->
    <div class="bg-schedule">
      <div class="pad-x-60 pad-y-20 wrap-1300">
        <div class="row mar-bot-30">
          <div class="col-md-12 text-center">
            <span class="title-all dinMedium">Susunan&nbsp;</span>
            <span class="dinMedium title-all" style="color: #1b90bc; font-weight: bold;">Acara</span>
          </div>
        </div>
        <div class="row mar-auto mar-bot-20">
          <div class="col-md-12 text-center">
            <div class="for-desktop">
              <img
                style="max-width: 100%; height: auto;"
                src="/static/img/home/schedule-desktop.png"
              />
            </div>
            <div class="for-mobile">
              <img
                style="max-width: 100%; height: auto;"
                src="/static/img/home/schedule-mobile.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- SCHEDULE -->

    <!-- PROFILE JURI -->
    <div class="bg-profile-juri">
      <div class="pad-top-80 text-center">
        <span class="dinMedium" style="font-size: 62px; color: #1b90bc;">Profil&nbsp;</span>
        <span class="dinMedium" style="font-size: 62px; color: #fff; font-weight: bold;">Juri</span>
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

    <!-- JOIN TOURNAMENT -->
    <div class="bg-join-tournament">
      <div class="pad-x-60 pad-y-20 wrap-1300">
        <div class="row mar-bot-20">
          <div class="col-md-8 text-center">
            <span class="title-all dinMedium" style="color: #fff;">Jadwal&nbsp;</span>
            <span class="dinMedium title-all" style="color: #1b90bc; font-weight: bold">Turnamen</span>
            <br />
            <br />
            <span style="font-size: 20px;" class="GothamBook">
              Pilih sesuai kota-mu dan gabung sekarang untuk menjadi bagian dari event
              <br />terbesar pencarian Esports gamer profesional.
            </span>
            <br />
            <br />
            <router-link to="/tournament">
              <a class="GothamBook" href="#" style="font-size: 16px; color: #ffc800;">
                <u>Lihat jadwal lengkap disini</u>
              </a>
            </router-link>
          </div>
          <div class="col-md-4 text-center" style="margin: auto">
            <a href="https://www.yamisok.com/login">
              <button class="d-btn--blue size-btn-join GothamBook">Gabung Sekarang</button>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- LIST TOURNAMENT -->
    <div class="bg-list-tournament">
      <div class="container-fluid for-desktop w-100 mb-20">
        <div
          class="row padding-list pad-y-20 wrap-1300"
          v-for="(featured, index) in arrFeaturedTournament"
          :key="index"
        >
          <div class="d-flex" style="margin: auto; width: 100%">
            <div class="col-md-3 pad-0">
              <div class="card card-list">
                <img class="card-img-top card-img-tournament-desktop" :src="featured.resizePoster" />
              </div>
            </div>
            <div class="col-md-9 pad-0">
              <a :href="'http://yamisok.com/tournaments/series/' + featured.url" target="_blank">
                <div class="card-body bg-card-tournament d-flex flex-column bd-highlight">
                  <div class="wrappers d-flex justify-content-between">
                    <div class="d-flex flex-row" style="width: 85%;">
                      <div class="btn-featured" v-if="featured.featured === '1'">Featured</div>
                      <div class="btn-series" v-if="featured.type === 'series'">Series</div>
                      <!-- <div class="btn-vip">VIP</div> -->
                      <p class="title-space" style="margin: 4px 0;">{{featured.name}}</p>
                    </div>
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
                  <div class="d-flex flex-row justify-content-between">
                    <div class="d-flex flex-row" style="margin-top: 30px; width: 100%;">
                      <!-- <p class="menu col-md-1" style="font-size: 13px; color: #5f5f5f;">PRIZE</p> -->
                      <p class="menu col-md-1" style="font-size: 13px; color: #5f5f5f;">ENTRY</p>
                      <p class="menu col-md-1" style="font-size: 13px; color: #5f5f5f;">SLOTS</p>
                      <p class="menu col-md-2" style="font-size: 13px; color: #5f5f5f;">DATE</p>
                      <p class="menu col-md-2" style="font-size: 13px; color: #5f5f5f;">TIME</p>
                      <p
                        class="menu col-md-2"
                        v-if="now() < featured.unixTimeTegistrationClose"
                      >CLOSE IN</p>
                      <p class="menu col-md-1" style="text-align:right" v-else>REGISTRATION</p>
                    </div>
                    <!-- <div class="d-flex flex-row">
                      <span>Winner will advance to final</span>
                      <img width="20" height="20" src="/static/img/home/icon/right-arrow.png" alt="">
                    </div>-->
                  </div>
                  <div class="d-flex bd-highlight" style="margin-top: -15px;">
                    <!-- <p
                      v-if="featured.prize_type != 4 && featured.total_prize == null"
                      class="menu col-md-1"
                    >None</p>
                    <p
                      class="menu col-md-1"
                      v-else-if="featured.prize_type == 1 && !isNaN(featured.total_prize)"
                    >IDR {{ setFormatMoney(featured.total_prize) }}</p>
                    <p class="menu col-md-4" v-else-if="featured.prize_type == 4">Other</p>
                    <p class="menu col-md-4" v-else>Unknown</p> -->
                    <p class="menu col-md-1">Free</p>
                    <p
                      class="menu col-md-1"
                    >{{ featured.total_participant }}/{{ featured.total_slot }}</p>
                    <p class="menu col-md-2">{{ setStartDateFormat(featured.start_time) }}</p>
                    <p class="menu col-md-2">{{ setStartTimeFormat(featured.start_time) }} WIB</p>
                    <p class="menu col-md-2">
                      <countdownregis :start="now()" :end="featured.unixTimeTegistrationClose"></countdownregis>
                    </p>
                    <div style="display: flex; margin-top: -20px;">
                      <p
                        style="font-size: 13px; margin: 0; margin-top: 8px;"
                      >{{ featured.tournament_final.total_prize }}</p>
                      <!-- <span style="height: fit-content;">
                        <img class="img-coin" src="/static/img/home/icon/right-arrow.png" alt />
                      </span> -->
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        class="card for-mobile"
        style="width: 18rem; margin: 0 auto; margin-bottom: 10px;"
        v-for="(featured, index) in arrFeaturedTournament"
        :key="index"
      >
        <a :href="'http://yamisok.com/tournaments/series/' + featured.url" target="_blank">
            <img class="card-img-top" :src="featured.resizePoster" />
            <div class="card-body bgCard-mobile">
            <div class="card-title d-flex">
                <div class="btn-featured" v-if="featured.featured === '1'">Featured</div>
                <div class="btn-series" v-if="featured.type === 'series'">Series</div>

                <p class="txt-upcoming text-right" v-if="featured.status === 0">Upcoming</p>
                <p class="txt-ongoing text-right" v-else-if="featured.status === 1">Ongoing</p>
                <p class="txt-end text-right" v-else>End</p>
            </div>
            <p style="margin: 0 10px 10px 0px;">{{featured.name}}</p>
            <div class="card-text row">
                <!-- <p class="menu col-4">PRIZE</p>
                <p v-if="featured.prize_type != 4 && featured.total_prize == null">None</p>
                <p
                v-else-if="featured.prize_type == 1 && !isNaN(featured.total_prize)"
                >IDR {{ setFormatMoney(featured.total_prize) }}</p>
                <p v-else-if="featured.prize_type == 4">Other</p>
                <p v-else>Unknown</p> -->
            </div>
            <!-- <div class="card-text row">
                <p class="menu col-s-2">ENTRY</p>
                <p>Free</p>
            </div>-->
            <div class="card-text row">
                <p class="menu col-4">SLOTS</p>
                <p class="col-s-2">{{ featured.total_participant }}/{{ featured.total_slot }}</p>
            </div>
            <div class="card-text row">
                <p class="menu col-4">DATE</p>
                <p class="col-s-2">{{ setStartDateFormat(featured.start_time) }}</p>
            </div>
            <div class="card-text row">
                <p class="menu col-4">TIME</p>
                <p class="col-s-2">{{ setStartTimeFormat(featured.start_time) }} WIB</p>
            </div>
            <div class="card-text row">
                <p class="menu col-4" v-if="now() < featured.unixTimeTegistrationClose">CLOSE IN</p>
                <p class="menu col-4" v-else>REGISTRATION</p>
                <p class="col-s-2">
                <countdownregis :start="now()" :end="featured.unixTimeTegistrationClose"></countdownregis>
                </p>
            </div>
            <div class="prize-info d-flex flex-row justify-content-center align-items-center">
                <p>{{ featured.tournament_final.total_prize }}</p>
            </div>
            </div>
        </a>
      </div>
    </div>
    <!-- LIST TOURNAMENT -->

    <!-- JOIN EVENT -->
    <div class="bg-join-event">
      <div class="pad-x-60 pad-y-20 wrap-1300">
        <div class="row mar-bot-30">
          <div class="col-md-12">
            <span
              class="title-all dinMedium"
              style="color: #fff ;line-height: 25px"
            >Bergabunglah&nbsp;</span>
            <span class="title-all dinMedium" style="color: #fff; font-weight: bold">Sekarang</span>
            <br />
            <br />
            <span class="GothamBook" style="font-size: 20px; line-height: 2; color: #fff;">
              Ikuti event ini dengan cara :
              <br />- Lakukan pendaftaran dan ikuti kualifikasi tournamentnya
              <br />- Ikuti karantina dan audisi
              <br />- Menangkan tournamentnya dan jadilah Pemain Profesional
            </span>
          </div>
        </div>
        <div class="row mar-bot-20">
          <div class="col-md-12">
            <router-link to="/tutorial">
              <button
                class="d-btn--blue-v2 mar-top-10 GothamBook"
                style="font-size: 18px; width: 250px; height: 70px; margin-right:20px;"
              >
                <b>Tutorial Pendaftaran</b>
              </button>
            </router-link>
            <router-link to="/rules">
              <button
                class="d-btn--white-border mar-top-10 GothamBook"
                style="font-size: 18px; width: 250px; height: 70px;"
              >Aturan & Ketentuan</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- JOIN EVENT -->

    <!-- NEWS -->
    <div class="bg-news">
      <div class="pad-x-60 pad-y-20 wrap-1300">
        <div class="row mar-bot-25">
          <div class="col-md-12">
            <span class="title-all dinMedium" style="color:white;">Berita&nbsp;</span>
            <span class="title-all dinMedium" style="color: #1b90bc; font-weight: bold;">Terkini</span>
            <br />
            <br />
            <span class="GothamBook" style="font-size: 20px;">
              Ikuti perkembangan event First Warriors melalui berita
              <br />yang kami sajikan secara cepat.
            </span>
          </div>
        </div>
        <div class="row mar-bot-25" v-if="!isLoadingNews">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-6" v-if="arrNewsEsport[0] != undefined">
                <a :href="arrNewsEsport[0].url" target="blank">
                  <div class="card sec-card">
                    <img
                      class="card-img-top image height-thumbnail"
                      :src="arrNewsEsport[0].cover_img"
                      alt="Card image"
                      style="width: 100%; border-radius: 10px; max-height: 544px; min-height: 250px;"
                    />
                    <div
                      class="sec-box-big"
                      style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;"
                    >
                      <span
                        class="card-title text-title"
                        style="color: #007af3"
                      >{{arrNewsEsport[0].cdate}}</span>
                      <br />
                      <span class="card-text text-subtitle">{{arrNewsEsport[0].title}}</span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-6">
                <div class="row">
                  <div class="col-md-6" v-if="arrNewsEsport[1] != undefined">
                    <a :href="arrNewsEsport[1].url" target="blank">
                      <div class="card sec-card">
                        <img
                          class="card-img-top image"
                          :src="arrNewsEsport[1].cover_img"
                          alt="Card image"
                          style="width: 100%; height: 210px; border-radius: 10px;"
                        />
                        <div
                          class="sec-box-small"
                          style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;"
                        >
                          <span
                            class="card-title"
                            style="font-size: 13px; color: #007af3"
                          >{{arrNewsEsport[1].cdate}}</span>
                          <br />
                          <span class="card-text" style="font-size: 15px;">{{arrNewsEsport[1].title}}</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6" v-if="arrNewsEsport[2] != undefined">
                    <a :href="arrNewsEsport[2].url" target="blank">
                      <div class="card sec-card">
                        <img
                          class="card-img-top image"
                          :src="arrNewsEsport[2].cover_img"
                          alt="Card image"
                          style="width: 100%; height: 210px; border-radius: 10px;"
                        />
                        <div
                          class="sec-box-small"
                          style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;"
                        >
                          <span
                            class="card-title"
                            style="font-size: 13px; color: #007af3"
                          >{{arrNewsEsport[2].cdate}}</span>
                          <br />
                          <span class="card-text" style="font-size: 15px;">{{arrNewsEsport[2].title}}</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6" v-if="arrNewsEsport[3] != undefined">
                    <a :href="arrNewsEsport[3].url" target="blank">
                      <div class="card sec-card">
                        <img
                          class="card-img-top image"
                          :src="arrNewsEsport[3].cover_img"
                          alt="Card image"
                          style="width: 100%; height: 210px; border-radius: 10px;"
                        />
                        <div
                          class="sec-box-small"
                          style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;"
                        >
                          <span
                            class="card-title"
                            style="font-size: 13px; color: #007af3"
                          >{{arrNewsEsport[3].cdate}}</span>
                          <br />
                          <span class="card-text" style="font-size: 15px;">{{arrNewsEsport[3].title}}</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-md-6" v-if="arrNewsEsport[4] != undefined">
                    <a :href="arrNewsEsport[4].url" target="blank">
                      <div class="card sec-card">
                        <img
                          class="card-img-top image"
                          :src="arrNewsEsport[4].cover_img"
                          alt="Card image"
                          style="width: 100%; height: 210px; border-radius: 10px;"
                        />
                        <div
                          class="sec-box-small"
                          style="border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;"
                        >
                          <span
                            class="card-title"
                            style="font-size: 13px; color: #007af3"
                          >{{arrNewsEsport[4].cdate}}</span>
                          <br />
                          <span class="card-text" style="font-size: 15px;">{{arrNewsEsport[4].title}}</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="margin-bottom: 25px;">
          <div class="col-md-12">
            <span
              class="GothamBook"
              style="font-size: 20px; color: #b2d9ff"
            >Kami juga mengumpulkan berita First Warriors dari media partner kami.</span>
          </div>
        </div>
        <div class="row" style="margin-bottom: 25px;">
          <div
            class="col-md-4"
            style="margin-bottom:20px;"
            v-for="(news, index) in arrNews"
            :key="index"
          >
            <a :href="'/newsdetail/' + encryptID(news.news_id)" target="blank">
              <div class="card-list-home">
                <div style="display: flex; justify-content: space-between;">
                  <span style="font-size: 15px; color: #007af3;">{{setStartDateFormatNews(news.news_date_time)}}</span>
                  <!-- <a href="http://esports.id" target="blank">
                    <span style="font-size: 13px; color: #707070;">esports.id</span>
                  </a> -->
                </div>
                <span style="font-size: 15px;">{{news.news_title}}</span>
              </div>
            </a>
          </div>
        </div>
        <div class="row mar-bot-25">
          <div class="col-md-12 btn-pos">
            <router-link to="/news">
              <button
                to="/news"
                class="d-btn--blue boldProx"
                style="font-size: 15px; width: 220px; height: 40px;"
              >Lihat Lebih Banyak</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- NEWS -->

    <!-- VIDEO -->
    <div class="bg-video">
      <div class="pad-x-60 pad-y-20 wrap-1300">
        <div class="row mar-bot-25">
          <div class="col-md-12">
            <span class="title-all dinMedium">Galeri&nbsp;</span>
            <span class="dinMedium title-all" style="color: #1b90bc; font-weight: bold">Video</span>
            <br />
            <span
              class="GothamBook"
              style="font-size: 20px;"
            >Lihat keseruan dan persaingan yang terjadi selama event ini berlangsung.</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="mySlides">
              <iframe
                style="width:100%; height: 500px;"
                src="https://www.youtube.com/embed/2N7r071k-Hw"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div class="mySlides">
              <iframe
                style="width:100%; height: 500px;"
                src="https://www.youtube.com/embed/ZhwrktZBX80"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div class="mySlides">
              <iframe
                style="width:100%; height: 500px;"
                src="https://www.youtube.com/embed/Ru-MctSf4gY"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div class="mySlides">
              <iframe
                style="width:100%; height: 500px;"
                src="https://www.youtube.com/embed/mV-suZL_GuE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            
          <!--
            <div class="mySlides">
              <img
                src="https://static1.squarespace.com/static/5372934fe4b082a57b89a710/53751996e4b0c4a5e90fbb13/57153dccf85082d1d958f513/1461010009121/CSL_VG.jpg?format=1500w"
                style="width:100%"
              />
            </div>-->
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="column">
              <img
                class="listVideo"
                :class="slideIndex == 1 ? 'activedVideo' : ''"
                src="/static/img/home/slide/img1.PNG" 
                v-on:click="currentSlide(1)"
              />
            </div>
            <div class="column">
              <img
                class="listVideo"
                :class="slideIndex == 2 ? 'activedVideo' : ''"
                src="/static/img/home/slide/img2.PNG"
                v-on:click="currentSlide(2)"
              />
            </div>
            <div class="column">
              <img
                class="listVideo"
                :class="slideIndex == 3 ? 'activedVideo' : ''"
                src="/static/img/home/slide/img3.PNG"
                v-on:click="currentSlide(3)"
              />
            </div>
             <div class="column">
              <img
                class="listVideo"
                :class="slideIndex == 4 ? 'activedVideo' : ''"
                src="/static/img/home/slide/img4.png"
                v-on:click="currentSlide(4)"
              />
            </div>
            <!--
            <div class="column">
              <img
                class="listVideo"
                src="https://static1.squarespace.com/static/5372934fe4b082a57b89a710/53751996e4b0c4a5e90fbb13/57153dccf85082d1d958f513/1461010009121/CSL_VG.jpg?format=1500w"
                v-on:click="currentSlide(5)"
              /> 
            </div>-->
          </div>
        </div>
        <div class="row mar-bot-25 mar-top-20">
          <div class="col-md-12 btn-pos">
            <router-link to="/gallery">
              <button
                class="d-btn--blue boldProx"
                style="font-size: 15px; width: 220px; height: 40px;"
              >Lihat Lebih Banyak</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- VIDEO -->
  </div>
</template>

<style lang="scss" scoped>
//ALUR
.for-desktop {
  display: block;
  @media only screen and (max-width: 900px) {
    display: none;
  }
}

.for-mobile {
  display: none;
  @media only screen and (max-width: 900px) {
    display: block;
  }
}

.alur-text {
  line-height: 105px;
  position: absolute;
  @media only screen and (max-width: 900px) {
    line-height: 120px;
  }
}
.title-alur {
  font-size: 62px;
  @media only screen and (max-width: 900px) {
    font-size: 30px;
  }
}
//ALUR
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

.pad-10 {
  padding: 10px;
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

// SECTION BANNER
.sec-banner {
  width: 100%;
}

.img-banner {
  object-fit: cover;
  width: 100%;
  height: auto;
}
// SECTION BANNER

// SECTION COUNTDOWN
.bg-countdown {
  background-color: #122331;
}

.sec-countdown {
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
}

.box-countdown {
  display: flex;
  flex-direction: column;
  width: 125px;
  border-radius: 10px;
  border: 1px solid rgb(27, 144, 188);
}

.text-tick-countdown {
  font-size: 48px;
  color: rgb(27, 144, 188);
  font-size: bold;
}

.text-sub {
  font-size: 16px;
  color: #cccccc;
}

@media only screen and (max-width: 650px) {
  .sec-countdown {
    width: 330px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .box-countdown {
    display: flex;
    flex-direction: column;
    width: 75px;
    margin-bottom: 10px;
    border: 1px solid rgb(27, 144, 188);
    border-radius: 10px;
  }

  .text-tick-countdown {
    font-size: 28px;
    color: #007af3;
  }

  .text-sub {
    font-size: 10px;
    color: #586674;
  }
}
// SECTIION COUNTDOWN

// SECTION INFORMATION
.bg-information {
  background-color: #141a20;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: top;
  @media only screen and (max-width: 960px) {
    background-position-x: center;
  }
}

.sec-information {
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
  margin-bottom: 10px;
}

.box-information {
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 20px;
  background-color: #2a343a;
  border-radius: 10px;
}

.text-point-information {
  font-size: 67px;
  color: #cccccc;
  line-height: 1;
}

.size-btn-join-info {
  font-size: 20px;
  width: 665px;
  height: 80px;
  margin-top: 30px;
}

@media only screen and (max-width: 1280px) {
  .size-btn-join-info {
    font-size: 20px;
    width: 200px;
    height: 60px;
    margin-top: 20px;
  }
}

@media only screen and (max-width: 950px) {
  .size-btn-join-info {
    font-size: 20px;
    width: 280px;
    height: 60px;
    margin-top: 20px;
  }
}

@media only screen and (max-width: 1300px) {
  .sec-information {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .box-information {
    display: flex;
    flex-direction: column;
    width: 280px;
    padding: 20px;
    background-color: #2a343a;
    border-radius: 10px;
    margin-bottom: 20px;
  }
}
// SECTION INFORMATION

// SECTION SCHEDULE
.bg-schedule {
  background-repeat: no-repeat;
  background-size: cover;
}
// SECTION SCHEDULE

// SECTION JUDGES
.bg-profile-juri {
  background-color: #08243e;
}

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

// SECTION JOIN TOURNAMENT
.bg-join-tournament {
  background-color: #08243e;
}
.img-coin {
  width: 40px;
  height: 40px;
  margin-bottom: 0px;
  margin-left: 10px;
}

.size-btn-join {
  font-size: 20px;
  width: 350px;
  height: 80px;
  margin-top: 20px;
}

@media only screen and (max-width: 1280px) {
  .size-btn-join {
    font-size: 20px;
    width: 200px;
    height: 60px;
    margin-top: 20px;
  }
}

@media only screen and (max-width: 950px) {
  .size-btn-join {
    font-size: 20px;
    width: 280px;
    height: 60px;
    margin-top: 20px;
  }
}
// SECTION JOIN TOURNAMENT

// SECTION LIST TOURNAMENT
.bg-list-tournament {
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 40px 40px 40px;
  overflow-x: hidden;
  @media only screen and (max-width: 950px) {
    padding: 0 15px 40px;
  }
}

    .prize-info{
        width: 265px;
        height: 30px;
        border-radius: 5px;
        background-color: #2b3034;
        margin-top: 10px;
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
  border-top-right-radius: 10px;
  padding: 10px;
  background-color: #0c1013;
}

.txt-upcoming {
  float: right;
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

.bg-card-tournament {
  background-color: #171717;
  height: 100%;
  width: 100%;
  padding: 0px;
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
    width: 16vmin;
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
  font-size: 12px;
  cursor: default;
  width: 7vw;
  height: 2vw;
  text-align: center;
  padding-top: 5px;
  color: black;
  font-weight: 900;
  margin: 0 10px;
  @media only screen and (max-width: 1024px) {
    font-size: 2vmin;
    width: 16vmin;
    height: 4vmin;
    text-align: center;
    padding-top: 1vmin;
    line-height: 2vmin;
  }
}

// RESOLUTION UNDER OR SAME 1366
@media only screen and (max-width: 1366px) {
  // .card-list {
  //   // width: 27vw !important;
  // }

  .bg-card-tournament {
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
  .btn-series {
    // width: 7vw !important;
    height: 1.5vw !important;
  }
  .btn-vip {
    height: 1.5vw !important;
  }
  .bg-card-tournament {
    width: 100% !important;
  }
  .details {
    padding-top: 4vw !important;
  }
  // .card-list {
  //   // width: 26vw !important;
  // }
}
// SECTION LIST TOURNAMENT

// SECTION JOIN EVENT
.bg-join-event {
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: right;
}

.txt-title {
  font-size: 62px;
}

@media only screen and (max-width: 1280px) {
  // background-repeat : no-repeat;
  // background-size : cover;
}

@media only screen and (max-width: 600px) {
  .txt-title {
    font-size: 48px;
  }
}
// SECTION JOIN EVENT

// SECTION NEWS
.bg-news {
  background-color: #08243e;
}

.text-title {
  font-size: 20px;
}
.text-subtitle {
  font-size: 30px;
}

.sec-card {
  width: 100%;
  background-color: #08243e;
  border: 0px;
  margin-bottom: 30px;
  z-index: 99;
}

.image:hover {
  opacity: 0.3;
  transition: opacity 0.25s ease-out;
}

.sec-box-big {
  position: absolute;
  right: 0px;
  bottom: 0px;
  left: 0px;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.75);
}

.sec-box-small {
  position: absolute;
  right: 0px;
  bottom: 0px;
  left: 0px;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.75);
}

.btn-pos {
  text-align: right;
}

.card-list-home {
  height: 100px;
  background-color: #2a343a;
  padding: 10px;
  border-radius: 5px;
}
.card-list-home:hover {
  background-color: rgb(28, 35, 39);
}

@media only screen and (max-width: 1028px) {
  .text-title {
    font-size: 13px;
  }
  .text-subtitle {
    font-size: 15px;
  }

  .sec-box-big {
    position: absolute;
    right: 0px;
    bottom: 0px;
    left: 0px;
    padding: 30px;
    background-color: rgba(0, 0, 0, 0.75);
  }
}

.height-thumbnail {
  height: 450px;
  object-fit: cover;
  @media only screen and (max-width: 960px) {
    height: auto;
  }
}

@media only screen and (max-width: 960px) {
  .btn-pos {
    text-align: left;
    margin: 0 auto;
    width: fit-content;
  }
}
// SECTION NEWS

// SECTION VIDEO
.activedVideo{
    border: 1px solid #fff;
}

.bg-video {
  background-color: #08243e;
  background-repeat: no-repeat;
  background-size: cover;
}

.mySlides {
  display: none;
}

.listVideo {
  cursor: pointer;
  opacity: 0.6;
  width: 100%;
}

.column {
  float: left;
  width: 25%;
}
.actived,
.listVideo:hover {
  opacity: 1;
  border: 1px solid white;
}
// SECTION VIDEO
</style>

<script>
import HomeBanner from '@/components/Home.Banner'
import HomeModal from '@/components/Home.Modal'
import Vue from 'vue'
import VueBus from 'vue-bus'
import axios from 'axios'
import moment from 'moment'

import countdownregis from './CountdownRegis'

import bContainer from 'bootstrap-vue/es/components/layout/container'

import { Layout } from 'bootstrap-vue/es/components'

// const second = 1000
// const minute = second * 60
// const hour = minute * 60
// const day = hour * 24

// let countDown = new Date(1566457200000)

// const x = setInterval(function () {
//   let now = new Date().getTime()
//   const distance = countDown - now

//   document.getElementById('days').innerText = Math.floor(distance / day)
//   document.getElementById('hours').innerText = Math.floor(
//     (distance % day) / hour
//   )
//   document.getElementById('minutes').innerText = Math.floor(
//     (distance % hour) / minute
//   )
//   document.getElementById('seconds').innerText = Math.floor(
//     (distance % minute) / second
//   )

//   if (distance < 0) {
//     clearInterval(x)
//   }
// }, second)

Vue.use(VueBus)
Vue.component('b-container', bContainer)
Vue.use(Layout)

export default {
  name: 'home',
  data () {
    return {
      slideIndex: 1,

      thumbnail: '',

      arrJudges: [],
      arrFeaturedTournament: [],
      arrNews: [],
      arrNewsEsport: [],

      modal: false,
      isLoadingNews: true
    }
  },
  components: {
    HomeBanner,
    HomeModal,
    countdownregis
  },

  mounted () {
    this.openModal()

    this.getJudges()
    this.showSlides(this.slideIndex)
  },

  methods: {
    openModal () {
      this.modal = true
    },

    getJudges () {
      axios
        .get(process.env.API_URL + '/api/v1/first-warrior-judges')
        .then(response => {
          if (response.data.status === 200) {
            this.arrJudges = response.data.data
            this.getFeaturedTournament()
          } else {
            this.arrJudges = []
          }
        })
        .catch(_error => {
          console.log(_error)
        })
    },

    getFeaturedTournament () {
      axios
        .get(
          process.env.API_URL +
            '/api/v1/first-warrior-schedule/6?page=1&status=all&game_id=all'
        )
        .then(response => {
          if (response.data.status === 200) {
            if (!response.data.data.length) {
              this.arrFeaturedTournament = dataTournament
            } else {
              this.arrFeaturedTournament = response.data.data
            }
            this.getNews()
          } else {
            this.arrFeaturedTournament = []
          }
        })
        .catch(_error => {
          console.log(_error)
        })
    },

    getNews () {
      axios
        .get(process.env.API_URL + '/api/v1/first-warrior-news-home')
        .then(response => {
          if (response.data.status === 200) {
            this.arrNews = response.data.data.data
            this.isLoadingNews = false
            this.getNewsEsport()
          } else {
            this.arrNews = []
          }
        })
        .catch(_error => {
          console.log(_error)
        })
    },

    encryptID (id) {
      return btoa(btoa(btoa(id)))
    },

    getNewsEsport () {
      let data = {
        keywords: '',
        tags: 'first warriors 2019',
        game_id: 'all',
        offset: 0,
        limit: 6
      }

      axios
        .post('https://api.esports.id/api/search/article', data)
        .then(response => {
          if (response.data.status === 200) {
            this.arrNewsEsport = response.data.data
          } else {
            this.arrNewsEsport = []
          }
        })
        .catch(_error => {
          console.log(_error)
        })
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

    showSlides (n) {
      var i
      var slides = document.getElementsByClassName('mySlides')
      var dots = document.getElementsByClassName('demo')
      if (n > slides.length) {
        this.slideIndex = 1
      }
      if (n < 1) {
        this.slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' actived', '')
      }
      slides[this.slideIndex - 1].style.display = 'block'
      dots[this.slideIndex - 1].className += ' actived'
    },

    currentSlide (n) {
      this.showSlides((this.slideIndex = n))
    }
  }
}

const dataTournament = [
  {
    resizePoster:
      'https://cdn.zeplin.io/5ccc3160e18bd568685786f8/assets/D16D0730-204B-41D5-9FDC-C381397E093E.png',
    name: 'Medan First Warriors Qualifier',
    status: '0',
    prize_type: 1,
    total_prize: 1300000000,
    countParticipant: 0,
    team_slot: 2500,
    start_time: '2019-09-15 13:00:00',
    unixTimeTegistrationClose: 1568527200
  },
  {
    resizePoster:
      'https://cdn.zeplin.io/5ccc3160e18bd568685786f8/assets/D16D0730-204B-41D5-9FDC-C381397E093E.png',
    name: 'Batam First Warriors Qualifier',
    status: '0',
    prize_type: 1,
    total_prize: 1300000000,
    countParticipant: 0,
    team_slot: 2500,
    start_time: '2019-09-15 13:00:00',
    unixTimeTegistrationClose: 1568527200
  },
  {
    resizePoster:
      'https://cdn.zeplin.io/5ccc3160e18bd568685786f8/assets/D16D0730-204B-41D5-9FDC-C381397E093E.png',
    name: 'Surabaya First Warriors Qualifier',
    status: '0',
    prize_type: 1,
    total_prize: 1300000000,
    countParticipant: 0,
    team_slot: 2500,
    start_time: '2019-09-22 13:00:00',
    unixTimeTegistrationClose: 1569132000
  },
  {
    resizePoster:
      'https://cdn.zeplin.io/5ccc3160e18bd568685786f8/assets/D16D0730-204B-41D5-9FDC-C381397E093E.png',
    name: 'Semarang First Warriors Qualifier',
    status: '0',
    prize_type: 1,
    total_prize: 1300000000,
    countParticipant: 0,
    team_slot: 2500,
    start_time: '2019-09-22 13:00:00',
    unixTimeTegistrationClose: 1569132000
  },
  {
    resizePoster:
      'https://cdn.zeplin.io/5ccc3160e18bd568685786f8/assets/D16D0730-204B-41D5-9FDC-C381397E093E.png',
    name: 'Bandung First Warriors Qualifier',
    status: '0',
    prize_type: 1,
    total_prize: 1300000000,
    countParticipant: 0,
    team_slot: 2500,
    start_time: '2019-09-29 13:00:00',
    unixTimeTegistrationClose: 1569736800
  },
  {
    resizePoster:
      'https://cdn.zeplin.io/5ccc3160e18bd568685786f8/assets/D16D0730-204B-41D5-9FDC-C381397E093E.png',
    name: 'Jabodetabek First Warriors Qualifier',
    status: '0',
    prize_type: 1,
    total_prize: 1300000000,
    countParticipant: 0,
    team_slot: 2500,
    start_time: '2019-10-06 13:00:00',
    unixTimeTegistrationClose: 1570341600
  }
]
</script>