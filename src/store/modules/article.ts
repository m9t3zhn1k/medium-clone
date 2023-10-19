import { Article, ArticleGetParams } from "@/models";
import articleApi from "@/api/article";

export interface ArticleState {
  /**
   * Article.
   */
  article: Article | null;

  /**
   * Whether the article is fetching.
   */
  isLoading: boolean;

  /**
   * Error.
   */
  error: string | null;
}

export enum ArticleGetter {
  Article = "[article] Article",
  Loading = "[article] Loading",
  Error = "[article] Error",
}

export enum ArticleMutation {
  GetArticleStart = "[article] Get article start",
  GetArticleSuccess = "[article] Get article success",
  GetArticleFailure = "[article] Get article failure",
}

export enum ArticleAction {
  GetArticle = "[article] Get article",
}

const state: ArticleState = {
  article: null,
  isLoading: false,
  error: null,
};

const mutations = {
  [ArticleMutation.GetArticleStart](state: ArticleState): void {
    state.isLoading = true;
    state.article = null;
    state.error = null;
  },
  [ArticleMutation.GetArticleSuccess](state: ArticleState, article: Article): void {
    state.isLoading = false;
    state.article = article;
    state.error = null;
  },
  [ArticleMutation.GetArticleFailure](state: ArticleState, error: string): void {
    state.isLoading = false;
    state.article = null;
    state.error = error;
  },
};

const actions = {
  [ArticleAction.GetArticle](context: any, params: ArticleGetParams) {
    context.commit(ArticleMutation.GetArticleStart);

    return new Promise(resolve => {
      articleApi
        .getArticle(params)
        .then(article => {
          context.commit(ArticleMutation.GetArticleSuccess, article);
          resolve(article);
        })
        .catch(error => {
          context.commit(ArticleMutation.GetArticleFailure, error);
        });
    });
  },
};

const getters = {
  [ArticleGetter.Article]: (state: ArticleState) => state.article,
  [ArticleGetter.Loading]: (state: ArticleState) => state.isLoading,
  [ArticleGetter.Error]: (state: ArticleState) => state.error,
};

export default {
  state,
  getters,
  mutations,
  actions,
};
