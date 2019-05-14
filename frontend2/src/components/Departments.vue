<template>
  <section class="department">
    <v-app dark>
      <v-content>
        <Menu></Menu>
        <v-layout align-center justify-center class="department-content">
          <v-flex xs12 sm8 md4>
            <v-subheader>Departments</v-subheader>
            <v-card v-for="department in departments" :key="department.id">
              <v-list>
                <v-list-tile avatar>
                  <v-list-tile-action>
                    <v-icon color="pink">star</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ department.id + " " + department.name }}</v-list-tile-title>
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
import DepartmentsService from '../services/DepartmentsService'
import Menu from './Menu'
export default {
  data: () => ({
    departments: null
  }),
  methods: {
  
  },
  created () {
    DepartmentsService.getDepartments().then(
      response => {
        this.departments = response.data
      }).catch(
      error => console.log(error)
    )
  },
  components: { Menu }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.department-content {
    padding: 1em;
}
</style>