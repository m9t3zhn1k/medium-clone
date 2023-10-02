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
};

export default {
  state,
  mutations,
};
