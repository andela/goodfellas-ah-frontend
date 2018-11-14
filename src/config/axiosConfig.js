import axios from 'axios';

const baseURL = 'http://127.0.0.1:4000/api';

export default class API {
  constructor(token) {
    this.updateToken(token);
    this.openRoutes = axios.create({
      baseURL,
    });
  }

  updateToken(token) {
    this.api = axios.create({
      baseURL,
      headers: { Authorization: token },
    });
  }
}
