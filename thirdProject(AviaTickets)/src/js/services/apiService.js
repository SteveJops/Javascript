import axios from "axios";
import config from "../config/apiConfig";

/**
 * /contries - array of countries
 * /cities - array of cities
 * /prices/cheap - array
 */
class Api {
  constructor(config) {
    this.url = config.url;
  }
  async countries() {
    try {
      const response = await axios.get(`${this.url}/contries`);
      console.log(response);
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }

  async cities() {
    try {
      const response = await axios.get(`${this.url}/cities`);
      console.log(response);
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }

  prices(params) {}
}

const api = new Api(config);

export default api;
