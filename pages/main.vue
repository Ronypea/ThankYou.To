<template>
  <v-layout fill-height class="background">
    <v-layout column justify-center align-center class="text_layout">
      <div class="text_layout--title mb-4" id="header"> ThankYou.To</div>
      <div class="mt-4 text_layout--subtitle" id="header2"> Each artist needs his own listener - each listener needs his
        own artist!
      </div>
      <div class="mt-4 text_layout--subtitle" id="header3"> This service will allow each
        owner of the institution to find a music artist who ideally fits into the general concept and atmosphere of his
        business.
        <br> The combination of convenience and price!
      </div>
      <v-btn
        @click="$router.push('/login')"
        color="#1b557a"
        width="150"
        height="48"
        class="mt-4"
        outlined
      > Get start
      </v-btn>
    </v-layout>
    <v-flex lg9>
      <img
        src="@/assets/undraw_media_player_ylg8.svg"
        width="100%"
        height="100%"
        style="background-size: cover; display:block"
      />
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    layout: 'main_page',
    auth: false
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  /*.background {*/
  /*!*background-image: linear-gradient(to top, rgb(101, 115, 255), rgb(111, 114, 247), rgb(120, 114, 239), rgb(130, 113, 231), rgb(139, 112, 223), rgb(149, 111, 215), rgb(158, 111, 208), rgb(168, 110, 200), rgb(177, 109, 192), rgb(187, 108, 184), rgb(196, 108, 176), rgb(206, 107, 168));*!*/
  /*!*}*!*/
  /*!*background-image: linear-gradient(to top left, rgb(72, 76, 199), rgb(84, 77, 199), rgb(95, 77, 200), rgb(107, 78, 200), rgb(119, 78, 201), rgb(130, 79, 201), rgb(142, 79, 202), rgb(153, 80, 202), rgb(165, 80, 203), rgb(177, 81, 203), rgb(188, 81, 204), rgb(200, 82, 204));*!*/
  /*!*}*!*/
  /*background-image: linear-gradient(to top left, rgb(42, 44, 122), rgb(55, 44, 120), rgb(69, 43, 118), rgb(82, 43, 116), rgb(95, 43, 114), rgb(109, 42, 112), rgb(122, 42, 110), rgb(136, 41, 108), rgb(149, 41, 106), rgb(162, 41, 104), rgb(176, 40, 102), rgb(189, 40, 100));*/
  /*}*/
  #picture {
    height: auto;
    background-image: url('../assets/main_page_2.png');
    background-position: left bottom;
    background-repeat: no-repeat;
    background-size: contain;
  }
  #header {
    text-align: left;
    font-family: 'Oswald', cursive;
    font-weight: bold;
    font-size: 70px;
    color: #e12729;
  }
  #header2 {
    text-align: center;
    font-family: 'Open Sans', cursive;
    color: #212121;
  }
  #header3 {
    text-align: center;
    margin-right: 80px;
    margin-left: 80px;
    margin-bottom: 15px;
    font-family: 'Open Sans', cursive;
    color: #212121;
  }
</style>
