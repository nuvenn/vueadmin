<template>
  <v-layout align-center justify-center class="employee-content">
    <v-flex xs12 sm6 md6>
      <v-subheader>Employee Detail</v-subheader>
      <v-card>
        <form padding-form>
          <v-text-field class="padding-form"
            v-model="employee.id"
            label="Id"
            required
          >
          </v-text-field>
          <v-text-field class="padding-form"
            v-model="employee.name"
            label="Name"
            required
          >
          </v-text-field>
          <v-text-field class="padding-form"
            v-model="employee.email"
            label="E-mail"
            required
          >
          </v-text-field>
          <v-text-field class="padding-form"
            v-model="employee.password"
            label="Password"
            required
          >
          </v-text-field>
          <v-text-field class="padding-form"
            v-model="employee.department"
            label="Department"
            required
          >
          </v-text-field>
          <v-text-field class="padding-form"
            v-model="employee.admin"
            label="Admin?"
            required
          >
          </v-text-field>
          <v-btn color="success" v-on:click="saveEmployee(employee)">submit</v-btn>
          <v-btn v-on:click="clearEmployee()">clear</v-btn>
          <router-link class="nav-link" :to="{name: 'Employees', params: { name: 'Employees' }}"><v-btn color="cyan">return</v-btn></router-link>
        </form>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import EmployeesService from "../services/EmployeesService";
export default {
  created() {
    this.employee.id = this.$route.params.id
    this.employee.name = this.$route.params.employeeName
  },
  data: () => ({
    employee: {
      id: "",
      name: "",
      email: "",
      password: "",
      department: "",
      admin: ""
    }
  }),
  methods: {
    saveEmployee: function(employee) {
      EmployeesService.saveEmployee(employee).then(response => {
        this.$router.push({ name: 'Employees', params: { name: 'Employees' } })
      })
      .catch(error => console.log(error));
    },
    clearEmployee: function() {
      this.employee = {
        id: "",
        name: "",
        email: "",
        password: "",
        department: "",
        admin: ""
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
