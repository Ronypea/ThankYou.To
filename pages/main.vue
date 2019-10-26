<template>
  <component>
    <v-container id="page" fill-height style="padding: 0">
      <v-layout>
        <v-flex sm6 md7 lg7>
        <v-col>
          <v-img
            src="https://cdn.dribbble.com/users/1172331/screenshots/6460593/room-artwork-_recovered__4x.png"
            height="100vh"
            contain
            style="margin: 0; padding: 0"
          ></v-img>
        </v-col>
        <v-col
        :align="center"
        :justify="center">
          <v-row id="header"> HobbIT - найди своих клиентов!</v-row>
          <v-row id="header2"> Сервис, который увеличит твой трафик</v-row>
        </v-col>
        </v-flex>
      </v-layout>
    </v-container>
  </component>
</template>

<script>
  export default {
    layout: 'main_page'
  }

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  #page {
    background: #74c5c3;
    min-height: 100vh;
    min-width: 100%;
  }

  #picture {
    height: auto;
    background-image: url('../assets/main_page_2.png');
    background-position: left bottom;
    background-repeat: no-repeat;
    background-size: contain;
  }

  #header {
    text-align: right;
    font-family: 'Oswald', cursive;
    font-weight: bold;
    font-size: xx-large;
  }

  #header2 {
    text-align: right;
    font-family: 'Open Sans', cursive;
    font-weight: bold;
    font-size: large;
  }

</style>
