<template>
	<div>
		<v-container fluid>
      <v-layout row wrap class="text-xs-center">
        <v-flex xs12 sm6 offset-sm3>
          <v-btn-toggle mandatory v-model="toggle_exclusive" class="pd-0 md-0">
            <v-btn v-on:click="playerFilterKey = 'all'" :class="{ active: playerFilterKey == 'all' }" flat value="all">
              All
            </v-btn>
            <v-btn v-on:click="playerFilterKey = 'team2017'" :class="{ active: playerFilterKey == 'team2017' }" flat value="team2017">
              2017/2018
            </v-btn>
            <v-btn v-on:click="playerFilterKey = 'team2016'" :class="{ active: playerFilterKey == 'team2016' }" flat value="team2016">
              2016/2017
            </v-btn>
          </v-btn-toggle>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout>
      <v-flex xs12 sm8 offset-sm2 class="md-5 text-xs-center">
      <div v-if="playerFilterKey === 'all'">
        <v-avatar 
          v-for="player in playerFilter"
          size="144px" 
          slot="activator"
          :key="player.name"
          class="ma-3"
          >
          <img :src="player.src" alt="">
        </v-avatar>
      </div>
      <div v-else>
        <template v-for="poste in postes">
          <blockquote class="mt-3 md-3 text-xs-left">{{ poste }}</blockquote>
          <v-avatar 
            v-for="player in playerFilter"
            v-if="player.poste === poste"
            size="144px" 
            slot="activator"
            :key="player.name"
            class="ma-3"
            >
            <img :src="player.src" alt="">
          </v-avatar>
        </template>
      </div>
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
      postes: ['Première ligne', 'Deuxième ligne', 'Troisième ligne', 'Demi de mêlée', 'Demi d\'ouverture', 'Centre', 'Ailier', 'Arrière'],
      players: [
        {
          prenom: 'Thibaud',
          nom: 'Allain',
          poste: 'Demi d\'ouverture',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/YMVCvAw.jpg'
        },
        {
          prenom: 'Rémi',
          nom: 'Dupeuble',
          poste: 'Troisième ligne',
          team2017: false,
          team2016: false,
          src: 'https://i.imgur.com/MqQ948k.jpg'
        },
        {
          prenom: 'Manu',
          nom: 'Berthomieu',
          poste: 'Troisième ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/Gof6ph8.jpg'
        },
        {
          prenom: 'Victor',
          nom: 'Bourrier',
          poste: 'Deuxième ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/dYONmw9.jpg'
        },
        {
          prenom: 'Louis',
          nom: 'Lhermitte',
          poste: 'Deuxième ligne',
          team2017: true,
          team2016: false,
          src: 'https://i.imgur.com/jaRqlJU.jpg'
        },
        {
          prenom: 'Sébastien',
          nom: 'Malaussène',
          poste: 'Talonneur',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/XOOTdjK.jpg'
        },
        {
          prenom: 'Etienne',
          nom: 'Jouan',
          poste: 'Deuxième ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/DpjVwse.jpg'
        },
        {
          prenom: 'Victor',
          nom: 'Challier',
          poste: 'Troisième ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/kYCdZNv.jpg'
        },
        {
          prenom: 'Greg',
          nom: 'Degrange',
          poste: 'Demi de mêlée',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/u2997nQ.jpg'
        },
        {
          prenom: 'Jérôme',
          nom: 'Teytu',
          poste: 'Première ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/eNZ0U7x.jpg'
        },
        {
          prenom: 'Victor',
          nom: 'Hannothiaux',
          poste: 'Troisième ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/jZqyMus.jpg'
        },
        {
          prenom: 'Victor',
          nom: 'Cornu',
          poste: 'Ailier',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/6AcGD6a.jpg'
        },
        {
          prenom: 'Thomas',
          nom: 'Bertrand',
          poste: 'Arrière',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/puGkwrp.jpg'
        },
        {
          prenom: 'Bastien',
          nom: 'Rançon',
          poste: 'Troisième ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/RwBbIYi.jpg'
        },
        {
          prenom: 'Guillaume',
          nom: 'Koechlin',
          poste: 'Centre',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/kusDVVL.jpg'
        },
        {
          prenom: 'JC',
          nom: 'Jesus',
          poste: 'Centre',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/Hzs0bwD.jpg'
        },
        {
          prenom: 'Paul',
          nom: 'Trousseau',
          poste: 'Première ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/eMKXkOh.jpg'
        },
        {
          prenom: 'Jacques-Nicolas',
          nom: 'Ojea',
          poste: 'Centre',
          team2017: false,
          team2016: true,
          src: 'https://i.imgur.com/7ovSdxz.jpg'
        },
        {
          prenom: 'Ramy',
          nom: 'Atassi',
          poste: 'Première ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/dA32oCL.jpg'
        },
        {
          prenom: 'Yann',
          nom: 'Sambarino',
          poste: 'Première ligne',
          team2017: false,
          team2016: true,
          src: 'https://i.imgur.com/cXsbsNT.jpg'
        },
        {
          prenom: 'Baptiste',
          nom: 'Benet',
          poste: 'Première ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/W4Hl8za.jpg'
        },
        {
          prenom: 'Robin',
          nom: 'Oval',
          poste: 'Première ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/FrXAsRf.jpg'
        }
      ],
      toggle_exclusive: 0,
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
    team2017 () {
      return this.players.filter((player) => player.team2017 === true)
    },
    team2016 () {
      return this.players.filter((player) => player.team2016 === true)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
