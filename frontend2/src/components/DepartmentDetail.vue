<template>
  <v-layout align-center justify-center class="department-content">
    <v-flex xs12 sm6 md6>
      <v-subheader>Department Detail</v-subheader>
      <v-card>
        <form padding-form>
          <v-text-field class="padding-form"
            v-model="department.id"
            label="Id"
            required
          >
          </v-text-field>
          <v-text-field class="padding-form"
            v-model="department.name"
            label="Name"
            required
          >
          </v-text-field>
          <v-btn color="success" v-on:click="saveDepartment(department)">submit</v-btn>
          <v-btn v-on:click="clearDepartment()">clear</v-btn>
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
        this.$router.push({ name: 'Departments', params: { name: 'Departments' } })
      })
      .catch(error => console.log(error));
    },
    clearDepartment: function() {
      this.department =  {
        id: "",
        name: ""
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.padding-form {
  padding: 15px;
}
</style>
