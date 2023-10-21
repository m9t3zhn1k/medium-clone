import { Article, ArticleCreateParams } from "@/models";
import articleApi from "@/api/article";

export interface ArticleNewState {
  /**
   * Whether the article is submitted.
   */
  isSubmitted: boolean;

  /**
   * Error.
   */
  errors: Record<string, string[]>;
}

export enum ArticleNewGetter {
  Submit = "[article-new] Submit",
  Error = "[article-new] Error",
}

export enum ArticleNewMutation {
  CreateArticleStart = "[article-new] Create article start",
  CreateArticleSuccess = "[article-new] Create article success",
  CreateArticleFailure = "[article-new] Create article failure",
}

export enum ArticleNewAction {
  CreateArticle = "[article-new] Create article",
}

const state: ArticleNewState = {
  isSubmitted: false,
  errors: {},
};

const mutations = {
  [ArticleNewMutation.CreateArticleStart](state: ArticleNewState): void {
    state.isSubmitted = true;
    state.errors = {};
  },
  [ArticleNewMutation.CreateArticleSuccess](state: ArticleNewState): void {
    state.isSubmitted = false;
    state.errors = {};
  },
  [ArticleNewMutation.CreateArticleFailure](
    state: ArticleNewState,
    errors: Record<string, string[]>
  ): void {
    state.isSubmitted = false;
    state.errors = errors;
  },
};

const actions = {
  [ArticleNewAction.CreateArticle](context: any, params: ArticleCreateParams) {
    context.commit(ArticleNewMutation.CreateArticleStart);

    return new Promise(resolve => {
      articleApi
        .createArticle(params)
        .then(response => {
          context.commit(ArticleNewMutation.CreateArticleSuccess);
          resolve(response);
        })
        .catch(response => {
          context.commit(ArticleNewMutation.CreateArticleFailure, response.response.data.errors);
        });
    });
  },
};

const getters = {
  [ArticleNewGetter.Submit]: (state: ArticleNewState) => state.isSubmitted,
  [ArticleNewGetter.Error]: (state: ArticleNewState) => state.errors,
};

export default {
  state,
  getters,
  mutations,
  actions,
};
