<template>
  <div class="Ranking">
  	<v-flex xs12 sm8 offset-sm2>
  	<v-data-table
        v-bind:headers="headers"
        :items="items"
        hide-actions
        class="elevation-4"
      >
      <template slot="items" scope="props">
        <td class="text-xs-left"><v-list-tile-avatar avatar class="ma-1"><img :src="props.item.src" /></v-list-tile-avatar></td>
        <td class="text-xs-right">{{ props.item.nom }}</td>
        <td class="text-xs-right">2</td>
        <td class="text-xs-right">{{ props.item.nom }}</td>
        <td class="text-xs-right">{{ props.item.poste }}</td>
        <td class="text-xs-right">{{ props.item.capes }}</td>
        <td class="text-xs-right">{{ props.item.points }}</td>
        <td class="text-xs-right">{{ props.item.essais }}</td>
      </template>
    </v-data-table>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'Ranking',
  data () {
    return {
      headers: [
        {
          align: 'left',
          sortable: false,
          value: 'nom'
        },
        { text: 'J', value: 'prenom' },
        { text: 'Nom', value: 'nom' },
        { text: 'Poste', value: 'poste' },
        { text: 'Capes', value: 'capes' },
        { text: 'Points', value: 'points' },
        { text: 'Essais', value: 'essais' }
      ],
      items: [
        {
          prenom: 'Thibaud',
          nom: 'Allain',
          poste: 'Demi d\'ouverture',
          src: 'https://i.imgur.com/YMVCvAw.jpg',
          capes: 50,
          points: 130,
          essais: 5
        },
        {
          prenom: 'Manu',
          nom: 'Berthomieu',
          poste: 'Troisième ligne',
          src: 'https://i.imgur.com/Gof6ph8.jpg',
          capes: 40,
          points: 40,
          essais: 8
        },
        {
          prenom: 'Victor',
          nom: 'Bourrier',
          poste: 'Deuxième ligne',
          src: 'https://i.imgur.com/dYONmw9.jpg',
          capes: 30,
          points: 30,
          essais: 2
        },
        {
          prenom: 'Louis',
          nom: 'Lhermitte',
          poste: 'Deuxième ligne',
          src: 'https://i.imgur.com/jaRqlJU.jpg',
          capes: 3,
          points: 5,
          essais: 1
        },
        {
          prenom: 'Sébastien',
          nom: 'Malaussène',
          poste: 'Talonneur',
          src: 'https://i.imgur.com/XOOTdjK.jpg',
          capes: 23,
          points: 20,
          essais: 4
        },
        {
          prenom: 'Yann',
          nom: 'Sambarino',
          poste: 'Première ligne',
          src: 'https://i.imgur.com/cXsbsNT.jpg',
          capes: 37,
          points: 20,
          essais: 4
        },
        {
          prenom: 'Etienne',
          nom: 'Jouan',
          poste: 'Deuxième ligne',
          src: 'https://i.imgur.com/DpjVwse.jpg',
          capes: 17,
          points: 5,
          essais: 1
        },
        {
          prenom: 'Victor',
          nom: 'Challier',
          poste: 'Troisième ligne',
          src: 'https://i.imgur.com/kYCdZNv.jpg',
          capes: 9,
          points: 15,
          essais: 3
        },
        {
          prenom: 'Greg',
          nom: 'Degrange',
          poste: 'Demi de mêlée',
          src: 'https://i.imgur.com/u2997nQ.jpg',
          capes: 63,
          points: 40,
          essais: 8
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
