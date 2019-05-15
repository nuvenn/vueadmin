<template>
  <section id="login">
    <v-app dark>
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs10 sm6 md3>
              <v-card class="elevation-12">
                <v-card-text>
                  <v-form>
                    <v-text-field
                      v-model="email"
                      prepend-icon="person"
                      name="email"
                      label="E-mail"
                      type="text"
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                      id="password"
                      type="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn small v-on:click="loginAccess()" color="primary">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </section>
</template>
<script>
import LoginService from "../services/LoginService";
export default {
  data: () => ({
    email: null,
    password: null
  }),
  methods: {
    loginAccess: function(event) {
      LoginService.loginAccess(this.email, this.password)
        .then(response => {
          response.data.map(user => {
            if(this.email == user.email && this.password == user.senha) {
              // sessionStorage.setItem('access_token', response)
              this.$router.push("/Departments");   
            } else {
              console.log('User not found')
            }
          })   
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>