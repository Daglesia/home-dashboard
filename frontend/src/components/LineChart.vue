<template>
  <v-card class="mt-4 mx-auto" max-width="400">
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="12"
      max-width="calc(100% - 32px)"
    >
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="text-h6 font-weight-light mb-2">Some levels timeline</div>
      <div class="subheading font-weight-light grey--text">
        Sufficient level at around {{value_static[0]}} pg/l.
      </div>
      <v-divider class="my-2"></v-divider>
      <v-icon class="mr-2" small> mdi-clock </v-icon>
      <span class="text-caption grey--text font-weight-light"
        >last measurement 26 minutes ago</span
      >
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";
import constants from "../constants";

export default {
  data: () => ({
    labels: [],
    value: [],
    value_static: [],
  }),
  methods: {
    parseData(response) {
        var labels = [];
        var values = [];
        var values_static = [];
        response.data.levels.forEach(element => {
            labels.push(element.date);
            values.push(element.level);
            values_static.push(response.data.expected_value);
        });
      this.labels = labels;
      this.value = values;
      this.value_static = values_static;
      console.log(this.labels);
      console.log(this.value);
      console.log(this.value_static);
      
    },
  },
  mounted() {
    axios
      .get(constants.LINECHART_E2)
      .then((response) => this.parseData(response));
  },
};
</script>

<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
.mx-auto {
  margin-top: 11.5%;
}
.spark-static {
  position: absolute;
  top: -24px;
  left: 0;
}
</style>
