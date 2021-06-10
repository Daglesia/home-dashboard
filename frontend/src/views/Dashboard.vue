<template>
  <div class="background">
    <v-row>
      <v-col class="col-left">
        <time-passed />
      </v-col>
      <v-col class="col-middle">
        <timeline />
      </v-col>
      <v-col>
        <line-chart />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LineChart from "../components/LineChart.vue";
import Timeline from "../components/Timeline.vue";
import TimePassed from "../components/TimePassed.vue";

export default {
  name: "Dashboard",

  components: {
    TimePassed,
    Timeline,
    LineChart,
  },
};
</script>

<style scoped>
.background {
  display: flex;
  background-image: url(https://i.redd.it/c3uhsgo1vx541.jpg);
  height: 100%;
  width: 100%;
}
.mx-auto {
  height: auto;
  margin-top: 5%;
}
.col-middle {
  padding-left: 0;
  padding-right: 0;
}
.left {
  padding-right: 0;
}
</style>
