import axios from "@/api/axios";
import { TagsResponse } from "@/models";

const getTags = () => {
  return axios.get<TagsResponse>("/tags");
};

export default {
  getTags,
};
