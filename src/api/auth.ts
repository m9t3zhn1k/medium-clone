import axios from "@/api/axios";
import { RegisterParams, RegisterResponse } from "@/models";

const register = (params: RegisterParams) => {
  return axios.post<RegisterResponse>("/users", {
    user: params,
  });
};

export default {
  register,
};
