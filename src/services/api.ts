import axios from "axios";

const api = axios.create({
  baseURL: "https://g2authenticator-qa4.copart.com.br/services/",
});

export default api;
