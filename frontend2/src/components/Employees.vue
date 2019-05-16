<template>
  <section class="employees">
    <v-app dark>
      <v-content>
        <Menu></Menu>
        <v-layout class="employee-content">
          <v-flex xs12 sm6 md6>
            <v-subheader>
              <h2>Employees</h2>
            </v-subheader>
            <v-btn color="blue">Create</v-btn>
            <v-card v-for="employee in employees" :key="employee.id">
              <v-list>
                <v-list-tile avatar>
                  <v-list-tile-action>
                    <v-icon color="pink">star</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ employee.name }}</v-list-tile-title>
                  </v-list-tile-content>
                  <v-btn color="cyan">Edit</v-btn>
                  <v-btn color="pink">Remove</v-btn>
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
  data: () => ({
    employees: null,
    employee: "",
    admin: false
  }),
  methods: {},
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