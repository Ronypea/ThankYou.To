<template>
  <div id="login-page">
    <v-layout fill-height align-center justify-center>
      <v-card width="300px">
        <v-toolbar flat color="primary" dark class="title">Авторизация</v-toolbar>
        <v-card-text>
          <v-layout column>
            <v-text-field append-icon="email" outlined label="Email" v-model="email"></v-text-field>
            <v-text-field
              @keyup.enter="send()"
              outlined
              append-icon="https"
              label="Password"
              type="password"
              v-model="password"
            ></v-text-field>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-layout class="ml-2 mr-2 pb-2" row align-center justify-center v-if="progress">
            <v-progress-linear indeterminate></v-progress-linear>
          </v-layout>
          <v-layout v-else>
            <v-btn @click="send()" :disabled="password.length<6" block text>
              Войти
              <v-icon small class="pl-2">arrow_forward_ios</v-icon>
            </v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
export default {
  layout: "main_page",
  data() {
    return {
      email: "",
      password: "",
      progress: false
    };
  }
};
</script>

<style>
#login-page {
  height: 100%;
  width: 100%;
}
</style>