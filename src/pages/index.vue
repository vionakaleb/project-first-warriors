<template>
  <div id="yamisok" class="bg-page-dark">
    <b-navbar
      class="navbar navbar-expand-lg navbar-dark bg-dark"
      style="padding-top: 0.5rem; padding-bottom: 0.5rem; box-shadow: 0 0 6px black;"
      sticky
    >
      <b-navbar-brand class="home-nav-p" style="width:150px;" to="/home">
        <img
          alt="First Warrior"
          class="home-nav-logo logo-image"
          src="/static/img/first-warrior.png"
        />
      </b-navbar-brand>
      <div class="d-flex flex-grow-1">
        <!-- <div style="width: 150px;" to="/home">
          <img class="logo-image" src="/static/img/first-warrior.png" />
        </div>-->
        <div class="w-100 text-right">
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        </div>
      </div>
      <b-collapse is-nav class="flex-grow-1 text-right" id="nav_collapse">
        <ul class="navbar-nav ml-auto flex-nowrap">
          <li class="nav-item text-center">
            <b-nav-item to="/home" class="nav-link" style="font-color: #cccccc">Home</b-nav-item>
          </li>
          <li class="nav-item text-center">
            <b-nav-item to="/tournament" class="nav-link" style="font-color: #cccccc">Kompetisi</b-nav-item>
          </li>
          <li class="nav-item text-center">
            <b-nav-item to="/tutorial" class="nav-link" style="font-color: #cccccc">Tutorial</b-nav-item>
          </li>
          <li class="nav-item text-center">
            <b-nav-item to="/news" class="nav-link" style="font-color: #cccccc">Berita</b-nav-item>
          </li>
          <li class="nav-item text-center">
            <b-nav-item to="/gallery" class="nav-link" style="font-color: #cccccc">Galeri</b-nav-item>
          </li>
          <li class="nav-item text-center">
            <b-nav-item to="/faq" class="nav-link" style="font-color: #cccccc">F.A.Q</b-nav-item>
          </li>
          <li class="nav-item text-center">
            <b-nav-item to="/rules" class="nav-link" style="font-color: #cccccc">Aturan & Ketentuan</b-nav-item>
          </li>
          <li class="nav-item text-center">
            <b-nav-item to="/support" class="nav-link" style="font-color: #cccccc">Hubungi Kami</b-nav-item>
          </li>
          <a
            class="d-btn--red-nav boldProx"
            @click="toRegister()"
            style="margin: auto; text-align: center; font-size: 15px; border: 5px solid #c81614;"
          >Masuk / Daftar</a>
        </ul>
      </b-collapse>
    </b-navbar>

    <div class="d-flex flex-column float-button">
      <a
        href="https://www.facebook.com/FirstWarriorsID/"
        class="highlightsidebar"
        target="_blank"
        title="Facebook First Warrior"
      >
        <img src="/static/img/float-facebook.jpg" style="border-radius: 10px 10px 0 0;" height="50" />
      </a>
      <a
        href="https://www.youtube.com/channel/UC7wfTjSnTmGr-ptyzEArmCg"
        class="highlightsidebar"
        target="_blank"
        title="Youtube First Warrior"
      >
        <img src="/static/img/float-youtube.jpg" height="50" />
      </a>
      <a
        href="https://www.instagram.com/FirstWarriorsID/"
        class="highlightsidebar"
        target="_blank"
        title="Instagram First Warrior"
      >
        <img src="/static/img/float-instagram.jpg" height="50" />
      </a>
      <a
        href="https://www.firstmedia.com/"
        class="highlightsidebar"
        target="_blank"
        title="First Media"
      >
        <img src="/static/img/float-firstm.png" height="53" />
      </a>
      <a
        href="https://yamisok.com/"
        class="highlightsidebar"
        target="_blank"
        title="Website Yamisok"
      >
        <img
          src="/static/img/float-yamisok-fix.jpg"
          height="50"
          style="border-radius: 0px 0px 10px 10px;"
        />
      </a>
    </div>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <section class="black-bg col-md-12 col-sm-12 col-xs-12 text-center text-12 text-white">
        <div class="d-flex flex-row" style="padding-top: 15px; padding-bottom: 10px;">
          <div class="col-md-12">
            <div class="for-desktop">
                <img
                  src="/static/img/footer/sponsor-update-oktober-desktop.png"
                />
            </div>
            <div class="for-mobile">
                <img
                  class="logo-mobile"
                  src="/static/img/footer/sponsor-update-oktober-mobile.png"
                />
            </div>
            <!-- <p
              class="footerMobile"
            >Our Media Partner</p>
            <div>
              <img class="media-partner" src="/static/img/footer/media-partner.png" alt="media-partner">
            </div> -->
          </div>
          <div class="col-md-8 flex-column text-left text-14" style="display: none; margin-top: 15px;">
            <div>
              <router-link to="/home">
                <a to="/home">Home</a>
              </router-link>
            </div>
            <div>
              <router-link to="/news">
                <a to="/news">Berita</a>
              </router-link>
            </div>
            <div>
              <router-link to="/tournament">
                <a to="/tournament">Kompetisi</a>
              </router-link>
            </div>
            <div>
              <router-link to="/tutorial">
                <a to="/tutorial">Tutorial</a>
              </router-link>
            </div>
            <div>
              <router-link to="/faq">
                <a to="/faq">F.A.Q</a>
              </router-link>
            </div>
            <div>
              <router-link to="/gallery">
                <a to="/gallery">Galeri</a>
              </router-link>
            </div>
            <div>
              <router-link to="/rules">
                <a to="/rules">Aturan & Ketentuan</a>
              </router-link>
            </div>
            <div>
              <router-link to="/support">
                <a to="/support">Hubungi Kami</a>
              </router-link>
            </div>
          </div>
        </div>
      </section>
      <section
        class="blue-footer pt-2 pb-2 col-md-12 col-sm-12 col-xs-12 text-center text-12 text-white textFooter-mobile"
      >
        <p>Copyright ©2019 First Warriors. Any commercial use or distribution without the express written consent of Yamisok and/or Firstmedia is strictly prohibited.</p>
      </section>
    </footer>
    <!-- <modal-daftar></modal-daftar> -->
  </div>
</template>

<style lang="scss">
.for-desktop{
  display: block;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
}
.for-mobile{
  display: none;
  @media only screen and (max-width: 1024px) {
    display: block;
  }
}
.media-partner{
  width: 420px;
  height: 110px;
  @media only screen and (max-width: 960px) {
      height: 80px;
      width: 300px;
  }
}
.logo-image {
  margin-top: 10px;
  margin-left: 10px;
  position: absolute;
  width: 140px;
  @media only screen and (max-width: 960px) {
    margin-top: 20px;
    margin-left: 10px;
    position: absolute;
    width: 70px;
  }
}

.footerMobile {
  margin-left: 0;
  margin-top: 1vmin;
}

.textFooter-mobile {
  @media only screen and (max-width: 1024px) {
    font-size: 2.5vmin !important;
  }
}

@media only screen and (max-width: 1024px) {
  .logo-mobile {
    width: 100% !important;
  }
}

.highlightsidebar img {
  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=50);
  -moz-opacity: 1;
  opacity: 1;
}

.highlightsidebar:hover img {
  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=100);
  -moz-opacity: 0.8;
  opacity: 0.8;
}

.highlightfooter img {
  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=50);
  -moz-opacity: 1;
  opacity: 1;
}

.highlightfooter:hover img {
  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=100);
  -moz-opacity: 0.6;
  opacity: 0.6;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 1);
}

.mini-submenu {
  display: none;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid rgba(0, 0, 0, 0.9);
  border-radius: 4px;
  padding: 9px;
  width: 42px;
}

.mini-submenu:hover {
  cursor: pointer;
}

.mini-submenu .icon-bar {
  border-radius: 1px;
  display: block;
  height: 2px;
  width: 22px;
  margin-top: 3px;
}

.mini-submenu .icon-bar {
  background-color: #000;
}

#slide-submenu {
  background: rgba(0, 0, 0, 0.45);
  display: inline-block;
  padding: 0 8px;
  border-radius: 4px;
  cursor: pointer;
}
</style>

<script>
// import axios from 'axios'
// import ModalDaftar from '@/components/modal/ModalDaftar'

export default {
  data () {
    return {}
  },
  components: {
    // ModalDaftar
  },
  mounted: function () {},
  methods: {
    toRegister () {
      window.location = 'https://www.yamisok.com/login'
    }
  }
}
</script>