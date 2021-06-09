<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="teal accent-4" text v-bind="attrs" v-on="on">
          Add timeline item
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Add timeline item</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="title"
                  label="Title"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="date"
                  label="Date"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4"> </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="description"
                  label="Description"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-expand-transition>
          <v-alert v-if="error" dense type="error">
            All fields <strong> must </strong> be filled before posting.
          </v-alert>
        </v-expand-transition>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="turnOffDialogWindow">
            Cancel
          </v-btn>
          <v-btn color="blue darken-1" text @click="clickAccept"> Post </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";
import constants from "../constants";

export default {
  data: () => ({
    dialog: false,
    title: null,
    description: null,
    date: null,
    error: false,
  }),
  methods: {
    clickAccept() {
      if (
        this.title !== null &&
        this.description !== null &&
        this.date !== null
      ) {
        this.sendPostRequest();
        this.turnOffDialogWindow();
      } else {
        this.error = true;
      }
    },
    turnOffDialogWindow() {
      (this.title = null), (this.description = null);
      this.date = null;
      this.dialog = false;
      this.error = false;
    },
    sendPostRequest() {
      axios
        .post(constants.TIMELINE_ADD, {
          title: this.title,
          description: this.description,
          date: this.date,
        })
        .then(this.turnOffDialogWindow());
    },
  },
};
</script>
