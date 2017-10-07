<template>
  <v-layout column>
    <v-flex xs12 sm8 offset-sm2 class="pb-5">
      <v-container fluid grid-list-md class="grey lighten-4">
        <v-layout row wrap>
          <v-flex
            xs4
            v-bind="{ [`xs${card.flex}`]: true }"
            v-for="card in cards"
            :key="card.title"
          >
            <v-card>
	          <v-card-media
	            class="white--text"
	            height="300px"
	            :src="card.src"
	          >
	          </v-card-media>
	          <v-card-title>
                <div align="left"><a :href="card.url" target="_blank"><v-btn flat><v-icon>shopping_cart</v-icon></v-btn></a></div>
	              <a :href="card.url" target="_blank" text-align="right"><span class="grey--text">{{ card.title }}</span></a>
	          </v-card-title>
	        </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Shop',
  data () {
    return {
      cards: [
      {title: 'Parka', src: 'https://i.imgur.com/YdMHS1K.jpg', url: 'http://www.akka-sports.fr/accueil/852-veste-revolution-12-zip-gilbert-vrp-vieux-rugbymen-des-ponts-par-akka-sports.html', flex: 4},
      {title: 'Casquette', src: 'https://i.imgur.com/fjXWl3w.jpg', url: 'http://www.akka-sports.fr/vrp-vieux-rugbymen-des-ponts/857-casquette-vrp-vieux-rugbymen-des-ponts-kp154-k-up-par-akka-sports.html', flex: 4},
      {title: 'Body', src: 'https://i.imgur.com/8MdIirj.jpg', url: 'http://www.akka-sports.fr/vrp-vieux-rugbymen-des-ponts/858-body-vrp-vieux-rugbymen-des-ponts-k831-kariban-par-akka-sports.html', flex: 4},
      {title: 'Sweat col rond', src: 'https://i.imgur.com/vJe0hHt.jpg', url: 'http://www.akka-sports.fr/accueil/856-sweat-col-rond-sc163-vrp-vieux-rugbymen-des-ponts-par-akka-sports.html', description: '', flex: 4},
      {title: 'Baselayer short', src: 'https://i.imgur.com/9gMvtJL.jpg', url: 'http://www.akka-sports.fr/accueil/859-baselayer-shorts-blk-par-akka-sports.html', description: '', flex: 4},
      {title: 'Chaussettes', src: 'https://i.imgur.com/nem7VgW.jpg', url: 'http://www.akka-sports.fr/accueil/861-chaussettes-blk-marine.html', description: '', flex: 4}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color : #FF5AA5;
  text-decoration: none;
}
</style>
