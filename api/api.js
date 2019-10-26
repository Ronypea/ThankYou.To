const baseUrl = "https://hobbit.itis.team/"

export default class Api {
  constructor(ctx) {
    this.$axios = ctx.$axios
    this.$store = ctx.$store
    this.$router = ctx.$router
  }

  async getSections() {}
  async getParticipants() {}
  async addSection() {}
}
