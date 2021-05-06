<template>
	<b-modal class="d-modal--one" id="myModalFoto" hide-footer size="md" title="iCafe Details">
    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000; height: 300px; width: auto;"
        fade
        controls
        :interval="1000000"
        v-if="detailICafe.galleries && detailICafe.galleries.length > 0"
      >
          <b-carousel-slide
          v-for="(gallery, idx) in detailICafe.galleries"
          :key="idx">
            <img
            slot="img"
            class="d-block"
            height="300"
            style="margin: 0 auto;"
            :src="gallery.image_url"
            :alt="idx"/>
          </b-carousel-slide>
      </b-carousel>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000; height: 300px; width: auto;background-color: #131414;"
        :interval="1000000"
        v-else
      >
          <b-carousel-slide caption="No photo(s) available" img-blank img-alt="Blank image">
          </b-carousel-slide>
      </b-carousel>

      <!-- <p class="mt-4">
        Slide #: {{ slide }}<br />
        Sliding: {{ sliding }}
      </p> -->

      <div class="mt-3" v-if="detailICafe.community">
        <div class="text-yellow" style="word-wrap: break-word; padding: 5px 0 5px 0; font-weight: 500;"><h4>{{detailICafe.community.name}}</h4></div>{{detailICafe.length}}

        <div class="font-gray" style="font-size: 0.9rem;">
          <!-- Slide: {{slide}}<br>
          Sliding: {{sliding}}<br> -->
          <ul style="margin-left: -20px;">
          <li>Alamat: {{detailICafe.community.alamat}}</li>
          <li>Kota: {{detailICafe.city.city_name}}</li>
          <li>No. Telp: {{detailICafe.community.phone_number}}</li>
          <li>PIC: {{detailICafe.community.nama_pic}}</li>
          <li>Kapasitas: {{detailICafe.community.jml_pc}} PC</li>
          <li>Fasilitas: 
          <span v-if="detailICafe.fasilitas && detailICafe.fasilitas.length > 0" v-for="(facility, idx) in detailICafe.fasilitas">
            <span v-if="idx ==0">{{facility.name}}</span>
            <span v-else>, {{facility.name}}</span>
          </span>
          <span v-else>-</span></li>
          <li>Yamisok Profile: <a class="text-white" style="text-decoration: underline;" :href="'http://www.yamisok.com/communities/'+detailICafe.community.url" target="_blank">www.yamisok.com/community/{{detailICafe.community.url}}</a></li>
        </ul>
        </div>
      </div>
  </div>
	</b-modal>

</template>
<script>
  export default {
    props: {
  
    },
    data () {
      return {
        detailICafe: {},
        slide: 0,
        sliding: null
      }
    },
    mounted: function () {
      this.$root.$on('setData', (data) => {
        this.setData(data)
      })
    },
    methods: {
      setData: function (data) {
        this.detailICafe = data
      },
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
    }
  }
</script>

<style lang="scss">
  .carousel-item {
    align-self:center;
    display: block;
    max-height: 300px;
    overflow: hidden; 
  }
  .carousel-caption{
    bottom: 36%;
  }
  // .carousel-indicators{
  //   // position: relative;
  //   background-color: #161616;
  //   margin: 0;
  //   padding: 3px 0 3px 0;
  // }
</style>