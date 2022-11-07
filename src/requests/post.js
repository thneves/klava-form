import axios from "axios";
import { config } from "../utils/constants";

export const api = axios.create({
  baseURL: config.API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

