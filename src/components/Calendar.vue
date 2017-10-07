<template>
  <v-layout row wrap class="mb-8">
    <v-flex md12 lg4 offset-lg2>
      <v-date-picker
        v-model="picker"
        :date-format="date => new Date(date).toDateString()"
        :formatted-value.sync="formatted"
        :allowed-dates="allowedDates"
      ></v-date-picker>
    </v-flex>
    <v-flex
      v-for="event in events"
      v-if="event.date === picker"
      :key="event.event"
      md12 lg4
    >
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline"><b>Quoi?</b> {{ event.event }}</div>
      	    <span class="grey--text">{{ event.event }}</span><br>
      	  </div>
        </v-card-title>
      </v-card>
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
        {date: '2017-10-14', event: 'FFSE J2', type: 'match'},
        {date: '2017-11-11', event: 'FFSE J3', type: 'match'},
        {date: '2017-11-18', event: 'PRC-VRP', type: 'fete'}
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
