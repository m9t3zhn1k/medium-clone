import axios from "@/api/axios";

const getGlobalFeed = (path: string) => {
  return axios.get<any[]>(path);
};

export default {
  getGlobalFeed,
};
