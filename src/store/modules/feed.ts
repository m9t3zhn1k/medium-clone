import { Articles } from "@/models";
import feedApi from "@/api/feed";

export interface FeedState {
  data: Articles | null;
  isLoading: boolean;
  error: string | null;
}

export enum FeedMutation {
  getFeedStart = "[feed] Get feed start",
  getFeedSuccess = "[feed] Get feed success",
  getFeedFailure = "[feed] Get feed failuer",
}

export enum FeedAction {
  getFeed = "[feed] Get feed data",
}

export enum FeedGetter {
  data = "[feed] Articles",
  loading = "[feed] Loading",
  error = "[feed] Error",
}

const state: FeedState = {
  data: null,
  isLoading: false,
  error: null,
};

const mutations = {
  [FeedMutation.getFeedStart](state: FeedState): void {
    state.isLoading = true;
    state.data = null;
    state.error = null;
  },
  [FeedMutation.getFeedSuccess](state: FeedState, data: Articles): void {
    state.isLoading = false;
    state.error = null;
    state.data = data;
  },
  [FeedMutation.getFeedFailure](state: FeedState, error: string): void {
    state.isLoading = false;
    state.error = error;
  },
};

const actions = {
  [FeedAction.getFeed](context: any, params: string) {
    context.commit(FeedMutation.getFeedStart);

    return new Promise(resolve => {
      feedApi
        .getFeed(params)
        .then(response => {
          context.commit(FeedMutation.getFeedSuccess, response.data);
          resolve(response.data);
        })
        .catch(error => {
          context.commit(FeedMutation.getFeedFailure, error);
        });
    });
  },
};

const getters = {
  [FeedGetter.data]: (state: FeedState) => state.data,
  [FeedGetter.loading]: (state: FeedState) => state.isLoading,
  [FeedGetter.error]: (state: FeedState) => state.error,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
