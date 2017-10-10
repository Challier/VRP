<template>
  <v-app class="mainContainer">
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
    <v-toolbar fixed app light class="app-toolbar text-xs-center">
      <v-avatar
        :tile="tile"
        :size="avatarSize"
        class="primary"
        right
      >
        <img src="https://i.imgur.com/TuH1uGz.jpg" alt="avatar">
      </v-avatar>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title" text-align="center" class="primary--text"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="item in items" :key="item.title" class="primary--text" :value="item.title" flat router :to="item.url">
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
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
        title: 'Vieux Rugbymen des Ponts'
      }
    }
  }

</script>


<style lang="stylus">
@import './stylus/main'

</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainContainer {
  background: -moz-linear-gradient(0deg, rgba(255,54,228,0.45) 0%, rgba(0,19,128,0.64) 36%, rgba(0,19,128,1) 100%);
  background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(255,54,228,0.45)), color-stop(36%, rgba(0,19,128,0.64)), color-stop(100%, rgba(0,19,128,1)));
  background: -webkit-linear-gradient(0deg, rgba(255,54,228,0.45) 0%, rgba(0,19,128,0.64) 36%, rgba(0,19,128,1) 100%);
  background: -o-linear-gradient(0deg, rgba(255,54,228,0.45) 0%, rgba(0,19,128,0.64) 36%, rgba(0,19,128,1) 100%);
  background: -ms-linear-gradient(0deg, rgba(255,54,228,0.45) 0%, rgba(0,19,128,0.64) 36%, rgba(0,19,128,1) 100%);
  background: linear-gradient(90deg, rgba(255,54,228,0.45) 0%, rgba(0,19,128,0.64) 36%, rgba(0,19,128,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FF36E4', endColorstr='#001380',GradientType=1 );
}
</style>



