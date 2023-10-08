import axios from "@/api/axios";
import { RegisterParams, LoginParams, AuthResponse } from "@/models";

const register = (params: RegisterParams) => {
  return axios.post<AuthResponse>("/users", {
    user: params,
  });
};

const login = (params: LoginParams) => {
  return axios.post<AuthResponse>("/users/login", {
    user: params,
  });
};

export default {
  register,
  login,
};
