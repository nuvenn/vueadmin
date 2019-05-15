<template>
  <section class="employees">
    <v-app dark>
      <v-content>
        <Menu></Menu>
        <v-layout align-center justify-center class="employee-content">
          <v-flex xs12 sm8 md4>
            <v-subheader>
              <h2>Employees</h2>
            </v-subheader>
            <!-- <v-form ref="form" class="form-inline">
              <v-text-field v-model="employee" label="Employee Name"></v-text-field>
              <v-btn small color="primary" dark>Add Employee</v-btn>
            </v-form> -->
            <v-card v-for="employee in employees" :key="employee.id">
              <v-list>
                <v-list-tile avatar>
                  <v-list-tile-action>
                    <v-icon color="pink">star</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ employee.name }}</v-list-tile-title>
                  </v-list-tile-content>
                  <v-btn fab dark small color="blue">
                    <v-icon dark>add</v-icon>
                  </v-btn>
                  <v-btn fab dark small color="cyan">
                    <v-icon dark>edit</v-icon>
                  </v-btn>
                  <v-btn fab dark small color="pink">
                    <v-icon dark>remove</v-icon>
                  </v-btn>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-content>
    </v-app>
  </section>
</template>
<script>
import EmployeesService from "../services/EmployeesService";
import Menu from "./Menu";
export default {
  beforeCreate: function() {
    // if (!sessionStorage.access_token) {
    //   this.$router.push('/')
    // }
  },
  data: () => ({
    employees: null,
    employee: ""
  }),
  methods: {},
  created() {
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