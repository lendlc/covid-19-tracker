<template>
  <div class="container">
    <GlobalTotals/>
    <GlobalDatatable/>
  </div>
</template>

<script>
import GlobalDatatable from '../components/GlobalDatatable.vue'
import GlobalTotals from '../components/GlobalTotals.vue'
  export default {
    components: {
      GlobalDatatable,
      GlobalTotals
    }
  }
</script>

<style scoped>

</style>