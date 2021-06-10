<template>
  <v-card class="mx-auto" max-width="344">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">STARTED AT {{ date }}</div>
        <v-list-item-title class="text-h5 mb-1">
          {{ daysSince }} days already
        </v-list-item-title>
        <v-list-item-subtitle
          >That's around {{ monthsSince }} months since you began. Keep it
          up!</v-list-item-subtitle
        >
      </v-list-item-content>

      <v-list-item-avatar tile size="80">
        <v-img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
        ></v-img>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
import axios from "axios";
import constants from "../constants";

export default {
  data: () => ({
    date: null,
    monthsSince: null,
    daysSince: null,
  }),
  methods: {
    parseDate(response) {
      var pastDate = new Date(
        response.data.year,
        response.data.month - 1,
        response.data.day,
        0,
        0,
        0,
        0
      );
      var currentDate = Date.now();

      this.date = `${response.data.day}/${response.data.month}/${response.data.year}`;

      var differenceInDays = Math.floor(
        (currentDate - pastDate) / (1000 * 3600 * 24)
      );

      var differenceInMonths = Math.floor(differenceInDays / 30);

      this.monthsSince = differenceInMonths;
      this.daysSince = differenceInDays;
    },
  },
  mounted() {
    axios
      .get(constants.TIME_SINCE)
      .then((response) => this.parseDate(response));
  },
};
</script>
