import axios from "@/api/axios";

export interface RegisterParams {
  email: string;
  password: string;
  username: string;
}

const register = (params: RegisterParams) => {
  return axios.post("/users", {
    user: params,
  });
};

export default {
  register,
};
