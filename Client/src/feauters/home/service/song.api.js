import axios from "axios";
import { BASEURL } from "../../../api.config";

const api = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
});

export async function getSong({ mood }) {
  try {
    const response = await api.get("/api/songs/get", {
      params: mood ? { mood } : {},
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching song:", error);
    throw error;
  }
}

export async function getAllSong({ mood }) {
  const url = mood ? `/api/songs/getAll?mood=${mood}` : "/api/songs/getAll";

  const response = await api.get(url);

  return response.data;
}
