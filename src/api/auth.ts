import axios, { AxiosResponse } from "axios";
import { RegisterParams, LoginParams, AuthResponse, UserUpdateParams, User } from "@/models";

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

const userUpdateSettings = (params: UserUpdateParams): Promise<User> =>
  axios
    .put<AuthResponse>("/user", {
      user: params,
    })
    .then(response => response.data.user);

export default {
  register,
  login,
  getUser,
  userUpdateSettings,
};
