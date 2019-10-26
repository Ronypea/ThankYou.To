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
                <v-icon> mdi-map-marker</v-icon>
                <b>Place</b> : {{ player.baseLocation }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                <v-icon> mdi-currency-usd</v-icon>
                <b>Price by hour</b>: {{ player.hourPrice }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                <v-icon> mdi-music</v-icon>
                <span v-for="(genre, index) in player.genres" :key="index"> <span> {{ genre}}</span> <span
                  v-if="index+1 < player.genres.length">, </span></span>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn text @click.stop="dialog = true"> Make order</v-btn>
          </v-card-actions>

          <v-dialog
            v-model="dialog"
            max-width="350px"
            scrollable
          >
            <v-card>
              <v-card-title class="headline"> List of participants</v-card-title>

              <v-list>
                <v-list-item
                  v-for="participant in participants"
                  :key="participant._id"
                >
                  <v-list-item-content>
                    <v-list-item-title style="padding-left: 10px">{{ participant.id }}. {{ participant.name }} {{
                      participant.surname }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
                <v-list>
                  <v-list-item
                    v-for="participant in participants"
                    :key="participant._id"
                  >
                    <v-list-item-content>
                      <v-list-item-title style="padding-left: 10px">{{ participant.id }}. {{ participant.name }} {{ participant.surname }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="grey darken-1"
                  text
                  @click="dialog = false"
                >
                  Close
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

export default {
  name: "profile",
  data() {
    return {
      dialog: false,
      user: {
        nameFirst: 'Veronika',
        nameLast: 'Plotnikova'
      },
      players: [{
        id: '1',
        userId: 'User 1',
        baseLocation: 'Москва, улица Красносолнышка, дом 5',
        genres: ['pop', 'blus', 'huuse', 'blus', 'huuse', 'blus', 'huuse'],
        photo: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201901/RTX5IF2A.jpeg?oY3_4Pu8KcjbYXpaZQ6Ca9l1iv_fechi',
        rating: '4.2',
        balance: '123456789',
        hourPrice: '10000 рублей',
        qr: '12345678'
      }, {
        id: '2',
        userId: 'User 2',
        baseLocation: 'Санкт-Петербург, Невский проспект',
        genres: ['pop', 'blus', 'huuse', 'pop', 'blus', 'huuse'],
        photo: 'https://s3.us-east-2.amazonaws.com/umb-media-library/media/1161255/musician-banner.jpg',
        rating: '4.5',
        balance: '123456789',
        hourPrice: '500 рублей',
        qr: '12345678'
      },
        {
          id: '3',
          userId: 'User 3',
          baseLocation: 'Прага, старый город, 36',
          genres: ['pop', 'blus', 'huuse', 'blus', 'huuse'],
          photo: 'data:image/jpeg;base64,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',
          rating: '3',
          balance: '123456789',
          hourPrice: '3000 рублей',
          qr: '12345678'
        },
        {
          id: '4',
          userId: 'User 4',
          baseLocation: 'Санкт-Петербург, Васильевский остров',
          genres: ['pop', 'blus', 'huuse'],
          photo: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201901/RTX5IF2A.jpeg?oY3_4Pu8KcjbYXpaZQ6Ca9l1iv_fechi',
          rating: '5',
          balance: '123456789',
          hourPrice: '1000 рублей',
          qr: '12345678'
        }
      ]
    }
  },
  methods: {
    async fetchSections() {
      const response = api.getSections()
    }
  },
  mounted() {
    // this.fetchSections()
  }
}
</script>

<style scoped>
  .item + .item:before {
    content: ", "
  }
</style>
