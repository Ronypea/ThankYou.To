<template>
  <v-row fill-height align-center justify-center class="row">
    <v-col sm=4 md=7 xs="false" class="image"></v-col>
    <v-col sm=8 md=5 xs=12 class="login">
      <div class="flex">
        <div class="icon">
          <v-icon>mdi-lock</v-icon>
        </div>
        <v-text-field append-icon="mdi-account" outlined label="Email" v-model="email"></v-text-field>
        <v-text-field
          @keyup.enter="send()"
          outlined
          append-icon="mdi-lock"
          label="Password"
          type="password"
          v-model="password"
        ></v-text-field>
        <v-card-actions>
          <v-layout class="ml-2 mr-2 pb-2" row align-center justify-center v-if="progress">
            <v-progress-linear indeterminate></v-progress-linear>
          </v-layout>
          <v-layout v-else>
            <v-btn @click="send()" :disabled="password.length<6" block text>
              Войти
              <v-icon small class="pl-2">mdi-chevron-right</v-icon>
            </v-btn>
          </v-layout>
        </v-card-actions>
      </div>
    </v-col>
  </v-row>
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
  },
  methods: {
    send() {
      this.progress = true;

      this.$api.login(this.email, this.password);

      this.progress = false;
    }
  }
};
</script>

<style>
#login-page {
  height: 100%;
  width: 100%;
}

.image {
    background-image: url(https://source.unsplash.com/random);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.icon {
  background-color: rgb(220, 0, 78);
  width: 40px;
  height: 40px;
  margin: 8px;
  border-radius: 50%;
  padding: 8px;
  margin: 0px auto;
}

.login {
  padding: 64px 0;
}

.flex {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
