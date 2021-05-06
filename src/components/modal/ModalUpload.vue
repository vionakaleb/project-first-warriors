<template>
	<b-modal class="d-modal--one" id="myModalUpload" hide-footer size="lg" title="Upload Photo">
    <div class="wrapper p-0 m-0 w-100">
      <input checked type=radio name="slider" id="slide1" />
      <input type=radio name="slider" id="slide2" />
      <input type=radio name="slider" id="slide3" />

      <div class="slider-wrapper p-0 m-0 w-100">
        <div class="inner">
          <article>
            <img src="https://farm8.staticflickr.com/7455/27879053992_ef3f41c4a0_h_d.jpg" width="600px">
          </article>
        </div>
        <!-- .inner -->
      </div>
    </div>

    <div class="p-2">
    </div>
	</b-modal>

</template>
<script>
  export default {
    props: {
  
    }
  }
</script>

<!-- <style lang="scss" scoped>
  @import "../../assets/scss/components/custom-slideshow";
</style> -->