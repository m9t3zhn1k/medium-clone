import { FeedTab } from "@/enums";

export interface HomeState {
  path: string;
  tab: FeedTab;
  tag: string | null;
}

export enum HomeMutation {
  ChangePath = "[home] Change path",
  ChangeFeedTab = "[home] Change feed tab",
  ChangeSelectedTag = "[home] Change selected tag",
}

export enum HomeGetter {
  Path = "[home] Path",
  Tab = "[home] Tab",
  Tag = "[home] Tag",
}

const state: HomeState = {
  path: "/articles",
  tab: FeedTab.Global,
  tag: null,
};

const mutations = {
  [HomeMutation.ChangePath](state: HomeState, path: string): void {
    state.path = path;
  },
  [HomeMutation.ChangeFeedTab](state: HomeState, tab: FeedTab): void {
    state.tab = tab;
  },
  [HomeMutation.ChangeSelectedTag](state: HomeState, tag: string | null): void {
    state.tag = tag;
  },
};

const getters = {
  [HomeGetter.Path]: (state: HomeState) => state.path,
  [HomeGetter.Tab]: (state: HomeState) => state.tab,
  [HomeGetter.Tag]: (state: HomeState) => state.tag,
};

export default {
  state,
  getters,
  mutations,
};
