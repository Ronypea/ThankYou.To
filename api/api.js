const baseUrl = "https://hobbit.itis.team/"

export default class Api {
  constructor(ctx) {
    this.$axios = ctx.$axios
    this.$store = ctx.$store
    this.$router = ctx.$router
  }

  async get(url, header = null) {
    var res = await this.$axios('${baseUrl}/${url}').catch(error => {
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
          this.$store.commit("error/show", 'Ошибка:${res.message}');
          break;
      }
    }
    return res.data;
  }

  async post(url, data, header = null) {
    var res = await this.$axios.post('${baseUrl}/${url}', data).catch(error => {
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
          this.$store.commit("error/show", 'Ошибка: ${res.message}');
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

  async verify(email, password) {
    var res = await this.post(`auth/verify`, {email, password});
    if (!res.password) {
      this.$axios.setToken(res);
      localStorage.setItem("token", res);
      this.$router.replace("/");
    }
    return res;
  }

  async me() {
    return await this.get('user/me');
  }

  async getSections() {
    return await this.get('sections/get')
  }

  async createSection(params) {
    var formData = this.jsonToForm(params);
    return await this.post('sections/create', formData)
  }
}
cd 
