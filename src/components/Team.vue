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
              size="130px" 
              slot="activator"
              :key="player.name"
              hover=''
              class="ma-3 elevation-15"
              >
              <img :src="player.src" alt="">
            </v-avatar>
            <v-card class="dialog-window elevation-15">
              <v-card-text class="text-xs-center">
                <h6>{{ player.prenom }} {{ player.nom }}</h6>
                <b>{{ player.poste | uppercase }}</b><br>
                <v-avatar 
                  size="200px" 
                  slot="activator"
                  :key="player.name"
                  class="mb-4 mt-2 elevation-5"
                  >
                  <img :src="player.src" alt="">
                </v-avatar>
                <br><b class="text-xs-left">DESCRIPTION</b>
                <br><p class="text-xs-left text-description">{{ player.description }}</p>
                <br><b class="text-xs-left">TITRES</b>
                <div v-if="player.titres === ''">
                  <b2 class="text-xs-left text-description">Trop jeune</b2>
                </div>
                <div v-else>
                  <template v-for="titre in player.titres">
                    <v-chip class="amber white--text">{{ titre }}</v-chip>
                  </template>
                </div>
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
                size="130px" 
                slot="activator"
                :key="player.name"
                class="ma-3 elevation-15"
                >
                <img :src="player.src" alt="">
              </v-avatar>
              <v-card class="dialog-window">
                <v-card-text class="text-xs-center">
                  <h6>{{ player.prenom }} {{ player.nom }}</h6>
                  <b>{{ player.poste | uppercase }}</b><br>
                  <v-avatar 
                    size="200px" 
                    slot="activator"
                    :key="player.name"
                    class="mb-4 mt-2 elevation-15"
                    >
                    <img :src="player.src" alt="">
                  </v-avatar>
                  <br><b class="text-xs-left">DESCRIPTION</b>
                  <br><p class="text-xs-left text-description">{{ player.description }}</p>
                  <br><b class="text-xs-left">TITRES</b>
                  <div v-if="player.titres === ''">
                    <b2 class="text-xs-left text-description">Trop jeune</b2>
                  </div>
                  <div v-else>
                    <template v-for="titre in player.titres">
                      <v-chip class="amber white--text">{{ titre }}</v-chip>
                    </template>
                  </div>
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
          description: 'LE numéro dix des VRP. En même temps ça fait cinq ans qu\'on n\'a pas eu deux demis d\'ouverture dans l\'équipe. Heureusement que Thibaud fait plus de sport que tout le paquet d\'avant réuni sinon il ne tiendrait pas 80 minutes à chaque match.',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Rémi',
          nom: 'Dupeuble',
          surnom: '',
          poste: 'Troisième ligne',
          team2017: false,
          team2016: false,
          src: 'https://i.imgur.com/MqQ948k.jpg',
          description: '',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Manu',
          nom: 'Berthomieu',
          surnom: 'Manuel Valls',
          poste: 'Troisième ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/Gof6ph8.jpg',
          description: 'Avec son accent du sud, les discours d\'avant-match de Manu sentent bon le rugby du terroir. On attend encore son essai sur une Gardalande, il pourra alors raccrocher les crampons la conscience tranquille. Jeu-concours : qu\'est-ce que Manu préfère bouffer par dessus tout? (Indice : c\'est pas de la salade). Le gagnant se verra offrir une dégustation maison avec lui, alors ne traînez pas!',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Victor',
          nom: 'Bourrier',
          surnom: 'Boubou',
          poste: 'Deuxième ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/dYONmw9.jpg',
          description: 'Président des VRP depuis peu, Boubou veille sur cette équipe comme sur sa prochaine pinte de bière. Après avoir assumé la fin de mandat délicate de ses prédécesseurs, il compte bien être à la tête du bureau qui ramènera les VRP en Top 14. C\'est tout ce qu\'on lui souhaite!',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Louis',
          nom: 'Lhermitte',
          surnom: '',
          poste: 'Deuxième ligne',
          team2017: true,
          team2016: false,
          src: 'https://i.imgur.com/jaRqlJU.jpg',
          description: 'Louis a mis du temps à arriver chez les VRP, mais ses 2m04 l\'ont rendu indispensable dès son premier match. Sert de bloc de touche à lui tout seul, et forme une deuxième ligne majestueuse avec son compagnon Etienne.',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Sébastien',
          nom: 'Malaussène',
          surnom: 'Bikette',
          poste: 'Première ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/XOOTdjK.jpg',
          description: 'Seb est jeune. Seb est cool. Seb a surfé un Australie. Seb met des bonnets Péruviens. Mais Seb, aka Bikette, danse la tectonik. Et pour nous rappeler qu\'il n\'a pas toujours été le plus cool de l\'équipe, Seb nous offre un show à chaque apéro d\'après match. Merci Seb, ton humilité nous impressionnera toujours.',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Etienne',
          nom: 'Jouan',
          surnom: '',
          poste: 'Deuxième ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/DpjVwse.jpg',
          description: 'A commencé sa carrière VRP à l\'aile, deux matchs ont suffi pour le remettre dans la cage en deuxième ligne. Son prez Louis débarque à ses côtés, ils s\'apprêtent à former un duo surpuissant au coeur de notre paquet d\'avants. Sa dernière conquête date de 2013 mais ne vous inquiétez pas, \'il a des bails\'.',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Victor',
          nom: 'Challier',
          surnom: '',
          poste: 'Troisième ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/kYCdZNv.jpg',
          description: '',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Greg',
          nom: 'Degrange',
          surnom: '',
          poste: 'Demi de mêlée',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/u2997nQ.jpg',
          description: 'Greg, c\'est le neuvième avant. Les mauvaises langues diront que ses départs au ras ne marchent que contre les jeunes naïfs du PRC, mais cela ne nous regarde pas. Aime se battre en soirée et n\'hésite pas à recruter les copains, parce qu\'une grosse bagarre c\'est plus marrant qu\'une petite bagarre.',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Jérôme',
          nom: 'Teytu',
          surnom: 'Jéjé',
          poste: 'Première ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/eNZ0U7x.jpg',
          description: 'Partage trois neurones avec Hannothiaux, et c\'est amplement suffisant. Oublie régulièrement qu\'il ne pèse que 75 kilos, surtout quand il décide de mettre des caramels aux gros d\'en face, pour le plus grand plaisir du banc VRP.',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Victor',
          nom: 'Hannothiaux',
          surnom: 'Vico',
          poste: 'Troisième ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/jZqyMus.jpg',
          description: 'Partage trois neurones avec Teytu, et c\'est amplement suffisant. Hannothiaux a un corps de bodybuilder mais plus de cannes que nos trois-quarts. Cherchez l\'erreur.',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Victor',
          nom: 'Cornu',
          surnom: 'Pachamama',
          poste: 'Ailier',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/6AcGD6a.jpg',
          description: 'Amoureux de la nature qu\'il a d\'ailleurs tatouée sur sa fesse, Pachamama est aussi le monsieur de ces dames.',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Thomas',
          nom: 'Bertrand',
          surnom: 'Tomate ou la faucheuse de blé',
          poste: 'Arrière',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/puGkwrp.jpg',
          description: 'Que ça soit pour la pénalité de la gagne ou le plaquage décisif, Thomas répond toujours présent. Quand il la sent, tout le monde s\'écarte.',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Bastien',
          nom: 'Rançon',
          surnom: 'Bastoune',
          poste: 'Troisième ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/RwBbIYi.jpg',
          description: 'Troisième ligne de devoir, ne fait des discours d\'avant-match que s\'il va pleuvoir. Permet avec JC d\'entretenir des bonnes relations avec les PEER nanas, et pour ça nous les remercions tous les jours.',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Guillaume',
          nom: 'Koechlin',
          surnom: '',
          poste: 'Centre',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/kusDVVL.jpg',
          description: '',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Jean-Camille',
          nom: 'Lavaud',
          surnom: 'JC ou Jésus',
          poste: 'Centre',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/Hzs0bwD.jpg',
          description: '',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Paul',
          nom: 'Trousseau',
          surnom: 'Oh Paul!',
          poste: 'Première ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/eMKXkOh.jpg',
          description: '',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Jacques-Nicolas',
          nom: 'Ojea',
          surnom: 'Jack',
          poste: 'Centre',
          team2017: false,
          team2016: true,
          src: 'https://i.imgur.com/7ovSdxz.jpg',
          description: '',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Ramy',
          nom: 'Atassi',
          surnom: '',
          poste: 'Première ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/dA32oCL.jpg',
          description: '',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Yann',
          nom: 'Sambarino',
          surnom: 'Samba',
          poste: 'Première ligne',
          team2017: false,
          team2016: true,
          src: 'https://i.imgur.com/cXsbsNT.jpg',
          description: '',
          titres: ['Champion Top14 2012'],
          n_titres: 1
        },
        {
          prenom: 'Baptiste',
          nom: 'Benet',
          surnom: 'Bapt\'Beun',
          poste: 'Deuxième ligne',
          team2017: false,
          team2016: true,
          src: 'https://i.imgur.com/W4Hl8za.jpg',
          description: 'Hériter de la grande lignée des Directeurs Artistiques des VRP. Il a d\'ailleurs suivi son père spirituel à San Francisco, au plus grand malheur des PEER nanas. On cherche encore un sauteur en touche à la hauteur de son talent.',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Robin',
          nom: 'Oval',
          surnom: '',
          poste: 'Première ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/FrXAsRf.jpg',
          description: '',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Louis',
          nom: 'De Maistre',
          surnom: '',
          poste: 'Demi de mêlée',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/PqJ80Uz.jpg',
          description: '',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Jérémy',
          nom: 'Lefebvre',
          surnom: 'Jeggy',
          poste: 'Ailier',
          team2017: false,
          team2016: true,
          src: 'https://i.imgur.com/mBav1ER.jpg',
          description: '',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Clément',
          nom: 'Rivron',
          surnom: '',
          poste: 'Troisième ligne',
          team2017: true,
          team2016: true,
          src: 'https://i.imgur.com/7JYgQbF.jpg',
          description: '',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Louis',
          nom: 'Fuentes',
          surnom: 'Fuentech',
          poste: 'Centre',
          team2017: false,
          team2016: false,
          src: 'https://i.imgur.com/YjNNHCl.jpg',
          description: 'Avec Fuentes en premier centre, les combinaisons 10-12 se font main-main. L\'avantage, c\'est qu\'il ne distingue pas les gros et les petits, et retourne quiconque vient attaquer sa ligne.',
          titres: '',
          n_titres: 0
        },
        {
          prenom: 'Lucas',
          nom: 'Meyer',
          surnom: 'Jimmy',
          poste: 'Deuxième ligne',
          team2017: false,
          team2016: false,
          src: 'https://i.imgur.com/UoYvFxf.jpg',
          description: 'Lucas, aka Jimmy, a raté l\'occasion de sa vie en jouant avec les VRP et non les Gitans. Toujours au volant de sa caravane et piercing à l\'oreille, surveillez vos poules quand il est dans le coin. Il s\'est cassé la main en tapant la pelouse après un plaquage manqué, rien que pour ça il mérite une place d\'honneur au Panthéon des VRP.',
          titres: '',
          n_titres: 0
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

.text-description {
  text-align: left;
}

</style>
