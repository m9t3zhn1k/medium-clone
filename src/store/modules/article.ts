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
}

export enum ArticleAction {
  GetArticle = "[article] Get article",
  DeleteArticle = "[article] Delete article",
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
        .catch(errors => {
          context.commit(ArticleMutation.GetArticleFailure, errors);
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
        .catch(response => {
          context.commit(ArticleMutation.DeleteArticleFailure, response.response.data.errors);
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
