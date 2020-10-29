import axios from "axios";
import { access_token, getCookies } from "../utils/utils";
import { API_URL } from "../constants";

class ApiService {
  constructor() {
    const client = axios.create({
      baseURL: API_URL,
      timeout: 20000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    this.client = client;
  }

  getHeader() {
    const headers = {
      Authorization: "Bearer " + getCookies(access_token),
    };
    return headers;
  }

  get(path) {
    return this.client
      .get(path, {
        headers: this.getHeader(),
      })
      .then((response) => response.data);
  }

  getParams(path, params) {
    return this.client
      .get(path, {
        headers: this.getHeader(),
        params: params,
      })
      .then((response) => response.data);
  }

  post(path, payload) {
    return this.client
      .post(path, payload, {
        headers: this.getHeader(),
      })
      .then((response) => response.data);
  }

  postWithoutHeader(path, payload) {
    return this.client.post(path, payload).then((response) => response.data);
  }

  patch(path, payload) {
    return this.client
      .patch(path, payload, {
        headers: this.getHeader(),
      })
      .then((response) => response.data);
  }

  patchBody(path, payload) {
    return this.client
      .patch(path, payload, {
        headers: this.getHeader(),
      })
      .then((response) => response.data);
  }

  delete(path) {
    return this.client
      .delete(path, {
        headers: this.getHeader(),
      })
      .then((response) => response.data);
  }
}

export default new ApiService();
