import axios from 'axios';

const baseURL = `${process.env.REACT_APP_API_URL}/api`;

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
