<template>
  <v-app>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      dark
      class="primary hidden-md-and-up"
    >
      <v-list class="pa-1">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://i.imgur.com/TuH1uGz.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Les VRP</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider light></v-divider>
        <v-list-tile v-for="item in items" 
          :key="item.title"
          router
          :to="item.url">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app dark class="primary">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" dark class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title" text-align="center"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-avatar
        :tile="tile"
        :size="avatarSize"
        class="primary"
      >
        <img src="https://i.imgur.com/TuH1uGz.jpg" alt="avatar">
      </v-avatar>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
    <v-bottom-nav :value="true" :active.sync="e1" class="grey lighten-4 hidden-sm-and-down">
      <v-btn v-for="item in items" :key="item.title" class="primary--text" :value="item.title" router :to="item.url">
        <span>{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        items: [{
          icon: 'home',
          title: 'Home',
          url: '/Home'
        },
        {
          icon: 'content_paste',
          title: 'Calendrier',
          url: '/Calendar'
        },
        {
          icon: 'group',
          title: 'La Team',
          url: '/Team'
        },
        {
          icon: 'poll',
          title: 'Statistiques',
          url: '/Data'
        },
        {
          icon: 'shopping_cart',
          title: 'Boutique',
          url: '/Shop'
        }],
        title: 'VRP - Vieux Rugbymen des Ponts'
      }
    }
  }

</script>

<style lang="stylus">
  @import './stylus/main'
</style>
