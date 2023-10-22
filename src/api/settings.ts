import axios, { AxiosResponse } from "axios";
import { UserUpdateParams, AuthResponse } from "@/models";

const userUpdateSettings = (params: UserUpdateParams): Promise<AxiosResponse<AuthResponse>> =>
  axios.put<AuthResponse>("/user", {
    user: params,
  });

export default {
  userUpdateSettings,
};
