<template>
<v-layout align-center justify-center class="employee-content">
  <v-flex xs12 sm8 md4>
    <v-subheader>
      <h2>Employees</h2>
    </v-subheader>
    <v-btn v-if="admin" dark small color="blue">
      add
    </v-btn>
    <v-card v-for="employee in employees" :key="employee.id">
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-action>
            <v-icon color="pink">star</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ employee.name }}</v-list-tile-title>
          </v-list-tile-content>
          <v-btn fab dark small color="cyan">
            <v-icon dark>edit</v-icon>
          </v-btn>
          <v-btn v-if="admin" fab dark small color="pink">
            <v-icon dark>remove</v-icon>
          </v-btn>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-flex>
</v-layout>
</template>
<script>
import EmployeesService from "../services/EmployeesService";
import Menu from "./Menu";
export default {
  beforeCreate: function () {
    if (!sessionStorage.admin) {
      this.$router.push('/')
    }
  },
  data: () => ({
    employees: null,
    employee: "",
    admin: false
  }),
  methods: {
    handleEdit: function() {
      this.$router.push("/Departments/1");
    }
  },
  created() {
    if (sessionStorage.admin === "true") {
      this.admin = true
    }
    EmployeesService.getEmployees()
      .then(response => {
        this.employees = response.data;
      })
      .catch(error => console.log(error));
  },
  components: { Menu }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.employee-content {
  padding: 1em;
}
.form-inline {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}
</style>