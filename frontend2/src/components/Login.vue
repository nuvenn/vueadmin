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
              <ErrorMessage error-text="Password Incorrect" :error-login="errorLogin"></ErrorMessage>
              <ErrorMessage error-text="Connection Problems" :error-login="errorLogin2"></ErrorMessage>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </section>
</template>
<script>
import LoginService from "../services/LoginService";
import ErrorMessage from './utils/ErrorMessage'
export default {
  data: () => ({
    email: null,
    password: null,
    errorLogin: false,
    errorLogin2: false
  }),
  methods: {
    loginAccess: function(event) {
      LoginService.loginAccess(this.email, this.password)
        .then(response => {
          response.data.map(user => {
            if(this.email == user.email && this.password == user.senha) {
              sessionStorage.setItem('user', user)
              this.errorLogin = false
              this.errorLogin2 = false
              this.$router.push("/Departments")   
            } else {
              this.errorLogin = true
            }
          })   
        })
        .catch(error => this.errorLogin2 = true);
    }
  },
  components: { ErrorMessage }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>