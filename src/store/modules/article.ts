import { Article, ArticleGetParams, ArticleDeleteParams } from "@/models";
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
  DeleteArticleStart = "[article] Delete article start",
  DeleteArticleSuccess = "[article] Delete article success",
  DeleteArticleFailure = "[article] Delete article failure",
}

export enum ArticleAction {
  GetArticle = "[article] Get article",
  DeleteArticle = "[article] Delete article",
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
  [ArticleMutation.DeleteArticleStart](state: ArticleState): void {
    state.error = null;
  },
  [ArticleMutation.DeleteArticleSuccess](state: ArticleState): void {
    state.article = null;
    state.error = null;
  },
  [ArticleMutation.DeleteArticleFailure](state: ArticleState, error: string): void {
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
  [ArticleAction.DeleteArticle](context: any, params: ArticleDeleteParams) {
    context.commit(ArticleMutation.DeleteArticleStart);

    return new Promise(resolve => {
      articleApi
        .deleteArticle(params)
        .then(response => {
          context.commit(ArticleMutation.DeleteArticleSuccess);
          resolve(response);
        })
        .catch(error => {
          context.commit(ArticleMutation.DeleteArticleFailure, error);
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
