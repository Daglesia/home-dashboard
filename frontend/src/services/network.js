import axios from "axios";

export default class Api {
  async getTimePassed() {
    axios.get("https://api.github.com/users/mapbox").then((response) => {
      console.log("should be", response.status);
      return response.status;
    });
  }
}
