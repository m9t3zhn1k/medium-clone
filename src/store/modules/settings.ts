import { AuthMutation } from "@/store/modules/auth";

interface SettingsState {
  isSubmit: boolean;
  errors: Record<string, string[]> | null;
}

export enum SettingsMutation {
  UpdateStart = "[settings] User settings update start",
  UpdateSuccess = "[settings] User settings update success",
  UpdateFailure = "[settings] User settings update failure",
}

export enum SettingsAction {}

export enum SettingsGetter {
  Submit = "[settings] User settings submit",
  Errors = "[settings] User settings errrors",
}

const state: SettingsState = {
  isSubmit: false,
  errors: null,
};

const mutations = {
  [AuthMutation.updateUserStart](state: SettingsState): void {
    state.errors = null;
    state.isSubmit = true;
  },
  [AuthMutation.updateUserSuccess](state: SettingsState): void {
    state.errors = null;
    state.isSubmit = false;
  },
  [AuthMutation.updateUserFailure](state: SettingsState, errors: Record<string, string[]>): void {
    state.errors = errors;
    state.isSubmit = false;
  },
};

const getters = {
  [SettingsGetter.Submit]: (state: SettingsState) => state.isSubmit,
  [SettingsGetter.Errors]: (state: SettingsState) => state.errors,
};

export default {
  state,
  mutations,
  getters,
};
