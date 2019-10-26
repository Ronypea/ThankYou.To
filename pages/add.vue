<template>
  <v-row justify="space-around" align="center">
    <v-col cols="7">
      <v-form>
        <v-row>
          <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Name"
              outlined
              required
            ></v-text-field>
        </v-row>
        <v-row justify="space-between">
            <v-date-picker :min="getDate()"></v-date-picker>
          <v-col cols="6" style="padding-bottom: 0">
            <v-subheader style="padding: 0">Number of people</v-subheader>
            <v-slider
              v-model="slider"
              class="align-center"
              :max="max"
              :min="min"
            >
              <template v-slot:append>
                <v-text-field
                  v-model="slider"
                  class="mt-0 pt-0"
                  hide-details
                  outlined
                  single-line
                  type="number"
                  style="width: 60px"
                ></v-text-field>
              </template>
            </v-slider>
            <v-text-field
              v-model="price"
              label="Price"
              outlined
              required
            ></v-text-field>
            <v-textarea
            outlined
            label="Description"
            ></v-textarea>
            <v-btn color="primary" width="100%">Submit</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>

export default {
  data() {
    return {
      max: 100,
      min: 0,
      slider: 0
    }
  },
  methods: {
    getDate: () => {
      let date = new Date();
      let day = String(date.getDate() + 1).padStart(2, '0');
      let month = String(date.getMonth() + 1).padStart(2, '0');
      let year = String(date.getFullYear());

      return `${year}-${month}-${day}`;
    }
  }
}
</script>

<style scoped>
</style>
