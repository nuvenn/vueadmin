<template>
  <v-alert :value="true" v-if="errorLogin" type="error">
    {{errorText}}
  </v-alert>
</template>
<script>
export default {
  props: ['errorText', 'errorLogin']
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>