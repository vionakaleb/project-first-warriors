<template>
  <b-container fluid class="bg-img responsive img-responsive pt-3 pb-5">
    <div class="news-w bg-transparent center-content mt-5">
      <p class="text-center light-bold text-30 text-white p-0">
        <span class="title-all dinMedium">Informasi&nbsp;</span>
        <span class="title-all dinMedium" style="color: #1b90bc; font-weight: bold">Terkini</span>
      </p>
    </div>

    <div
      class="news-w text-12 text-gray bg-black center-content"
      style="margin-top:-8px; border-radius: 10px; padding: 35px 25px 20px 25px;"
    >
      <div class="clearfix text-18" v-if="news_data[0] !== undefined">
        <div class="float-left" v-if="pagination.current_page != news_property.last_page">
          <ul class="pagination">
            <li>
              <a
                href="/news"
                aria-label="Previous"
                v-on:click.prevent="changePage(pagination.current_page + 1)"
              >
                <span aria-hidden="true" style="color: #007af3">« Post Lama</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="float-right" v-if="pagination.current_page != news_property.first_page">
          <ul class="pagination">
            <li>
              <a
                href="/news"
                aria-label="Next"
                v-on:click.prevent="changePage(pagination.current_page - 1)"
              >
                <span aria-hidden="true" style="color: #007af3">Post Baru »</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div v-if="news_data[0] !== undefined">
        <div class="w-100 mb-5" v-for="(item, index) in news_data" :key="index" :offset="2">
          <h6 class="mb-3" style="color: #34373c">{{ item.news_date }}</h6>
          <h3 class="text-left light-bold text-uppercase">
            <a
              v-if="item.media === 'first-warrior'"
              :href="'/newsdetail/' + encryptID(item.news_id)"
              class="text-white"
            >{{ item.news_title }}</a>

            <a :href="item.news_source" class="text-white" target="blank">{{ item.news_title }}</a>
          </h3>

          <div class="text-justify text-gray text-12 mt-3">
            <div v-html="item.news_content"></div>
            <router-link
              v-if="item.media === 'first-warrior'"
              :to="'/newsdetail/' + encryptID(item.news_id)"
              style="color: #007af3"
            >
              <u>Selengkapnya</u>
            </router-link>

            <a
              v-if="item.media === 'esports-id'"
              :href="item.news_source"
              style="color: #007af3"
              target="blank"
            >
              <u>Selengkapnya</u>
            </a>
          </div>
          <div
            style="height: 2vw; background-color:#05090c; margin-left: -25px; margin-right: -25px;margin-top: 1vw;"
          ></div>
        </div>
      </div>

      <div style="height:220px;" v-else></div>
      <div class="clearfix text-18" v-if="news_data[0] !== undefined" style="margin-top: 2vw;">
        <div class="float-left" v-if="pagination.current_page != news_property.last_page">
          <ul class="pagination">
            <li>
              <a
                href="/news"
                aria-label="Previous"
                v-on:click.prevent="changePage(pagination.current_page + 1)"
              >
                <span aria-hidden="true" style="color: #007af3">« Post Lama</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="float-right" v-if="pagination.current_page != news_property.first_page">
          <ul class="pagination">
            <li>
              <a
                href="/news"
                aria-label="Next"
                v-on:click.prevent="changePage(pagination.current_page - 1)"
              >
                <span aria-hidden="true" style="color: #007af3">Post Baru »</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </b-container>
</template>

<style>
a.active {
  color: #ffaa03;
}
a:hover {
  color: orange;
}
a:onclick {
  border: none;
  outline: none;
  padding: 10px 16px;
  background-color: #f1f1f1;
  cursor: pointer;
  font-size: 18px;
}
.bg-black {
  background-color: #0b0e13;
}
</style>

<script>
import VuePagination from '../../components/Pagination.vue'
import Vue from 'vue'
import VueBus from 'vue-bus'
import axios from 'axios'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueBus)

export default {
  data () {
    return {
      news: {
        author: 'First Warrior'
      },
      pagination: {
        current_page: 1,
        update_current_page: 0
      },
      news_data: [],
      news_property: [],
      offset: 2
    }
  },

  beforeCreate () {},
  components: {
    VuePagination
  },

  mounted () {
    this.$bus.on('update_current_page', this.getUpdatePage)
    this.getNews()
    this.getUpdatePage()
  },

  methods: {
    getUpdatePage (updatedCurrentPage) {
      this.pagination.update_current_page = updatedCurrentPage
      this.getNews()
    },

    getNews () {
      axios
        .get(
          process.env.API_URL +
            '/api/v1/first-warrior-news?page=' +
            this.pagination.current_page
        )
        .then(response => {
          if (response.data.status) {
            this.news_data = JSON.parse(
              JSON.stringify(response.data.data.data)
            )
            this.news_property = response.data.data
          } else {
            this.news_data = []
          }
        })
        .catch(_error => {
          console.log(_error)
        })
    },

    changePage (page) {
      this.pagination.current_page = page
      this.$emit('paginate', this.pagination.current_page)
      this.$bus.emit('update_current_page', this.pagination.current_page)
    },

    encryptID (id) {
      return btoa(btoa(btoa(id)))
    }
  }
}
</script>