import authApi, { RegisterParams } from "@/api/auth";

interface AuthState {
  isSubmitting: boolean;
}

const state: AuthState = {
  isSubmitting: false,
};

const mutations = {
  registerStart(state: AuthState) {
    state.isSubmitting = true;
  },
  registerSuccess(state: AuthState) {
    state.isSubmitting = false;
  },
  registerFailure(state: AuthState) {
    state.isSubmitting = false;
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
          resolve(response.data.user);
        })
        .catch(result => {
          context.commit("registerFailure", result.response.data.errors);
          console.log(context);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
