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
                    <v-text-field v-model="user" prepend-icon="person" name="usuario" label="User" type="text"></v-text-field>
                    <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
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
export default {
  data: () => ({
    user: null,
    password: null
  }),
  methods: {

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>