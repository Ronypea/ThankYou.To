<template>
  <v-layout fill-height align-center justify-center class='background'>
    <v-card elevation="24" width="500px">
      <v-card-title flat align-center > Регистрация </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-layout column>
          <v-layout>
            <v-text-field outlined label="First name" v-model="first_name" style="margin: 3px;"></v-text-field>
            <v-text-field outlined label="Last name" v-model="last_name" style="margin: 3px;"></v-text-field>
          </v-layout>
          <v-text-field append-icon="mdi-account" outlined label="Email" v-model="email"></v-text-field>
          <v-text-field
            @keyup.enter="send()"
            outlined
            append-icon="mdi-lock"
            label="Password"
            type="password"
            v-model="password"
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
      </v-card-text>
      <v-card-actions>
        <v-layout class="ml-2 mr-2 pb-2" row align-center justify-center v-if="progress">
          <v-progress-linear indeterminate></v-progress-linear>
        </v-layout>
        <v-layout v-else>
          <v-btn @click="send()" :disabled="password.length<6" block text>
            Зарегистрироваться
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
          confirmRules: [
            v => !!v || 'Password confirm is required',
          v => v === this.password || 'Passwords have to match'
          ]
        }
      },
      methods: {
        send() {
          this.progress = true;

          this.$api.register(this.email, this.password, this.first_name, this.last_name);

          this.progress = false;
        }
      }
    }
</script>

<style scoped>
  .background {
    background-size: cover;
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
  }

</style>
