<template>
  <b-modal
    v-model="homemodal"
    size="lg"
    title="Home Modal"
    header-bg-variant="dark"
    header-text-variant="light"
    body-bg-variant="dark"
    body-text-variant="light"
    footer-bg-variant="dark"
    footer-text-variant="dark"
  >
    <div class="w-100 text-14 text-gray pt-3"></div>

    <div slot="modal-footer" class="w-100">
      <p class="float-left">Modal Footer Content</p>
      <b-btn size="sm" class="float-right" variant="primary" @click="homemodal=false">Close</b-btn>
    </div>
  </b-modal>
</template>

<style>
</style>

<script>
export default {
  props: ['homemodal']
}
</script>