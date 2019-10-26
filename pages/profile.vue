<template>
  <container>
      <v-row>
        <v-col cols="4" v-for="section of sections"
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
              <v-btn text>Список участников</v-btn>
            </v-card-actions>

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
        ]
      }
    }
  }
</script>

<style scoped>
</style>
