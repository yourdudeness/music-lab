import axios from "axios";

export const API_URL = `http://localhost:3000/api`;

export const apiClient = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json"
  }
});
