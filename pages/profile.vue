<template>
  <container>
    <v-row>
      <v-col xs="12" sm="6" md="6" lg="4" v-for="player of players"
             v-blind="player._id"
             class="player-item"
             :key="player._id">
        <v-card class="mx-auto"
                max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            :src=player.photo
          >
            <v-card-title> {{ player.userId }}</v-card-title>
          </v-img>
          <v-list-item four-line>
            <v-list-item-content>
              <v-rating
                :value=player.rating
                color="amber"
                dense
                half-increments
                readonly
                size="17"
              ></v-rating>
              <v-list-item-subtitle>
                <v-icon color="#1b557a"> mdi-map-marker</v-icon>
                <b>Place</b> : {{ player.baseLocation }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                <v-icon color="#1b557a"> mdi-currency-usd</v-icon>
                <b>Price by hour</b>: {{ player.hourPrice }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                <v-icon color="#1b557a"> mdi-music</v-icon>
                <span v-for="(genre, index) in player.genres" :key="index"> <span> {{ genre}}</span> <span
                  v-if="index+1 < player.genres.length">, </span></span>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn text @click.stop="dialog = true" style="color:#1b557a">Make order</v-btn>
          </v-card-actions>

          <v-dialog
            v-model="dialog"
            max-width="400px"
          >
            <v-card min-height="80vh">
              <v-card-title class="headline"> Make order</v-card-title>
              <datetime format="MM/DD/YYYY H:i" width="300px" v-model="val"></datetime>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="grey darken-1"
                  text
                  @click="onMusician()"
                >
                  Send
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

        </v-card>
      </v-col>
    </v-row>
  </container>
</template>

<script>import api from '../api/api.js'
import datetime from 'vuejs-datetimepicker';

export default {
  components: {datetime},
  name: "profile",
  data() {
    return {
      dialog: false,
      user: {
        nameFirst: 'Veronika',
        nameLast: 'Plotnikova'
      },
      players: [{
        id: '0',
        userId: 'DERBUSH',
        baseLocation: 'Moscow, Nekrasov street',
        genres: ['pop', 'jazz', 'modern'],
        photo: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201901/RTX5IF2A.jpeg?oY3_4Pu8KcjbYXpaZQ6Ca9l1iv_fechi',
        rating: '4.0',
        balance: '123456789',
        hourPrice: '7000 rub',
        qr: '12345678'
      },
        {
          id: '1',
          userId: 'Oscar Band',
          baseLocation: 'Saint Petersburg, Moscowskii prospect, 31',
          genres: ['pop', 'blues'],
          photo: 'http://am3.dlstatic.ru/wedding/gallery/1835/1835267.gallery.jpeg',
          rating: '4.6',
          balance: '123456789',
          hourPrice: '10000 rub',
          qr: '12345678'
        }, {
          id: '2',
          userId: 'Tesla Boy',
          baseLocation: 'Moscow, Chistue prudy',
          genres: ['rock', 'metal', 'electro'],
          photo: 'https://s3.us-east-2.amazonaws.com/umb-media-library/media/1161255/musician-banner.jpg',
          rating: '2.5',
          balance: '123456789',
          hourPrice: '500 rub',
          qr: '12345678'
        },
        {
          id: '3',
          userId: 'Мальбэк',
          baseLocation: 'Moscow, Red Square',
          genres: ['hip-hop', 'rep'],
          photo: 'https://modernrock.ru/wp-content/uploads/2018/08/malbek-suzanna.jpg',
          rating: '4.5',
          balance: '123456789',
          hourPrice: '3000 rub',
          qr: '12345678'
        },
        {
          id: '4',
          userId: 'Ishome',
          baseLocation: 'Saint Petersburg, Vasilevsii Island',
          genres: ['rep', 'rock'],
          photo: 'https://cdn1.img.crimea.ria.ru/images/111612/19/1116121926.jpg',
          rating: '5',
          balance: '123456789',
          hourPrice: '1000 rub',
          qr: '12345678'
        },
        {
          id: '5',
          userId: 'Ai Mori',
          baseLocation: 'Moscow',
          genres: ['vocalism', 'solo', 'classic'],
          photo: 'https://i.pinimg.com/originals/48/1f/0b/481f0bd8a6bc2d1c32190078dcbdd16c.jpg',
          rating: '3',
          balance: '123456789',
          hourPrice: '9000 rub',
          qr: '12345678'
        }
      ],
      participants: []
    }
  },
  methods: {
    onMusician() {
      this.dialog = false
      //request to musician
      //const response = api.getSections()
    }
  },
}
</script>

<style scoped>
</style>
