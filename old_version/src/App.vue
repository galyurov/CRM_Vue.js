<template>
  <v-app class="color--for--background">
      <component :is="layout">
      </component>
  </v-app>
</template>

<script>
import emptyLayout from "@/layouts/emptyLayout";
import MainLayout from "@/layouts/MainLayout";
export default {
  name: 'App',
  components: {
    emptyLayout,
    MainLayout
  },
  computed:{
    layout(){
      return (this.$route.meta.layout || 'empty')+'-layout'
    }
  },
};
</script>
<style>
.color--for--background{
  background: #4E6699 !important;
}
</style>