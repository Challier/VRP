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
          src: 'https://i.imgur.com/YMVCvAw.jpg'
        },
        {
          prenom: 'Rémi',
          nom: 'Dupeuble',
          poste: 'Troisième ligne centre',
          current: false,
          src: 'https://i.imgur.com/MqQ948k.jpg'
        },
        {
          prenom: 'Manu',
          nom: 'Berthomieu',
          poste: 'Troisième ligne centre',
          current: true,
          src: 'https://i.imgur.com/Gof6ph8.jpg'
        },
        {
          prenom: 'Victor',
          nom: 'Bourrier',
          poste: 'Deuxième ligne',
          current: true,
          src: 'https://i.imgur.com/dYONmw9.jpg'
        },
        {
          prenom: 'Louis',
          nom: 'Lhermitte',
          poste: 'Deuxième ligne',
          current: true,
          src: 'https://i.imgur.com/jaRqlJU.jpg'
        },
        {
          prenom: 'Sébastien',
          nom: 'Malaussène',
          poste: 'Talonneur',
          current: true,
          src: 'https://i.imgur.com/XOOTdjK.jpg'
        },
        {
          prenom: 'Etienne',
          nom: 'Jouan',
          poste: 'Deuxième ligne',
          current: true,
          src: 'https://i.imgur.com/DpjVwse.jpg'
        },
        {
          prenom: 'Victor',
          nom: 'Challier',
          poste: 'Troisième ligne aile',
          current: true,
          src: 'https://i.imgur.com/M2PPevT.jpg'
        },
        {
          prenom: 'Greg',
          nom: 'Degrange',
          poste: 'Demi de mêlée',
          current: true,
          src: 'https://i.imgur.com/u2997nQ.jpg'
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
