<template>
  <section class="department">
    <v-app dark>
      <v-content>
        <Menu></Menu>
        <v-layout class="department-content">
          <v-flex xs12 sm6 md6>
            <v-subheader>
              <h1>Departments</h1>
            </v-subheader>
            <router-link :to="{ name: 'departmentDetails', params: { name: 'details' }}">
              <v-btn color="blue">Create</v-btn>
            </router-link>
            <v-card v-for="department in departments" :key="department.id">
              <v-list>
                <v-list-tile avatar>
                  <v-list-tile-action>
                    <v-icon color="pink">star</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ department.id + " " + department.name }}</v-list-tile-title>
                  </v-list-tile-content>
                  <router-link :to="{ name: 'departmentDetails', params: { name: 'details', id: department.id }}">
                    <v-btn color="cyan">Edit</v-btn>
                  </router-link>
                  <v-btn color="pink">Remove</v-btn>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
          <router-view />
        </v-layout>  
      </v-content>
    </v-app>
  </section>
</template>
<script>
import DepartmentsService from "../services/DepartmentsService";
import Menu from "./Menu";
export default {
  data: () => ({
    departments: null,
    department: "",
    admin: false
  }),
  methods: {},
  created() {
    if (sessionStorage.admin === "true") {
      this.admin = true
    }
    DepartmentsService.getDepartments()
      .then(response => {
        this.departments = response.data;
      })
      .catch(error => console.log(error));
  },
  components: { Menu }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.department-content {
  padding: 1em;
}
.form-inline {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}
</style>