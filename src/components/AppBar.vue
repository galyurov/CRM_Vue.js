<template>
  <nav>
    <v-toolbar
        elevation="2"
        color="primary"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase">{{ checkPath }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
            @click.stop="logout"
          text>
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
        >
          <v-list-item value="Home" router to="/">
            <v-list-item-icon>
              <v-icon color="primary">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item value="New Estimate" router to="/new">
            <v-list-item-icon>
              <v-icon color="primary">mdi-plus-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-title>New Estimate</v-list-item-title>
          </v-list-item>
          <v-list-item value="Operation Calendar" router to="/calendar">
            <v-list-item-icon>
              <v-icon color="primary">mdi-calendar</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Operation Calendar</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-switch
          class="pl-2"
          v-model="$vuetify.theme.dark"
          v-on:change="setDarkTheme"
          label="Dark Theme"
      ></v-switch>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "AppBar",
  data() {
    return {
      drawer: false,
      group: null,
      app: true
    }
  },
  computed: {
    checkEstimate() {
      let currentRoute = this.$route.path
      return currentRoute === '/new'
    },
    // eslint-disable-next-line vue/return-in-computed-property
    checkPath(){
      let currentRoute = this.$route.path
      if (currentRoute === '/') {
        return 'Home'
      }
      if (currentRoute === '/new') {
        return 'New Estimate'
      }
      if (currentRoute === '/calendar') {
        return 'Calendar'
      }
    }

  },
  methods: {
    logout(){
      localStorage.clear()
      this.$store.state.auth = false
      this.$router.push('/auth?message=logout')
    },
    setDarkTheme(value) {
      localStorage.darkTheme = value
    }
  },
  created() {
    if (localStorage.darkTheme == 'true') {
      this.$vuetify.theme.dark = true
    } else if (localStorage.darkTheme == 'false') {
      this.$vuetify.theme.dark = false
    } else {
      this.$vuetify.theme.dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  }
}
</script>

<style scoped>

</style>