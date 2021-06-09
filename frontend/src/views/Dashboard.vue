<template>
  <div class="background">
    <v-row>
      <v-col>
    <time-passed />
      </v-col>
    <v-col>
    <timeline />
    </v-col>
          <v-col>
    <time-passed />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Timeline from "../components/Timeline.vue";
import TimePassed from "../components/TimePassed.vue";

export default {
  name: "Dashboard",

  components: {
    TimePassed,
    Timeline,
  },
};
</script>

<style scoped>
.background {
  background-image: url(https://i.redd.it/c3uhsgo1vx541.jpg);
  height: 100%;
  width: 100%;
}
.mx-auto {
  height: auto;
  margin: 5%;
}
</style>