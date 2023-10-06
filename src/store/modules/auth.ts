import authApi from "@/api/auth";
import { LocalStorageHelper } from "@/helpers";
import { RegisterParams, User } from "@/models";

export interface AuthState {
  isSubmitting: boolean;
  user: User | null;
  validationErrors: string[];
}

const state: AuthState = {
  isSubmitting: false,
  user: null,
  validationErrors: [],
};

const mutations = {
  registerStart(state: AuthState): void {
    state.isSubmitting = true;
    state.validationErrors = [];
    state.user = null;
  },
  registerSuccess(state: AuthState, user: User): void {
    state.isSubmitting = false;
    state.user = user;
  },
  registerFailure(state: AuthState, errors: string[]): void {
    state.isSubmitting = false;
    state.validationErrors = errors;
  },
};

const actions = {
  register(context: any, params: RegisterParams) {
    context.commit("registerStart");

    return new Promise(resolve => {
      authApi
        .register(params)
        .then(response => {
          context.commit("registerSuccess", response.data.user);
          LocalStorageHelper.setItem("token", response.data.user.token);
          resolve(response.data.user);
        })
        .catch(result => {
          context.commit("registerFailure", result.response.data.errors);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
