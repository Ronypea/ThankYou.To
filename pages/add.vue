<template>
  <v-layout justify-center>
    <v-card outlined hover width=85% height=500px style="overflow: hidden">
      <v-img
        :src=place.photo
        width=100%
        style="position: absolute"
        height=100%
      ></v-img>
      <v-row style="height: 100%">
        <v-col lg=8 md=8 sm=8>
        </v-col>
        <v-col lg=4 md=4 sm=4 style="height: 100%; background-color: white; z-index: 1" v-if="!isEditing">
          <v-card-title style="font-size: 40px">{{ place.name }}</v-card-title>
          <v-row align="center" style="padding-left: 28px">
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
          <v-card-text>{{ place.type }}</v-card-text>
          <v-card-text style="padding-bottom: 0">Address:</v-card-text>
          <v-card-subtitle style="padding-top: 0px">{{ place.location }}</v-card-subtitle>
          <v-card-text style="padding-bottom: 4px">Music preferences:</v-card-text>
          <v-chip
            pill
            v-for="(genre, index) in place.genres"
            :key="index"
            class="mr-2"
            style="margin: 4px 0"
          >
            <v-avatar
              left
              color="red"
            >
              {{ genre.slice(0,1) }}
            </v-avatar>
            {{ genre }}
          </v-chip>
          <v-card-actions style="margin-right: 26px">
            <v-btn
              class="ma-2"
              outlined
              large
              color="indigo"
              block
              @click='toggleEditing()'
            >
              <v-icon>mdi-pencil</v-icon>
              EDIT PLACE
            </v-btn>
          </v-card-actions>
        </v-col>
        <v-col lg=4 md=4 sm=4 style="height: 100%; background-color: white; z-index: 1; font-weight: 500" v-else>
          <v-text-field v-model="place.name" hide-details style="font-size: 40px; margin-right: 12px; padding: 11px 16px 16px; letter-spacing: 0.0125em;">{{ place.name }}</v-text-field>
          <v-row align="center" style="padding-left: 28px">
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
          <v-select
            v-model="place.type"
            :items="all_types"
            style="margin-right: 12px; padding: 8px 16px 11px; font-size: 0.875rem; font-weight: 400;"
            hide-details
          ></v-select>
          <v-card-text style="padding-bottom: 0">Address:</v-card-text>
          <v-text-field
            style="margin: 0 12px 0 0; padding: 0 16px; font-size: 0.875rem; font-weight: 400;"
            v-model="place.location"
            hide-details
          ></v-text-field>
          <v-card-text style="padding-bottom: 4px">Music preferences:</v-card-text>
          <v-combobox
            v-model="place.genres"
            :items="all_genres"
            chips
            multiple
            small-chips
            style="padding: 16px"
            hide-details
            append-icon
          >
            <template v-slot:selection="{ attrs, item, select, selected }">
              <v-chip
                pill
                :key="index"
                class="mr-2"
                @click="select"
                @click:close="remove(item)"
              >
                <v-avatar
                  left
                  color="red"
                >
                {{ item.slice(0,1) }}
                </v-avatar>
                {{ item }}
              </v-chip>
            </template>
          </v-combobox>
          <v-card-actions style="margin-right: 26px">
            <v-btn
              class="ma-2"
              outlined
              large
              color="indigo"
              block
              @click='toggleEditing()'
            >
              <v-icon>mdi-pencil</v-icon>
              {{isEditing ? 'SAVE CHANGES' : 'EDIT PLACE'}}
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
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
        toggleEditing() {
          this.isEditing = !this.isEditing
        },
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
      }
//      mounted() {
//        this.$api.getPlace().then(place => {
//          this.place = place;
//          console.log(this.place)
//        })
//      }
    }
</script>

<style>
</style>
