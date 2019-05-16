<template>
  <v-layout align-center justify-center class="department-content">
    <v-flex xs12 sm6 md6>
      <v-subheader>Department Detail</v-subheader>
      <v-card>
        <form>
          <v-text-field class="field"
            v-model="department.id"
            label="Id"
            required
          >
          </v-text-field>
          <v-text-field class="field"
            v-model="department.name"
            label="Name"
            required
          >
          </v-text-field>
          <v-btn color="success" v-on:click="saveDepartment(department)">submit</v-btn>
          <v-btn>clear</v-btn>
          <router-link class="nav-link" :to="{name: 'Departments', params: { name: 'Departments' }}"><v-btn color="cyan">return</v-btn></router-link>
        </form>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import DepartmentsService from "../services/DepartmentsService";
export default {
  created() {
    this.department.id = this.$route.params.id
    this.department.name = this.$route.params.departmentName
  },
  data: () => ({
    department: {
      id: "",
      name: ""
    }
  }),
  methods: {
    saveDepartment: function(department) {
      DepartmentsService.saveDepartment(department).then(response => {
    
      })
      .catch(error => console.log(error));
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.field {
  padding: 10px;
}
</style>
