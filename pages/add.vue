<template>
  <v-row justify="space-around" align="center">
    <v-col cols="6">
      <v-form>
        <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            outlined
            required
          ></v-text-field>
          <v-row justify="space-between">
            <v-col cols="6" style="padding: 0">
              <v-date-picker :min="getDate()"></v-date-picker>
            </v-col>
            <v-col cols="6">
              <v-subheader style="padding: 0">Number of people</v-subheader>
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
              <v-btn color="submit" width="100%">Submit</v-btn>
            </v-col>
          </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>

export default {
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
