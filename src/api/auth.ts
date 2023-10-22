import axios, { AxiosResponse } from "axios";
import { RegisterParams, LoginParams, AuthResponse, UserUpdateParams } from "@/models";

const register = (params: RegisterParams): Promise<AxiosResponse<AuthResponse>> => {
  return axios.post<AuthResponse>("/users", {
    user: params,
  });
};

const login = (params: LoginParams): Promise<AxiosResponse<AuthResponse>> => {
  return axios.post<AuthResponse>("/users/login", {
    user: params,
  });
};

const getUser = (): Promise<AxiosResponse<AuthResponse>> => {
  return axios.get<AuthResponse>("/user");
};

const userUpdateSettings = (params: UserUpdateParams): Promise<AxiosResponse<AuthResponse>> =>
  axios.put<AuthResponse>("/user", {
    user: params,
  });

export default {
  register,
  login,
  getUser,
  userUpdateSettings,
};
