<template>
  <b-container fluid class="bg-img responsive img-responsive pt-3 pb-5">
    <h2 class="light-bold text-white text-center pt-2 pb-3 title-all">
      Galeri
      <span class="text-yellow boldProx" style="color: #1b90bc;">Acara</span>
    </h2>
    <div class="terms-width width-galeri pb-5">
      <b-btn
        style="margin-left: 70px;"
        size="sm"
        class="float-left"
        variant="primary"
        href="/gallery"
        v-if="showCategory==false"
      ><< Back</b-btn>
      <div class="w-100 text-14 text-gray my-3 terms-p d-flex justify-content-around">
        <div class="row" style="width: 100%;" v-if="showCategory && groupalbum.length != 0">
          <div class="col-md-3" v-for="(row, index) in groupalbum" :key="index" align="center">
            <div
              class="gallery border-radius"
              style="cursor: pointer;"
              @click="getHallofFame(row.album)"
            >
              <img
                :src="row.image_url"
                class="img-mobile"
                style="width: 20vw; height: 20vw; border-radius: 10px;"
              />
              <div class="desc h-auto w-100">
                <h5 class="album-title">{{row.album}}</h5>
                <p class="sum-foto">{{row.total}} foto</p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="terms-width text-12 text-gray center-content"
          style="border-radius: 10px; padding: 20px; background-color: #0b0e13; width: 100%; max-width: 100% !important;"
          v-else
        >
          <div class="col-md-12" align="center" style="font-size: 40px;">No photos.</div>
        </div>

        <div id="app" class="row center-content">
          <div class="center-content" align="center">
            <div class="row">
              <div
                v-for="(row, index) in table_data"
                :key="index"
                class="col-xs-12 col-sm-4 col-md-3 col-lg-3 col-xl-2 my-2"
                style="margin: 0 auto;"
              >
                <img :src="row.src" class="img-index" @click="openGallery(index)" />
              </div>
            </div>

            <LightBox
              :images="table_data"
              ref="lightbox"
              :show-caption="true"
              :show-light-box="false"
              :showThumbs="true"
            ></LightBox>
          </div>
        </div>
      </div>
      <vue-pagination :pagination="albums" :offset="14" class="float-right mb-5"></vue-pagination>
    </div>
  </b-container>
</template>

<style lang="scss">
.width-galeri {
  width: 100% !important;
}

.img-index {
  width: 15vw;
  height: 12vw;
  border-radius: 20px;
  @media only screen and (max-width: 1024px) {
    width: 60vw;
    height: 45vw;
  }
  @media only screen and (min-width: 2000px) {
    width: calc(23vw - 15vw) !important;
    height: calc(23vw - 15vw) !important;
  }
}

.sum-foto {
  font-size: 1.5vw;
  @media only screen and (max-width: 1024px) {
    margin: 0;
    font-size: 4vmin;
  }
}

.img-mobile {
  @media only screen and (max-width: 1024px) {
    width: 90vmin !important;
    height: 60vmin !important;
  }
}

.album-title {
  font-size: 1.65vw;
  font-weight: bold;
  margin-bottom: 0px;
  @media only screen and (max-width: 1024px) {
    font-size: 4vmin;
  }
}

.gallery {
  margin: 2vw;

  float: left;
  position: relative;
  @media only screen and (max-width: 1024px) {
    margin: 3vmin;
  }
}

.desc {
  font-size: 12px;
  padding: 5px;
  text-align: left;
  background-color: rgb(42, 52, 58);
  border-radius: 0 0 10px 10px;
  color: #ffffff;
  position: absolute;
  bottom: 0;
}
</style>

<script>
import VuePagination from '../../components/Pagination.vue'
import LightBox from 'vue-image-lightbox'
import Vue from 'vue'
import VueBus from 'vue-bus'
import axios from 'axios'

Vue.use(VueBus)

export default {
  data () {
    return {
      groupalbum: [],
      table_data: [],
      albums: {},
      showCategory: true,
      selectCategory: '',
      album: {
        total: 0,
        per_page: 10,
        from: 1,
        to: 10,
        current_page: 1
      }
    }
  },

  beforeCreate () {},
  components: {
    LightBox,
    VuePagination
  },

  mounted () {
    this.$bus.on('update_current_page', this.getUpdatePage)
    this.getAlbum()
  },

  methods: {
    backpage () {
      this.showCategory = false
      this.table_data = {}
    },

    getUpdatePage (updatedCurrentPage) {
      this.album.current_page = updatedCurrentPage
      this.getHallofFame(this.selectCategory)
    },

    getAlbum () {
      axios
        .get(process.env.API_URL + '/api/v1/first-warrior-album')
        .then(response => {
          if (response.data.status) {
            this.groupalbum = response.data.data
          } else {
            this.groupalbum = {}
          }
        })
        .catch(error => {
          console.log(error)
        })
    },

    getHallofFame (category) {
      this.showCategory = true
      this.selectCategory = category
      axios
        .get(
          process.env.API_URL +
            '/api/v1/first-warrior-gallery?category=' +
            category +
            '&page=' +
            this.album.current_page
        )
        .then(response => {
          if (response.data.status) {
            this.table_data = response.data.data.data
            this.albums = { ...response.data.data }
            this.album.from = response.data.data.from
          } else {
            this.table_data = {}
          }
        })
        .catch(error => {
          console.log(error)
        })
    },

    openGallery (index) {
      this.$refs.lightbox.showImage(index)
    }
  }
}
</script>