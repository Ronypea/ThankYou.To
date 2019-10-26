<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      permanent
      app
    >
      <v-row justify="start" style="padding: 7px 25px">
        <img
          src="../static/logo.png"
          width=50px
          height=50px
          style="border-radius: 50%"
          contain
        >
        <v-subheader style="padding: 0">HobbIT</v-subheader>
      </v-row>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn
            color="primary"
            dark
            v-on="on"
          >
            Dropdown
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in dropdownItems"
            :key="index"
          >
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <v-container fill-height>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      dropdownItems: [
        'Change name',
        'Log out'
      ],
      items: [
        {
          icon: 'mdi-file-document-box',
          title: 'Musicians',
          to: '/profile'
        },
        {
        icon: 'mdi-plus',
          title: 'Management',
          to: '/add'
        },
        {
          icon: 'mdi-map',
          title: 'Map',
          to: '/map'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  mounted() {
    if (!window.FBINITED) {
      var firebaseConfig = {
        apiKey: "AIzaSyApnS3fmi1n3DtlbeTUyBTWes9J4ObEvmc",
        authDomain: "hobb-it.firebaseapp.com",
        databaseURL: "https://hobb-it.firebaseio.com",
        projectId: "hobb-it",
        storageBucket: "hobb-it.appspot.com",
        messagingSenderId: "926011515719",
        appId: "1:926011515719:web:0a4204231bb1a21d472262",
        measurementId: "G-SE1F0K9P8P"
      };
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
      window.FBINITED = true;
      if ("Notification" in window) {
        this.messaging = firebase.messaging();
        this.subscribe();
        this.messaging.onMessage(payload => {

        });
      }
    }
  },
  methods: {
    async subscribe() {
      try {
        await this.messaging.requestPermission();
      } catch (e) {
        return;
      }
      try {
        const token = await this.messaging.getToken();
        if (token) {
          this.sendTokenToServer(token);
        } else {
          console.warn("Не удалось получить токен.");
          this.setTokenSentToServer(false);
        }
      } catch (e) {
        console.warn("При получении токена произошла ошибка.", e);
        this.setTokenSentToServer(false);
      }
    },
    sendTokenToServer(currentToken) {
      if (!this.isTokenSentToServer(currentToken)) {
        try {
          this.$api.setFcm(currentToken);
        } catch (e) {}
        this.setTokenSentToServer(currentToken);
      }
    },

    isTokenSentToServer(currentToken) {
      return (
        window.localStorage.getItem("sentFirebaseMessagingToken") ==
        currentToken
      );
    },

    setTokenSentToServer(currentToken) {
      window.localStorage.setItem(
        "sentFirebaseMessagingToken",
        currentToken ? currentToken : ""
      );
    }
  }
}
</script>
