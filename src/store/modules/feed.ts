import { Articles, Article, ArticleFavoriteParams } from "@/models";
import feedApi from "@/api/feed";
import articleApi from "@/api/article";

export interface FeedState {
  data: Articles | null;
  isLoading: boolean;
  isUpdatingFavoriteStatus: boolean;
  error: string | null;
}

export enum FeedMutation {
  getFeedStart = "[feed] Get feed start",
  getFeedSuccess = "[feed] Get feed success",
  getFeedFailure = "[feed] Get feed failuer",
  changeFavoriteStatusStart = "[feed] Change article favorite status start",
  changeFavoriteStatusSuccess = "[feed] Change article favorite status success",
  changeFavoriteStatusFailure = "[feed] Change article favorite status failure",
}

export enum FeedAction {
  getFeed = "[feed] Get feed data",
  changeArticleFavoriteStatus = "[feed] Change article favorite status",
}

export enum FeedGetter {
  data = "[feed] Articles",
  loading = "[feed] Loading",
  error = "[feed] Error",
  updateStatus = "[feed] Favorite status updating",
}

const state: FeedState = {
  data: null,
  isLoading: false,
  isUpdatingFavoriteStatus: false,
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
  [FeedMutation.changeFavoriteStatusStart](state: FeedState): void {
    state.isUpdatingFavoriteStatus = true;
  },
  [FeedMutation.changeFavoriteStatusSuccess](state: FeedState, article: Article): void {
    state.isUpdatingFavoriteStatus = false;

    if (state.data) {
      state.data.articles = state.data.articles.map(item => {
        if (article.slug === item.slug) {
          return {
            ...item,
            favoritesCount: article.favoritesCount,
            favorited: article.favorited,
          };
        }
        return item;
      });
    }
  },
  [FeedMutation.changeFavoriteStatusFailure](state: FeedState): void {
    state.isUpdatingFavoriteStatus = false;
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
  [FeedAction.changeArticleFavoriteStatus](context: any, params: ArticleFavoriteParams) {
    context.commit(FeedMutation.changeFavoriteStatusStart);

    return new Promise(resolve => {
      const isFavorited = params.isFavorited;

      if (isFavorited) {
        articleApi
          .removeFromFavorites(params)
          .then(article => {
            context.commit(FeedMutation.changeFavoriteStatusSuccess, article);
            resolve(article);
          })
          .catch(() => context.commit(FeedMutation.changeFavoriteStatusFailure));
      } else {
        articleApi
          .addToFavorites(params)
          .then(article => {
            context.commit(FeedMutation.changeFavoriteStatusSuccess, article);
            resolve(article);
          })
          .catch(() => context.commit(FeedMutation.changeFavoriteStatusFailure));
      }
    });
  },
};

const getters = {
  [FeedGetter.data]: (state: FeedState) => state.data,
  [FeedGetter.loading]: (state: FeedState) => state.isLoading,
  [FeedGetter.error]: (state: FeedState) => state.error,
  [FeedGetter.updateStatus]: (state: FeedState) => state.isUpdatingFavoriteStatus,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
