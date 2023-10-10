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

const getUser = () => {
  return axios.get<AuthResponse>("/user");
};

export default {
  register,
  login,
  getUser,
};
