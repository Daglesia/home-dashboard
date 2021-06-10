<template>
  <v-card class="mx-auto" max-width="550">
    <v-card dark flat> </v-card>
    <v-card-text class="py-0">
      <v-timeline align-top dense>
        <v-timeline-item
          v-for="event in cachedResponse"
          :key="event.id"
          :color="alternateColor(event.id)"
          small
        >
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>{{ event.date }}</strong>
            </v-col>
            <v-col>
              <strong>{{ event.title }}</strong>
              <div class="text-caption">
                {{ event.description }}
              </div>
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
      <br />
      <timeline-form />
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";
import constants from "../constants";
import TimelineForm from "./TimelineForm.vue";

export default {
  components: { TimelineForm },
  data: () => ({
    cachedResponse: null,
  }),
  methods: {
    makeTimeline(response) {
      this.cachedResponse = response.data.events.reverse();
    },
    alternateColor(id) {
      if (id % 2) {
        return "teal lighten-3";
      } else {
        return "pink";
      }
    },
  },
  mounted() {
    axios
      .get(constants.TIMELINE)
      .then((response) => this.makeTimeline(response));
  },
};
</script>
