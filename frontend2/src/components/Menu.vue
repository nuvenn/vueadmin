<template>
  <nav>
    <v-toolbar>
      <v-toolbar-items>
        <v-btn flat>
          <router-link class="nav-link" :to="{name: 'Departments', params: { name: 'Departments' }}">Departments</router-link>
        </v-btn>
        <v-btn flat>
          <router-link class="nav-link" :to="{name: 'Employees', params: { name: 'Employees' }}">Employees</router-link>
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn v-on:click="logOut()">Sair</v-btn>
    </v-toolbar>
  </nav>
</template>
<script>
export default {
  methods: {
    logOut: function() {
      sessionStorage.clear();
      this.$router.push("/");
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-link {
  text-decoration: none;
  color: #ffffff;
}
</style>