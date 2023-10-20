import { Article, ArticleGetParams, ArticleDeleteParams, ArticleCreateParams } from "@/models";
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
  errors: Record<string, string[]>;
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
  CreateArticleStart = "[article] Create article start",
  CreateArticleSuccess = "[article] Create article success",
  CreateArticleFailure = "[article] Create article failure",
}

export enum ArticleAction {
  GetArticle = "[article] Get article",
  DeleteArticle = "[article] Delete article",
  CreateArticle = "[article] Create article",
}

const state: ArticleState = {
  article: null,
  isLoading: false,
  errors: {},
};

const mutations = {
  [ArticleMutation.GetArticleStart](state: ArticleState): void {
    state.isLoading = true;
    state.article = null;
    state.errors = {};
  },
  [ArticleMutation.GetArticleSuccess](state: ArticleState, article: Article): void {
    state.isLoading = false;
    state.article = article;
    state.errors = {};
  },
  [ArticleMutation.GetArticleFailure](state: ArticleState, errors: Record<string, string[]>): void {
    state.isLoading = false;
    state.article = null;
    state.errors = errors;
  },
  [ArticleMutation.DeleteArticleStart](state: ArticleState): void {
    state.errors = {};
  },
  [ArticleMutation.DeleteArticleSuccess](state: ArticleState): void {
    state.article = null;
    state.errors = {};
  },
  [ArticleMutation.DeleteArticleFailure](
    state: ArticleState,
    errors: Record<string, string[]>
  ): void {
    state.article = null;
    state.errors = errors;
  },
  [ArticleMutation.CreateArticleStart](state: ArticleState): void {
    state.isLoading = true;
    state.errors = {};
  },
  [ArticleMutation.CreateArticleSuccess](state: ArticleState): void {
    state.isLoading = false;
    state.errors = {};
  },
  [ArticleMutation.CreateArticleFailure](
    state: ArticleState,
    errors: Record<string, string[]>
  ): void {
    state.isLoading = false;
    state.errors = errors;
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
  [ArticleAction.CreateArticle](context: any, params: ArticleCreateParams) {
    context.commit(ArticleMutation.CreateArticleStart);

    return new Promise(resolve => {
      articleApi
        .createArticle(params)
        .then(response => {
          context.commit(ArticleMutation.CreateArticleSuccess);
          resolve(response);
        })
        .catch(error => {
          context.commit(ArticleMutation.CreateArticleFailure, error);
        });
    });
  },
};

const getters = {
  [ArticleGetter.Article]: (state: ArticleState) => state.article,
  [ArticleGetter.Loading]: (state: ArticleState) => state.isLoading,
  [ArticleGetter.Error]: (state: ArticleState) => state.errors,
};

export default {
  state,
  getters,
  mutations,
  actions,
};
