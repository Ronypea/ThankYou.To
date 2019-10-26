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
          title: 'Sections',
          to: '/profile'
        },
        {
        icon: 'mdi-plus',
          title: 'Add section',
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
  }
}
</script>
