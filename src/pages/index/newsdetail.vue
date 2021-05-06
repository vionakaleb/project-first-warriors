<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<template>
  <b-container fluid class="bg-img responsive img-responsive pt-3 pb-5">
    <div class="news-w bg-transparent center-content mt-5">
      <p class="text-center light-bold text-30 text-white p-0">
        <span style="font-size: 62px;">Informasi&nbsp;</span>
        <span class="boldProx" style="font-size: 62px; color: #1b90bc;">Lengkap</span>
      </p>
    </div>

    <div
      class="news-w text-12 text-gray bg-black center-content"
      style="margin-top:-8px; border-radius: 10px; padding: 35px 25px 20px 25px;"
    >
      <div class="w-100 mb-5">
        <h3 class="text-left light-bold text-uppercase">{{ news_data.title }}</h3>
        <h6 class="mb-3" style="color: #34373c">{{ news_data.created_at }}</h6>

        <div class="text-justify text-gray text-12 mt-3">
          <img class="w-100 mb-3" :src="news_data.cover_img" />
          <br />

          <div v-html="news_data.content"></div>
          <div>
            <span style="color: orange">Sumber : <a target="_blank" :href="news_data.url"> {{news_data.url}}</a></span>
          </div>
          <a href="/news" class="light-bold text-14" style="color: #007af3">
            <u><< Back to News Update</u>
          </a>
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

Vue.use(VueBus)

export default {
  data () {
    return {
      news: {
        author: 'IHSL ID'
      },
      pagination: {
        current_page: 1,
        update_current_page: 0
      },
      news_data: []
    }
  },
  beforeCreate () {},
  components: {
    VuePagination
  },
  mounted () {
    // this.getTournamentMatches()
    this.$bus.on('update_current_page', this.getUpdatePage)
    this.getUpdatePage()
    this.getDetailNews()
  },
  methods: {
    getUpdatePage (updatedCurrentPage) {
      this.pagination.update_current_page = updatedCurrentPage
      this.getDetailNews()
    },
    getDetailNews () {
      var id = atob(atob(atob(this.$route.params.id)))

      axios
        .get(
          process.env.API_URL +
            '/api/v1/first-warrior-news/detail?media=first-warrior&news_id=' +
            id
        )
        .then(response => {
          if (response.data.status) {
            this.news_data = response.data.data
          } else {
            this.news_data = []
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    changePage (page) {
      this.pagination.current_page = page
      // alert(this.pagination.current_page)
      this.$emit('paginate', this.pagination.current_page)
      this.$bus.emit('update_current_page', this.pagination.current_page)
    }
  }
}
</script>