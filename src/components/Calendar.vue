<template>
  <v-layout row wrap class="mb-8">
    <v-flex xs12 md6 offset-md3>
      <center>
      <v-date-picker
        v-model="picker"
        :formatted-value.sync="formatted"
        :allowed-dates="allowedDates"
        landscape
        class="hidden-xs-only"
      ></v-date-picker>
      <v-date-picker
        v-model="picker"
        :formatted-value.sync="formatted"
        :allowed-dates="allowedDates"
        class="hidden-sm-and-up"
      ></v-date-picker>
      </center>
    </v-flex>
    <v-flex
      v-for="event in events"
      v-if="event.date === picker"
      :key="event.event"
      xs12 md6 mt-4 offset-md3
    >
      <v-divider dark></v-divider>
      <v-flex xs10 offset-xs1>
        <v-card class="elevation-5 mt-3" width="300px">
          <v-card-text>
            <div class="headline"><b>Quoi?</b> {{ event.event }}</div>
            <span class="grey--text">{{ event.description }}</span><br>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      allowedDates: ['2017-10-14', '2017-11-11', '2017-11-18'],
      events: [
        {date: '2017-10-14', event: 'FFSE J2', type: 'match', description: 'Détails pratiques à venir.'},
        {date: '2017-11-11', event: 'FFSE J3', type: 'match', description: 'Détails pratiques à venir.'},
        {date: '2017-11-18', event: 'PRC-VRP', type: 'fete', description: 'Vieux contre jeunes, une des grandes traditions de l\'équipe.'}
      ],
      picker: null,
      everyOtherDay: function (date) {
        return date.getDay() % 2 === 0
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
