import authApi from "@/api/auth";
import { LocalStorageHelper } from "@/helpers";
import { LocalStorageKey } from "@/enums";
import { RegisterParams, LoginParams, User, UserUpdateParams } from "@/models";

export interface AuthState {
  isLoadingUser: boolean;
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
  getUserStart = "[auth] getUserStart",
  getUserSuccess = "[auth] getUserSuccess",
  getUserFailure = "[auth] getUserFailure",
  updateUserStart = "[auth] updateUserStart",
  updateUserSuccess = "[auth] updateUserSuccess",
  updateUserFailure = "[auth] updateUserFailure",
}

export enum AuthAction {
  register = "[auth] register",
  login = "[auth] login",
  getUser = "[auth] getUser",
  update = "[auth] User settings update",
}

export enum AuthGetter {
  User = "[auth] user",
}

const state: AuthState = {
  isLoadingUser: false,
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
  [AuthMutation.getUserStart](state: AuthState): void {
    state.isLoadingUser = true;
  },
  [AuthMutation.getUserSuccess](state: AuthState, user: User): void {
    state.isLoadingUser = false;
    state.user = user;
  },
  [AuthMutation.getUserFailure](state: AuthState): void {
    state.isLoadingUser = false;
    state.user = null;
  },
  [AuthMutation.updateUserStart](state: AuthState): void {
    return;
  },
  [AuthMutation.updateUserSuccess](state: AuthState, user: User): void {
    state.user = user;
  },
  [AuthMutation.updateUserFailure](state: AuthState): void {
    return;
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
  [AuthAction.getUser](context: any) {
    context.commit(AuthMutation.getUserStart);

    return new Promise(resolve => {
      authApi
        .getUser()
        .then(response => {
          context.commit(AuthMutation.getUserSuccess, response.data.user);
          resolve(response.data.user);
        })
        .catch(() => {
          context.commit(AuthMutation.getUserFailure);
        });
    });
  },
  [AuthAction.update](context: any, params: UserUpdateParams) {
    context.commit(AuthMutation.updateUserStart);

    return new Promise(resolve => {
      authApi
        .userUpdateSettings(params)
        .then(response => {
          context.commit(AuthMutation.updateUserSuccess);
          resolve(response.data.user);
        })
        .catch(errors => context.commit(AuthMutation.updateUserFailure, errors));
    });
  },
};

const getters = {
  [AuthGetter.User]: (state: AuthState) => state.user,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
