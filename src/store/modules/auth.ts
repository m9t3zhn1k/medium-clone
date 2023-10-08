import authApi from "@/api/auth";
import { LocalStorageHelper } from "@/helpers";
import { RegisterParams, User } from "@/models";

export interface AuthState {
  isSubmitting: boolean;
  user: User | null;
  validationErrors: Record<string, string[]>;
}

export enum AuthMutation {
  registerStart = "[auth] registerStart",
  registerSuccess = "[auth] registerSuccess",
  registerFailure = "[auth] registerFailure",
}

export enum AuthAction {
  register = "[auth] register",
}

const state: AuthState = {
  isSubmitting: false,
  user: null,
  validationErrors: {},
};

const mutations = {
  [AuthMutation.registerStart](state: AuthState): void {
    state.isSubmitting = true;
    state.validationErrors = {};
    state.user = null;
  },
  [AuthMutation.registerSuccess](state: AuthState, user: User): void {
    state.isSubmitting = false;
    state.user = user;
  },
  [AuthMutation.registerFailure](state: AuthState, errors: Record<string, string[]>): void {
    state.isSubmitting = false;
    state.validationErrors = errors;
  },
};

const actions = {
  [AuthAction.register](context: any, params: RegisterParams) {
    context.commit(AuthMutation.registerStart);

    return new Promise(resolve => {
      authApi
        .register(params)
        .then(response => {
          context.commit(AuthMutation.registerSuccess, response.data.user);
          LocalStorageHelper.setItem("token", response.data.user.token);
          resolve(response.data.user);
        })
        .catch(result => {
          context.commit(AuthMutation.registerFailure, result.response.data.errors);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
