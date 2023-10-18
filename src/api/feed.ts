import axios from "@/api/axios";
import { Articles } from "@/models/feed";

const getFeed = (path: string) => {
  return axios.get<Articles>(path);
};

export default {
  getFeed,
};
