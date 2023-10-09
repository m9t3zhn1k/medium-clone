import authApi from "@/api/auth";
import { LocalStorageHelper } from "@/helpers";
import { LocalStorageKey } from "@/enums";
import { RegisterParams, LoginParams, User } from "@/models";

export interface AuthState {
  isSubmitting: boolean;
  user: User | null;
  validationErrors: Record<string, string[]>;
}

export enum AuthMutation {
  registerStart = "[auth] registerStart",
  registerSuccess = "[auth] registerSuccess",
  registerFailure = "[auth] registerFailure",
  loginStart = "[auth] loginStart",
  loginSuccess = "[auth] loginSuccess",
  loginFailure = "[auth] loginFailure",
}

export enum AuthAction {
  register = "[auth] register",
  login = "[auth] login",
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
    state.validationErrors = {};
    state.user = user;
  },
  [AuthMutation.registerFailure](state: AuthState, errors: Record<string, string[]>): void {
    state.isSubmitting = false;
    state.validationErrors = errors;
    state.user = null;
  },
  [AuthMutation.loginStart](state: AuthState): void {
    state.isSubmitting = true;
    state.validationErrors = {};
    state.user = null;
  },
  [AuthMutation.loginSuccess](state: AuthState, user: User): void {
    state.isSubmitting = false;
    state.validationErrors = {};
    state.user = user;
  },
  [AuthMutation.loginFailure](state: AuthState, errors: Record<string, string[]>): void {
    state.isSubmitting = false;
    state.validationErrors = errors;
    state.user = null;
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
          LocalStorageHelper.setItem(LocalStorageKey.Token, response.data.user.token);
          resolve(response.data.user);
        })
        .catch(result => {
          context.commit(AuthMutation.registerFailure, result.response.data.errors);
          LocalStorageHelper.clearItem(LocalStorageKey.Token);
        });
    });
  },
  [AuthAction.login](context: any, params: LoginParams) {
    context.commit(AuthMutation.loginStart);

    return new Promise(resolve => {
      authApi
        .login(params)
        .then(response => {
          context.commit(AuthMutation.loginSuccess, response.data.user);
          LocalStorageHelper.setItem(LocalStorageKey.Token, response.data.user.token);
          resolve(response.data.user);
        })
        .catch(result => {
          context.commit(AuthMutation.loginFailure, result.response.data.errors);
          LocalStorageHelper.clearItem(LocalStorageKey.Token);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
