<template>
  <div >
    <router-view></router-view>
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  name: "MainLayout",
  methods:{
  ...mapActions(['downloadPricesFromDB']),
  },
  mounted() {
    this.downloadPricesFromDB()
  }
}
</script>

<style scoped>

</style>