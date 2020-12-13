<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="light-blue accent-2" dark flat>
                <v-toolbar-title>Welcome</v-toolbar-title>

              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Email" name="email" prepend-icon="mdi-account" type="email"
                               v-model="email" @input="error=false"></v-text-field>

                  <v-text-field id="password" label="Password" name="password" prepend-icon="mdi-lock"
                                type="password" v-model="password" @input="error=false"></v-text-field>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn  v-if="!loading" type="button" @click="logIn" :disabled="!canCreate" color="primary">Login</v-btn>
                    <v-btn  v-else color="primary">
                      <v-progress-circular
                          width="2"
                          :size="16"
                        indeterminate
                        color="white"
                    ></v-progress-circular>
                    </v-btn>
                  </v-card-actions>
                </v-form>
                <div v-if="error">
                  Error! Please try again!
                </div>
              </v-card-text>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {
      loading:false,
      email: '',
      password:'',
      error: false
    }
  },
  created() {
    if(localStorage.apHash){
      this.$store.state.auth = true
    }

    if (localStorage.darkTheme == 'true') {
      this.$vuetify.theme.dark = true
    } else if (localStorage.darkTheme == 'false') {
      this.$vuetify.theme.dark = false
    } else {
      this.$vuetify.theme.dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  },
  computed:{
    canCreate() {
      return this.email && this.password
    }
  },
  methods:{
    async logIn  (){
      this.loading = true
      const data = {email: this.email, pass: this.password}
      const response = await request('/php/signin.php',data)
      if(response.status >= 400){
        this.loading = false
        this.error = true
      } else if(response.status >= 200 && response.status < 300) {
        this.loading = false
        this.$store.state.auth = true
        localStorage.apHash = 8472518
        if (this.$store.state.auth) {
          await this.$router.push('/')
        }

      } else {
        this.loading = false
        this.error = true
      }

      async function request(url,data) {
        try {
          const response = await fetch(url,{
            method: "POST",
            mode: 'no-cors',
            'Content-Type': 'application/json',
            body: JSON.stringify(data)
          })
          return response

        } catch (e) {
          console.warn(e.message)
          this.error = true
        }
      }
    }
  }
}
</script>
