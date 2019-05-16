<template>
  <section class="department">
    <v-app dark>
      <v-content>
        <Menu></Menu>
        <router-view></router-view>
      </v-content>
    </v-app>
  </section>
</template>
<script>
import Menu from "./Menu";
export default {
  beforeCreate: function () {
    if (!sessionStorage.admin) {
      this.$router.push('/')
    }
  },
  data: () => ({

  }),
  methods: {},
  created() {

  },
  components: { Menu }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>