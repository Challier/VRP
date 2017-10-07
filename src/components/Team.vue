<template>
	<div class="text-xs-center">
		<v-container fluid class="pa-0">
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3 class="md-4">
          <v-btn-toggle mandatory v-model="toggle_exclusive">
            <v-btn v-on:click="playerFilterKey = 'all'" :class="{ active: playerFilterKey == 'all' }" flat value="all">
              All
            </v-btn>
            <v-btn v-on:click="playerFilterKey = 'current'" :class="{ active: playerFilterKey == 'current' }" flat value="current">
              2017/2018
            </v-btn>
          </v-btn-toggle>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout>
      <v-flex xs12 sm8 offset-sm2>
        <v-avatar 
          v-for="player in playerFilter"
          size="144px" 
          slot="activator"
          :key="player.name"
          class="mt-3 ml-3 mr-3">
          <img :src="player.src" alt="">
        </v-avatar>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Team',
  data () {
    return {
      playerFilterKey: 'all',
      players: [
        {
          prenom: 'Thibaud',
          nom: 'Allain',
          poste: 'Demi d\'ouverture',
          current: true,
          src: '/static/doc-images/players/thibaud_allain.jpg'
        },
        {
          prenom: 'Rémi',
          nom: 'Dupeuble',
          poste: 'Troisième ligne centre',
          current: false,
          src: '/static/doc-images/players/remi_dupeuble.jpg'
        },
        {
          prenom: 'Manu',
          nom: 'Berthomieu',
          poste: 'Troisième ligne centre',
          current: true,
          src: '/static/doc-images/players/manu_berthomieu.jpg'
        },
        {
          prenom: 'Victor',
          nom: 'Bourrier',
          poste: 'Deuxième ligne',
          current: true,
          src: '/static/doc-images/players/victor_bourrier.jpg'
        },
        {
          prenom: 'Louis',
          nom: 'Lhermitte',
          poste: 'Deuxième ligne',
          current: true,
          src: '/static/doc-images/players/louis_lhermitte.jpg'
        },
        {
          prenom: 'Sébastien',
          nom: 'Malaussène',
          poste: 'Talonneur',
          current: true,
          src: '/static/doc-images/players/seb_malaussene.jpg'
        },
        {
          prenom: 'Etienne',
          nom: 'Jouan',
          poste: 'Deuxième ligne',
          current: true,
          src: '/static/doc-images/players/etienne_jouan.jpg'
        },
        {
          prenom: 'Victor',
          nom: 'Challier',
          poste: 'Troisième ligne aile',
          current: true,
          src: '/static/doc-images/players/victor_challier.jpg'
        },
        {
          prenom: 'Greg',
          nom: 'Degrange',
          poste: 'Demi de mêlée',
          current: true,
          src: '/static/doc-images/players/greg_degrange.jpg'
        }
      ],
      filter: ''
    }
  },
  computed: {
    playerFilter () {
      return this[this.playerFilterKey]
    },
    all () {
      return this.players
    },
    current () {
      return this.players.filter((player) => player.current === true)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
