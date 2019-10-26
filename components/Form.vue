<template>
  <v-row justify="space-around" align="center" style="height: 100vh">
    <v-col cols="7">
      <v-form>
        <v-row>
          <v-text-field
              v-model="name"
              :counter="25"
              :rules="rules"
              label="Name"
              outlined
              required
            ></v-text-field>
        </v-row>
        <v-row justify="space-between">
            <v-date-picker :min="new Date().toISOString().substr(0, 10)" v-model="date"></v-date-picker>
          <v-col cols="6" style="padding-bottom: 0">
            <v-subheader style="padding: 0">Number of people</v-subheader>
              <v-row>
                <v-col class="pr-4">
                  <v-slider
                    v-model="slider"
                    class="align-center"
                    :max="max"
                    :min="min"
                    hide-details
                  >
                    <template v-slot:append>
                      <v-text-field
                        v-model="slider"
                        class="mt-0 pt-0"
                        hide-details
                        regular
                        type="number"
                        style="width: 60px"
                      ></v-text-field>
                    </template>
                  </v-slider>
                </v-col>
              </v-row>
            <v-text-field
              v-model="price"
              label="Price"
              outlined
              required
            ></v-text-field>
            <v-textarea
            outlined
            label="Description"
            counter=100
            ></v-textarea>
            <v-btn color="primary" width="100%">Submit</v-btn>
          </v-col>
        </v-row>
        <!-- <Map></Map> -->
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
// import Map from '../components/Map';

export default {
  // components:[Map],
  data() {
    return {
      place: [
        {id: '1',
        name: 'LoveNIka',
        type:' bar',
        location: 'Adress',
        genres: ['Pop','djazz'],
        photo: 'url',
        rating: '4.2'}
      ],
      max: 100,
      min: 0,
      slider: 0,
      date: new Date().toISOString().substr(0, 10),
      nameMax: 25,
      descriptionMax: 100
    }
  },
  computed: {
    rules() {
      const rules = [];

      if (this.nameMax) {
        const rule = v => (v || '').length <= this.nameMax || `A maximum of ${this.nameMax} characters is allowed`

        rules.push(rule);
      }

      return rules;
    }
  }
}
</script>

<style scoped>
  div.v-input__control {

  }
</style>
