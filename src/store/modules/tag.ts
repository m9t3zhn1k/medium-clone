import { Tag } from "@/models";
import tagApi from "@/api/tag";

export interface TagState {
  data: Tag[];
  isLoading: boolean;
  error: string | null;
}

export enum TagMutation {
  getTagsStart = "[tag] Get tags start",
  getTagsSuccess = "[tag] Get tags success",
  getTagsFailure = "[tag] Get tags failure",
}

export enum TagAction {
  getTags = "[tag] Get tags",
}

export enum TagGetter {
  data = "[tag] Tags",
  error = "[tag] Error",
  loading = "[tag] Loading",
}

const state: TagState = {
  data: [],
  isLoading: false,
  error: null,
};

const mutations = {
  [TagMutation.getTagsStart](state: TagState): void {
    state.isLoading = true;
    state.data = [];
    state.error = null;
  },
  [TagMutation.getTagsSuccess](state: TagState, data: Tag[]): void {
    state.isLoading = false;
    state.data = data;
    state.error = null;
  },
  [TagMutation.getTagsFailure](state: TagState, error: string): void {
    state.isLoading = false;
    state.data = [];
    state.error = error;
  },
};

const actions = {
  [TagAction.getTags](context: any) {
    context.commit(TagMutation.getTagsStart);

    return new Promise(resolve => {
      tagApi
        .getTags()
        .then(response => {
          context.commit(TagMutation.getTagsSuccess, response.data.tags);
          resolve(response.data.tags);
        })
        .catch(error => context.commit(TagMutation.getTagsFailure, error));
    });
  },
};

const getters = {
  [TagGetter.data]: (state: TagState) => state.data,
  [TagGetter.error]: (state: TagState) => state.error,
  [TagGetter.loading]: (state: TagState) => state.isLoading,
};

export default {
  state,
  mutations,
  getters,
  actions,
};
