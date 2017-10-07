<template>
  <v-container class="text-xs-center">
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2>
        <v-carousel hide-controls dark>
          <v-carousel-item v-for="(photo,i) in photos" v-bind:src="photo.src" :key="i"></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm8 offset-sm2>
        <v-avatar 
          v-for="logo in logos"
          tile="true"
          size="144px" 
          slot="activator"
          :key="logo.title"
          class="ma-5">
          <img :src="logo.src" alt="">
        </v-avatar>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      logos: [
        { title: 'FFSE', src: 'https://i.imgur.com/DvF06Ja.png' },
        { title: 'Large', src: 'https://i.imgur.com/bT2JUOh.png' },
        { title: 'Top 14', src: 'https://i.imgur.com/lKFrvYm.png' }
      ],
      photos: [
        {
          src: 'https://i.imgur.com/JHXLRVc.jpg'
        },
        {
          src: 'https://i.imgur.com/oVLqsnO.jpg'
        },
        {
          src: 'https://i.imgur.com/iqhPNwd.jpg'
        },
        {
          src: 'https://i.imgur.com/oZeJzCU.jpg'
        },
        {
          src: 'https://i.imgur.com/wHDpMHP.jpg'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
