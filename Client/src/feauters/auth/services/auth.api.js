import axios from "axios";
import { BASEURL } from "../../../api.config";

const api = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
});

export async function register({ username, email, password }) {
  const responce = await api.post("/api/auth/register", {
    username,
    email,
    password,
  });
  return responce.data;
}
export async function login({ username, email, password }) {
  console.log(BASEURL);

  const responce = await api.post("/api/auth/login", {
    username,
    email,
    password,
  });
  return responce.data;
}
export async function getMe() {
  const responce = await api.get("/api/auth/get-me");
  return responce.data;
}
export async function logout() {
  const responce = await api.post("/api/auth/logout");
  return responce.data;
}
