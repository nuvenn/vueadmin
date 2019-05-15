<template>
  <section class="department">
    <v-app dark>
      <v-content>
        <Menu></Menu>
        <v-layout align-center justify-center class="department-content">
          <v-flex xs12 sm8 md4>
            <v-subheader>
              <h1>Departments</h1>
            </v-subheader>
            <!-- <v-form ref="form" class="form-inline">
              <v-text-field v-model="department" label="Department Name"></v-text-field>
              <v-btn small color="primary" dark>Add Department</v-btn>
            </v-form> -->
            <v-card v-for="department in departments" :key="department.id">
              <v-list>
                <v-list-tile avatar>
                  <v-list-tile-action>
                    <v-icon color="pink">star</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ department.id + " " + department.name }}</v-list-tile-title>
                  </v-list-tile-content>
                  <v-btn v-if="admin" fab dark small color="blue">
                    <v-icon dark>add</v-icon>
                  </v-btn>
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