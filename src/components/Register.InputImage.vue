<template>
  <div class="row form-image-container">
    <div class="placeholder col-xs-12 bg-secondary border border-warning border-radius">
      <img
        :id="'file_uploaded'+index"
        class="placeholder"
        :src="selectedImage"
        v-if="selectedImage"
      />
    </div>
    <div class="col-xs-12">
      <input type="file" :id="'file_image'+index" @change="onFileChange" hidden />
      <label class="w-100" :for="'file_image'+index">
        <div
          class="bg-secondary border border-warning border-radius btn-upload text-gray"
          align="center"
        >Upload</div>
      </label>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
Vue.use(VueSweetalert2)

export default {
  name: 'input-image',
  props: {
    index: {}
  },
  data () {
    return {
      selectedImage: ''
    }
  },
  methods: {
    onFileChange: function (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files[0])
    },
    createImage (file) {
      let isValidate = this.isValidate(file)
      if (isValidate.code) {
        let vm = this
        var reader = new FileReader()
        reader.onload = e => {
          vm.selectedImage = e.target.result
          this.$emit('setSelectedImage', e.target.result, this.index)
        }
        reader.readAsDataURL(file)
      } else {
        this.$swal({
          type: 'error',
          title: 'Image not valid',
          text: isValidate.text
        })
      }
    },
    isValidate (file) {
      if (!file.type.includes('image')) {
        return {
          code: false,
          text: 'Hanya boleh jpg, jpeg, dan png'
        }
      } else if (file.size > 2054000) {
        return {
          code: false,
          text: 'Gambar tidak boleh lebih dari 2 MB'
        }
      } else {
        return {
          code: true,
          text: 'File valid'
        }
      }
    }
  }
}
</script>
<style scoped>
.form-image-container {
  width: 100px;
  height: 100px;
  margin-right: 30px;
}
.placeholder {
  border-radius: 4px;
  width: 100%;
  height: 100%;
}
.btn-upload {
  width: 100px;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
