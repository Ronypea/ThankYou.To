<template>
  <v-layout fill-height class="background">
    <v-layout column justify-center align-center class="text_layout">
      <div class="text_layout--title mb-4" id="header"> ThankYou.To</div>
      <div class="mt-4 text_layout--subtitle" id="header2"> Each artist needs his own listener - each listener needs his
        own artist!
      </div>
      <div class="mt-4 text_layout--subtitle" style="text-align:center; margin: 10px"> This service will allow each
        owner of the institution to find a music artist who ideally fits into the general concept and atmosphere of his
        business.
        <br> The combination of convenience and price!
      </div>
      <v-btn
        @click="$router.push('/login')"
        color="purple"
        width="150"
        height="48"
        class="mt-4"
        outlined
      > Get start
      </v-btn>
    </v-layout>
    <v-flex lg7>
      <img
        src="@/assets/main_pic.jpg"
        width="570px"
        height="570px"
        style="background-size: cover; box-shadow: 5px 14px 28px rgba(0,0,0,0.8); display:block"
      />
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    layout: 'main_page'
  }

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  .background {
    /*background-image: linear-gradient(to top, rgb(101, 115, 255), rgb(111, 114, 247), rgb(120, 114, 239), rgb(130, 113, 231), rgb(139, 112, 223), rgb(149, 111, 215), rgb(158, 111, 208), rgb(168, 110, 200), rgb(177, 109, 192), rgb(187, 108, 184), rgb(196, 108, 176), rgb(206, 107, 168));*/
    /*}*/
    background-image: linear-gradient(to top left, rgb(72, 76, 199), rgb(84, 77, 199), rgb(95, 77, 200), rgb(107, 78, 200), rgb(119, 78, 201), rgb(130, 79, 201), rgb(142, 79, 202), rgb(153, 80, 202), rgb(165, 80, 203), rgb(177, 81, 203), rgb(188, 81, 204), rgb(200, 82, 204));
  }

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
  }git

  #header2 {
    text-align: left;
    font-family: 'Open Sans', cursive;
    font-weight: bold;
    font-size: large;
  }

</style>
