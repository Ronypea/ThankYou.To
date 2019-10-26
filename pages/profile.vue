<template>
  <container>
      <v-row>
        <v-col xs="12" sm="6" md="6" lg="4" v-for="section of sections"
             v-blind="section._id"
             class="section-item">
          <v-card class="mx-auto"
                  max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title> {{ section.name }}</v-card-title>
            </v-img>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4"> {{section.category }}</div>
                <v-list-item-subtitle> <b>Date</b>: {{ section.date }}, <b>Time</b>: {{ section.time }}</v-list-item-subtitle>
                <v-list-item-subtitle> <b>Place</b> : {{ section.place }}</v-list-item-subtitle>
                <v-list-item-subtitle> <b>Description</b>: {{ section.description }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn text @click.stop="dialog = true"> List of participants </v-btn>
            </v-card-actions>

            <v-dialog
              v-model="dialog"
              max-width="350px"
              scrollable
            >
              <v-card>
                <v-card-title class="headline"> List of participants </v-card-title>

                <v-list>
                  <v-list-item
                    v-for="participant in participants"
                    :key="participant._id"
                    @click=""
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

<script>

  export default {
    name: "profile",
    data() {
      return {
        dialog: false,
        user: {
          name: 'Veronika',
          surname: 'Plotnikova'
        },
        sections: [{
          id: '1',
          name: 'Секция 1',
          date: '20.10.19',
          time: '17:00',
          description: 'Очень интересное описание',
          place: 'Московский проспект',
          price: '100 рублей',
          category: 'Категория 1'
        }, {
          id: '2',
          name: 'Секция 2',
          date: '20.10.19',
          time: '17:00',
          description: 'Очень интересное описание 2',
          place: 'Московский проспект',
          price: '100 рублей',
          category: 'Категория 2'
        }, {
          id: '3',
          name: 'Секция 3',
          date: '20.10.19',
          time: '17:00',
          description: 'Очень интересное описание 3',
          place: 'Московский проспект',
          price: '100 рублей',
          category: 'Категория 3'
        },
          {
            id: '3',
            name: 'Секция 3',
            date: '20.10.19',
            time: '17:00',
            description: 'Очень интересное описание 3',
            place: 'Московский проспект',
            price: '100 рублей',
            category: 'Категория 3'
          }
        ],
        participants: [
          {id: '1',
          name: 'Veronika',
          surname: 'Plotnikova'},
          {id: '2',
            name: 'Veronika',
            surname: 'Plotnikova'},
          {id: '3',
            name: 'Veronika',
            surname: 'Plotnikova'},
          {id: '4',
            name: 'Veronika',
            surname: 'Plotnikova'},
          {id: '5',
            name: 'Veronika',
            surname: 'Plotnikova'},
        ]
      }
    }
  }
</script>

<style scoped>
</style>
