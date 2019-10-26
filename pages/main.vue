<template>
  <v-layout fill-height>
    <v-flex lg7>
    <img
      src="@/assets/main_pic.jpg"
      width="570px"
      height="570px"
      style="background-size: cover; box-shadow: 5px 14px 28px rgba(0,0,0,0.8); display:block"
    />
    </v-flex>
    <v-layout column justify-center align-center class="text_layout">
      <div class="text_layout--title mb-4" id="header"> ThankYou.To</div>
      <div class="mt-4 text_layout--subtitle" id="header2"> App to make people's & hobbies meet</div>
      <v-btn
        @click="$router.push('/login')"
        color="primary"
        width="150"
        height="48"
        class="mt-4"
        > Start </v-btn>
    </v-layout>
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
  }

  #header2 {
    text-align: left;
    font-family: 'Open Sans', cursive;
    font-weight: bold;
    font-size: large;
  }

</style>
