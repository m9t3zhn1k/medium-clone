export interface HomeState {
  path: string;
}

export enum HomeMutation {
  ChangePath = "[home] Change path",
}

export enum HomeGetter {
  Path = "[home] Path",
}

const state: HomeState = {
  path: "/articles",
};

const mutations = {
  [HomeMutation.ChangePath](state: HomeState, path: string): void {
    state.path = path;
  },
};

const getters = {
  [HomeGetter.Path]: (state: HomeState) => state.path,
};

export default {
  state,
  getters,
  mutations,
};
