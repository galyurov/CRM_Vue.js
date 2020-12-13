<template>
  <div>
    <v-main class="pl-0">
      <Calendar></Calendar>
    </v-main>
  </div>
</template>
<script>

import Calendar from "@/components/Calendar";

export default {
  name:'calendar',
  components: {
    Calendar,
  },
  created() {
    if(localStorage.apHash){
      this.$store.state.auth = true
    }
  }
}
</script>

