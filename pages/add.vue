<template>
  <v-layout justify-center v-if="isEdit===false">
    <v-flex sm12 md6 lg8>
      <v-img
        height="auto"
        :src=place.photo
      ></v-img>
    </v-flex>
    <v-card
      :elevaionion="4">
      <v-layout column justify-center align-left>
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
              size="20"
            ></v-rating>

            <div class="grey--text ml-4"> {{ place.rating }}</div>
          </v-row>

          <div class="my-4 subtitle-1 black--text">
            {{ place.type }}
          </div>
          <div class="my-4 subtitle-1 black--text">
            {{ place.location }}
          </div>

        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Music preferences</v-card-title>
        <v-card-text>
          <v-chip v-for="(genre, index) in place.genres"
                  :key="index" class="mr-2"> {{ genre }}
          </v-chip>
        </v-card-text>
        <v-card-actions>
          <v-btn class="ma-2" outlined large fab color="indigo"
                 @click='startEdit()'>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-card-actions>
      </v-layout>
    </v-card>
  </v-layout>

  <v-layout justify-center v-else>
    <v-flex sm12 md6 lg8>
      <img
        width="100%"
        src="@/static/undraw_clean_up_ucm0.svg"
      />
    </v-flex>
    <v-card
      :elevaionion="4">
      <v-layout column justify-center align-left>
        <v-text-field
          v-model="name"
          :counter="25"
          :rules="rules"
          label="Name"
          :placeholder=place.name
          outlined
          required
        ></v-text-field>
        <v-card>
          <v-row
            align="center"
            class="mx-0"
          >
            <v-combobox
              v-model="select"
              :items=all_types
              label="Select a type"
            ></v-combobox>

            <v-text-field
              v-model="location"
              :counter="25"
              :rules="rules"
              label="Location"
              :placeholder=place.location
              outlined
              required
            ></v-text-field>
          </v-row>
        </v-card>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Music preferences</v-card-title>
        <v-card-text>
          <v-combobox
            v-model="genres"
            :items="all_genres"
            chips
            clearable
            label="Your preferences"
            multiple
            solo
          >
            <template v-slot:selection="{ attrs, item, select, selected }">
              <v-chip
                v-bind="attrs"
                :input-value="selected"
                close
                @click="select"
                @click:close="remove(item)"
              >
                <strong>{{ item }}</strong>&nbsp;
              </v-chip>
            </template>
          </v-combobox>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="deep-purple accent-4"
            text
            @click="onSave()"
          >
            Edit
          </v-btn>
        </v-card-actions>
      </v-layout>
    </v-card>
  </v-layout>
</template>

<script>import api from '../api/api.js'

export default {
  data() {
    return {
      isEdit: false,
      place: {
        id: '0',
        name: 'Bushe',
        type: 'Coffee shop',
        location: 'Spb, Nahimova street, 4',
        genres: ['RNB', 'rep', 'rock'],
        photo: 'https://media-cdn.tripadvisor.com/media/photo-s/14/d3/f4/72/caption.jpg',
        rating: '4.3'
      },
      all_types: ['bar', 'cafe', 'restorant', 'chillhouse'],
      all_genres: ['RNB', 'vocal', 'rock', 'retro', 'jazz', 'bluze']
    }
  },
  methods: {
    startEdit() {
      this.isEdit = true
    },
    onSave() {
      this.$api.editPlace(this.place)
      this.isEdit = false
    },
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1)
      this.chips = [...this.chips]
    },
  },
  mounted() {
    this.$api.getPlace().then(place => {
      this.place = place;
      console.log(this.place)
    })
  }
}
</script>

<style>
</style>
