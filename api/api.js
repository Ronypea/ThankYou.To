const baseUrl = "https://api.thankyou.to"

export default class Api {
  constructor(ctx) {
    this.$axios = ctx.$axios
    this.$store = ctx.$store
    this.$router = ctx.$router
  }

  async get(url, header = null) {
    var res = await this.$axios(`${baseUrl}/${url}`).catch(error => {
      return error.response.data;
    });
    if (res.code) {
      switch (res.code) {
        case 403:
          this.$store.commit(
            "error/show",
            "Ваш токен устарел, требуется перезайти"
          );
          this.$router.push("/login", true);
          break;
        default:
          this.$store.commit("error/show", `Ошибка:${res.message}`);
          break;
      }
    }
    return res.data;
  }

  async post(url, data, header = null) {
    var res = await this.$axios.post(`${baseUrl}/${url}`, data).catch(error => {
      return error.response.data;
    });
    if (res.code) {
      switch (res.code) {
        case 403:
          this.$store.commit(
            "error/show",
            "Ваш токен устарел, требуется перезайти"
          );
          this.$router.push("/login", true);
          break;
        default:
          this.$store.commit("error/show", `Ошибка: ${res.message}`);
          break;
      }
      return res;
    }
    return res.data;
  }

  jsonToForm(json) {
    var formData = new FormData();

    for (var key in json) {
      formData.append(key, json[key]);
    }
    return formData;
  }

  async sendPassword(email) {
    return await this.post(`auth/send`, {email});
  }

  async login(email, password) {
    var res = await this.post(`public/auth/login`, {email, password, agent: 'place'});

    if (res.token) {
      this.$axios.setToken(res.token);

      this.$store.commit('user/ADD_AUTH_DATA', res);

      this.$router.replace("/musicians");
    }

    return res;
  }

  async register(email, password, nameFirst, nameLast) {
    var res = await this.post(`public/auth/register`, {email, password, nameFirst, nameLast, agent: 'place'});

    if (res.token) {
      this.$axios.setToken(res.token);

      this.$store.commit('user/ADD_AUTH_DATA', res);

      this.$router.replace("/musicians");
    }

    return res;
  }

  async me() {
    return await this.get(`user/me`);
  }


  async getUserData(renewToken) {
    const newData = await this.post(`public/auth/renew`, {renewToken});
    this.$store.commit('user/ADD_AUTH_DATA', newData);
    return newData;
  }

  async getPlace() {
    const token = localStorage.getItem('token')
    this.$axios.setToken(token)
    const response = await this.get(`player/me`)
    return response;
  }

  async getPerformances() {
    const token = localStorage.getItem('token')
    this.$axios.setToken(token)
    const response = await this.get(`performance/get`)
    console.log(response)
    return response;
  }

  async editPlace(parameters) {
    const token = localStorage.getItem('token')
    this.$axios.setToken(token)
    await this.post(`places/create`, parameters);
  }

  async getTypes() {
    return await this.get(`public/place_types`)
  }

  async getGenres() {
    return await this.get(`public/genres`)
  }
}
