import axios from "axios";

export const api = axios.create({
  baseURL: "https://klava-server.herokuapp.com/api/v1",
  headers: {
    'Content-Type': 'application/json'
  }
})

