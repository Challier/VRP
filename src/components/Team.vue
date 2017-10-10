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
        <template
          v-for="player in playerFilter">
          <v-dialog width="500px">
            <v-avatar 
              size="144px" 
              slot="activator"
              :key="player.name"
              class="ma-3"
              >
              <img :src="player.src" alt="">
            </v-avatar>
            <v-card class="dialog-window">
              <v-card-text class="text-xs-center">
                <h6>{{ player.prenom }} {{ player.nom }}</h6>
                <b>{{ player.poste | uppercase }}</b><br>
                <v-avatar 
                  size="144px" 
                  slot="activator"
                  :key="player.name"
                  class="ma-3"
                  >
                  <img :src="player.src" alt="">
                </v-avatar>
                <br><b class="text-xs-left">DESCRIPTION</b>
                <p class="text-xs-left text-description">{{ player.description }}</p>
              </v-card-text>
            </v-card>
          </v-dialog>
        </template>
      </div>
      <div v-else>
        <template v-for="poste in postes">
          <v-divider dark></v-divider>
          <h6 dark class="mt-3 md-3 text-xs-center white--text">{{ poste | uppercase }}</h6>
          <v-divider dark></v-divider>
          <template
            v-for="player in playerFilter" v-if="player.poste === poste">
            <v-dialog width="500px">
              <v-avatar 
                size="144px" 
                slot="activator"
                :key="player.name"
                class="ma-3"
                >
                <img :src="player.src" alt="">
              </v-avatar>
              <v-card class="dialog-window">
                <v-card-text class="text-xs-center">
                  <h6>{{ player.prenom }} {{ player.nom }}</h6>
                  <b>{{ player.poste | uppercase }}</b><br>
                  <v-avatar 
                    size="144px" 
                    slot="activator"
                    :key="player.name"
                    class="ma-3"
                    >
                    <img :src="player.src" alt="">
                  </v-avatar>
                  <br><b class="text-xs-left">Description</b>
                  <p class="text-xs-left text-description">{{ player.description }}</p>
                  <!--<v-slider disabled :label="ex1.label" v-model="ex1.val" :color="ex1.color"></v-slider>
                  <v-slider disabled :label="ex2.label" v-model="ex2.val" :color="ex2.color"></v-slider>
                  <v-slider disabled :label="ex3.label" v-model="ex3.val" :color="ex3.color"></v-slider>-->
                </v-card-text>
              </v-card>
            </v-dialog>
          </template>
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
          surnom: '',
          poste: 'Demi d\'ouverture',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/YMVCvAw.jpg',
          description: 'LE numéro dix des VRP. Non vraiment, "le numéro dix" parce que ça fait cinq ans qu\'on n\'a pas eu deux demis d\'ouverture dans l\'équipe. Heureusement que Thibaud fait plus de sport que tout le paquet d\'avant réuni sinon il ne tiendrait pas 80 minutes chaque samedi de match.'
        },
        {
          prenom: 'Rémi',
          nom: 'Dupeuble',
          surnom: '',
          poste: 'Troisième ligne',
          team2017: false,
          team2016: false,
          src: 'https://i.imgur.com/MqQ948k.jpg',
          description: ''
        },
        {
          prenom: 'Manu',
          nom: 'Berthomieu',
          surnom: 'Manuel Valls',
          poste: 'Troisième ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/Gof6ph8.jpg',
          description: 'Aime découper du Gitan, et le fait savoir. On attend encore le jour où Manu marquera sur une Gardalande, il pourra alors raccrocher les crampons la conscience tranquille.'
        },
        {
          prenom: 'Victor',
          nom: 'Bourrier',
          surnom: 'Boubou',
          poste: 'Deuxième ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/dYONmw9.jpg',
          description: 'Président des VRP, Boubou veille sur cette équipe comme sur sa prochaine pinte de bière.'
        },
        {
          prenom: 'Louis',
          nom: 'Lhermitte',
          surnom: '',
          poste: 'Deuxième ligne',
          team2017: true,
          team2016: false,
          src: 'https://i.imgur.com/jaRqlJU.jpg',
          description: 'Louis a mis du temps à arriver chez les VRP, mais ses 2m04 l\'ont rendu indispensable dès son premier match. Sert de bloc de touche à lui tout seul, et forme une deuxième ligne majestueuse avec son compagnon Etienne.'
        },
        {
          prenom: 'Sébastien',
          nom: 'Malaussène',
          surnom: 'Bikette',
          poste: 'Talonneur',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/XOOTdjK.jpg',
          description: ''
        },
        {
          prenom: 'Etienne',
          nom: 'Jouan',
          surnom: '',
          poste: 'Deuxième ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/DpjVwse.jpg',
          description: 'A commencé sa carrière VRP à l\'aile, deux matchs ont suffi pour le remettre dans la cage en deuxième ligne. A vu son prez Louis débarquer à ses côtés, et s\'apprête à former un duo surpuissant au coeur de notre paquet d\'avants. Sa dernière conquête date de 2013 mais ne vous inquiétez pas, \'il a des bails\'.'
        },
        {
          prenom: 'Victor',
          nom: 'Challier',
          surnom: '',
          poste: 'Troisième ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/kYCdZNv.jpg',
          description: ''
        },
        {
          prenom: 'Greg',
          nom: 'Degrange',
          surnom: '',
          poste: 'Demi de mêlée',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/u2997nQ.jpg',
          description: 'Greg joue comme un neuvième avant. Certaines mauvaises langues diront que ses départs au ras ne marchent que contre les jeunes naïfs du PRC, mais cela ne nous regarde pas. Aime se battre en soirée et n\'hésite pas à recruter les copains, parce qu\'une grosse bagarre c\'est plus marrant qu\'une petite bagarre.'
        },
        {
          prenom: 'Jérôme',
          nom: 'Teytu',
          surnom: '',
          poste: 'Première ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/eNZ0U7x.jpg',
          description: 'Partage trois neurones avec Hannothiaux, et c\'est amplement suffisant. Oublie régulièrement qu\'il ne pèse que 75 kilos, surtout quand il décide de mettre des caramels aux gros d\'en face, pour le plus grand plaisir du banc VRP.'
        },
        {
          prenom: 'Victor',
          nom: 'Hannothiaux',
          surnom: 'Vico',
          poste: 'Troisième ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/jZqyMus.jpg',
          description: 'Partage trois neurones avec Teytu, et c\'est amplement suffisant. Hannothiaux a un corps de bodybuilder mais plus de cannes que nos trois-quarts. Cherchez l\'erreur.'
        },
        {
          prenom: 'Victor',
          nom: 'Cornu',
          surnom: 'Pachamama',
          poste: 'Ailier',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/6AcGD6a.jpg',
          description: 'Amoureux de la nature qu\'il a d\'ailleurs tatouée sur sa fesse, Pachamama est aussi le messieur de ces dames.'
        },
        {
          prenom: 'Thomas',
          nom: 'Bertrand',
          surnom: 'Tomate ou la faucheuse de blé',
          poste: 'Arrière',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/puGkwrp.jpg',
          description: 'Que ça soit pour la pénalité de la gagne ou le plaquage décisif, Thomas répond toujours présent. Quand il la sent, tout le monde s\'écarte.'
        },
        {
          prenom: 'Bastien',
          nom: 'Rançon',
          surnom: '',
          poste: 'Troisième ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/RwBbIYi.jpg',
          description: ''
        },
        {
          prenom: 'Guillaume',
          nom: 'Koechlin',
          surnom: '',
          poste: 'Centre',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/kusDVVL.jpg',
          description: ''
        },
        {
          prenom: 'JC',
          nom: 'Jesus',
          surnom: 'Jesus',
          poste: 'Centre',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/Hzs0bwD.jpg',
          description: ''
        },
        {
          prenom: 'Paul',
          nom: 'Trousseau',
          surnom: 'Oh Paul!',
          poste: 'Première ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/eMKXkOh.jpg',
          description: ''
        },
        {
          prenom: 'Jacques-Nicolas',
          nom: 'Ojea',
          surnom: 'Jack',
          poste: 'Centre',
          team2017: false,
          team2016: true,
          src: 'https://i.imgur.com/7ovSdxz.jpg',
          description: ''
        },
        {
          prenom: 'Ramy',
          nom: 'Atassi',
          surnom: '',
          poste: 'Première ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/dA32oCL.jpg',
          description: ''
        },
        {
          prenom: 'Yann',
          nom: 'Sambarino',
          surnom: 'Samba',
          poste: 'Première ligne',
          team2017: false,
          team2016: true,
          src: 'https://i.imgur.com/cXsbsNT.jpg',
          description: ''
        },
        {
          prenom: 'Baptiste',
          nom: 'Benet',
          surnom: 'Bapt\'Beun',
          poste: 'Première ligne',
          team2017: false,
          team2016: true,
          src: 'https://i.imgur.com/W4Hl8za.jpg',
          description: 'Hériter de la grande lignée des Directeurs Artistiques des VRP. Il a d\'ailleurs suivi son père spirituel à San Francisco, au plus grands malheur des PEER nanas. On cherche encore un sauteur en touche à la hauteur de son talent.'
        },
        {
          prenom: 'Robin',
          nom: 'Oval',
          surnom: '',
          poste: 'Première ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/FrXAsRf.jpg',
          description: ''
        },
        {
          prenom: 'Louis',
          nom: 'De Maistre',
          surnom: '',
          poste: 'Demi de mêlée',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/PqJ80Uz.jpg',
          description: ''
        }
      ],
      toggle_exclusive: 0,
      filter: '',
      ex1: { label: '1ère mi-temps', val: 25, color: 'orange darken-3' },
      ex2: { label: '2ème mi-temps', val: 75, color: 'green lighten-1' },
      ex3: { label: '3ème mi-temps', val: 50, color: 'red' }
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
  },
  filters: {
    uppercase: function (v) {
      return v.toUpperCase()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dialog-window {
  background-color: #E6E6E6;
}

</style>
