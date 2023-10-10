import axios from "axios";
import { LocalStorageHelper } from "@/helpers";
import { LocalStorageKey } from "@/enums";

axios.defaults.baseURL = "https://conduit.productionready.io/api";

axios.interceptors.request.use(config => {
  const token = LocalStorageHelper.getItem(LocalStorageKey.Token);
  const authorizationToken = token ? `Token ${token}` : "";
  config.headers.Authorization = authorizationToken;
  return config;
});

export default axios;
