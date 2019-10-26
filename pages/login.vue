<template>
  <v-row fill-height align-center justify-center>
    <v-col :xs="false" sm=4 md=7 class="image"></v-col>
    <v-col xs=12 sm=8 md=5 class="login" elevation=6>
      <div class="flex">
        <div class="icon">
          <v-icon color="white">mdi-lock</v-icon>
        </div>
        <v-card-title style="font-size: 1.5em; padding: 0">Sign in</v-card-title>
        <v-form class="form">
          <v-text-field
            hide-details
            class="input"
            append-icon="mdi-account"
            outlined label="Email"
            v-model="email"
          ></v-text-field>
          <v-text-field
            hide-details
            class="input"
            @keyup.enter="send()"
            outlined
            append-icon="mdi-lock"
            label="Password"
            type="password"
            v-model="password"
          ></v-text-field>
          <v-checkbox label="Remember me" style="margin-top: 0"></v-checkbox>
          <v-btn
            block
            color="primary"
            @click="send"
          >SIGN IN</v-btn>
          <v-row>
            <v-col>
              <a href="">Forgot password?</a>
            </v-col>
            <v-col>
              <a @click="() => this.$router.push('/register', true)" style="float: right">Don't have an account? Sign Up</a>
            </v-col>
          </v-row>
        </v-form>
        <span style="color: rgba(0, 0, 0, 0.54); font-size: 0.875rem; margin-top: 30px">Copyright © Your Website 2019</span>
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
  margin: 8px;
}

.login {
  padding: 64px 0;
}

.flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 32px;
}

.form {
  width: 100%;
  margin-top: 8px;
}

.input {
  margin: 24px 0 8px !important;
}

a {
  text-decoration: none;
  font-size: 0.875rem;
}

@media (max-width: 600px) {
  .image {
    display: none;
  }
}
</style>
