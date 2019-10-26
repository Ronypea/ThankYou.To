<template>
  <v-layout>
    <v-img
      height="250"
      :src=place.photo
    ></v-img>
    <v-layout column justify-center align-center>
      <v-card-title> {{ place.name }}</v-card-title>
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value=place.rating
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ml-4"> {{ place.rating }}</div>
        </v-row>

        <div class="my-4 subtitle-1 black--text">
          $ • Italian, Cafe
        </div>

        <div>Small plates, salads & sandwiches an inteimate setting with 12 indoor seats plus patio seating.</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Tonight's availability</v-card-title>

      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>5:30PM</v-chip>

          <v-chip>7:30PM</v-chip>

          <v-chip>8:00PM</v-chip>

          <v-chip>9:00PM</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="deep-purple accent-4"
          text
          @click="reserve"
        >
          Reserve
        </v-btn>
      </v-card-actions>
    </v-layout>
  </v-layout>
</template>

<script>
  export default {
    data() {
      return {
        place: {
          id: '0',
          name: 'Bushe',
          type: 'Coffee shop',
          location: 'Spb, Nahimova street, 4',
          genres: ['RNB', 'rep', 'rock'],
          photo: 'https://media-cdn.tripadvisor.com/media/photo-s/14/d3/f4/72/caption.jpg',
          rating: '4.3'
        }
      }
    }
  }
</script>

<style>
</style>
