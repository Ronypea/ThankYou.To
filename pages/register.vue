<template>
  <v-layout fill-height align-center justify-center>
    <v-card flat style="position: relative; align-content: end; margin: -15px">
      <img src="@/static/undraw_design_sprint_x3eb.svg"
           width="60%"
           height="100%"
           style="background-size: cover"/>
    </v-card>
    <v-card flat elevation="5" shaped width="500px" style="position: absolute; margin-left: 25%">
      <v-card-title flat align-center> Registration</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-form v-model="valid"
                ref="form"
                lazy-validation>
          <v-layout column>
            <v-layout>
              <v-text-field
                outlined label="First name"
                v-model="first_name"
                style="margin: 3px;"></v-text-field>
              <v-text-field
                outlined
                label="Last name"
                v-model="last_name"
                style="margin: 3px;"></v-text-field>
            </v-layout>
            <v-text-field
              append-icon="mdi-account"
              outlined label="Email"
              v-model="email"
              :rules="emailRules"></v-text-field>
            <v-text-field
              @keyup.enter="send()"
              outlined
              append-icon="mdi-lock"
              label="Password"
              type="password"
              v-model="password"
              :rules="passwordRules"
            ></v-text-field>
            <v-text-field
              outlined
              append-icon="mdi-lock"
              label="Confirm password"
              type="password"
              v-model="confirm_password"
              :rules="confirmRules"
            ></v-text-field>
          </v-layout>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-layout class="ml-2 mr-2 pb-2" row align-center justify-center v-if="progress">
          <v-progress-linear indeterminate></v-progress-linear>
        </v-layout>
        <v-layout v-else>
          <v-btn @click="send()"
                 :disabled="!valid" block text>
            Sign up
          </v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
  export default {
    name: "register",
    layout: "main_page",
    data() {
      return {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        confirm_password: "",
        progress: false,
        emailRules: [
          v => !!v || 'Enter e-mail',
          v => /.+@.+/.test(v) || 'E-mail do not match '
        ],
        passwordRules: [
          v => !!v || 'Enter password',
          v => (v && v.length >= 4) || 'Password do not match '
        ],
        confirmRules: [
          v => !!v || 'Password confirm is required',
          v => v === this.password || 'Passwords have to match'
        ]
      }
    },
    methods: {
      send() {
        if (this.$refs.form.validate()) {
        this.progress = true;

        this.$api.register(this.email, this.password, this.first_name, this.last_name);

        this.progress = false;
        }
      }
    }
  }
</script>

<style scoped>
  /*.background {*/
  /*background-size: cover;*/
  /*background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);*/
  /*}*/

</style>
