
<template>
    <v-toolbar>
        <v-toolbar-title>Admin</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn  v-on:click="logOut()">
        Sair
        </v-btn>
    </v-toolbar>
</template>
<script>
export default {
  methods: {
    logOut: function () {
      sessionStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>