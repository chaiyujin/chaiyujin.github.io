<template>
  <v-app id="inspire">
    <!-- <v-navigation-drawer
      v-model="drawerRight"
      app
      clipped
      right
    >
      <v-list dense>
        <v-list-item @click.stop="right = !right">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Open Temporary Drawer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-app-bar
      app
      clipped-right
      color="blue-grey"
      dark
    >
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title>Home</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight"></v-app-bar-nav-icon> -->
    </v-app-bar>

    <!-- <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item @click.stop="left = !left">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Open Temporary Drawer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <!-- <v-navigation-drawer
      v-model="left"
      fixed
      temporary
    ></v-navigation-drawer> -->

    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
      <List />
      </v-container>
    </v-main>

    <!-- <v-navigation-drawer
      v-model="right"
      fixed
      right
      temporary
    ></v-navigation-drawer> -->

    <v-footer
      app
      color="blue-grey"
      class="white--text"
    >
      <span>Yujin Chai</span>
      <v-spacer></v-spacer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import List from './List.vue';

export default {
  props: {},
  components: {
    List
  },
  data: () => ({
    drawer: null,
    drawerRight: null,
    right: false,
    left: false,
  }),
}
</script>
