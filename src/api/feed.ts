import axios from "@/api/axios";
import { Articles } from "@/models/feed";

const getGlobalFeed = (path: string) => {
  return axios.get<Articles>(path);
};

export default {
  getGlobalFeed,
};
