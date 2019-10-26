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
      <v-row justify="start" align="center" style="padding: 7px 25px">
        <img
          src="../static/logo.svg"
          width=75px
          height=75px
          style="border-radius: 50%"
          contain
        >
        <v-subheader style="padding: 5px; color: #e12729; font-size: large">ThankYou.To</v-subheader>
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
            <v-icon large color="#1b557a">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title style="color: #1b557a" v-text="item.title" />
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
            color="#e12729"
            v-on="on"
          >
            Dropdown Menu
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
    <!--<v-footer-->
      <!--:fixed="fixed"-->
      <!--app-->
    <!--&gt;-->
      <!--<span>&copy; 2019</span>-->
    <!--</v-footer>-->
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
          icon: 'mdi-account-search',
          title: 'Musicians',
          to: '/profile'
        },
        {
        icon: 'mdi-account-card-details-outline',
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
    }
  },
  created() {
    if (!this.$store.state.user.data.token) {
      this.$router.push('/main');
    }
  }
}
</script>
