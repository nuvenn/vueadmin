<template id="DepartmentDetail">
  <v-layout align-center justify-center class="department-content">
    <v-flex xs12 sm6 md6>
      <v-subheader>Department Detail</v-subheader>
      <v-card>
        <form>
          <v-text-field class="field"
            v-model="id"
            label="Id"
            required
          >
          {{$route.params.id}}
          </v-text-field>
          <v-text-field class="field"
            v-model="name"
            label="Name"
            required
          >
          {{$route.params.name}}
          </v-text-field>
          <v-btn>submit</v-btn>
          <v-btn>clear</v-btn>
        </form>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import Menu from "./Menu";
import DepartmentsService from "../services/DepartmentsService";
export default {
  beforeCreate: function() {},
  data: () => ({
    id: "",
    name: ""
  }),
  methods: {},
  afterEach() {
    console.log(this.$route.params)
    this.id = this.$route.params.id
  },
  components: { Menu }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.field {
  padding: 10px;
}
</style>

