<template>
  <section class="employees">
    <v-app dark>
      <v-content>
        <Menu></Menu>
        <v-layout align-center justify-center class="employee-content">
          <v-flex xs12 sm8 md4>
            <v-subheader>Employees</v-subheader>
            <v-card v-for="employee in employees" :key="employee.id">
              <v-list>
                <v-list-tile avatar>
                  <v-list-tile-action>
                    <v-icon color="pink">star</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ employee.name }}</v-list-tile-title>
                  </v-list-tile-content>
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
import EmployeesService from '../services/EmployeesService'
import Menu from './Menu'
export default {
  data: () => ({
    employees: null
  }),
  methods: {
  
  },
  created () {
    EmployeesService.getEmployees().then(
      response => {
        this.employees = response.data
      }).catch(
      error => console.log(error)
    )
  },
  components: { Menu }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.employee-content {
    padding: 1em;
}
</style>