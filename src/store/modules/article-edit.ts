import { Article, ArticleUpdateParams, ArticleGetParams } from "@/models";
import articleApi from "@/api/article";

export interface ArticleEditState {
  /**
   * Article.
   */
  article: Article | null;

  /**
   * Whether the article is fetching.
   */
  isLoading: boolean;

  /**
   * Whether the article form is submitted.
   */
  isSubmitted: boolean;

  /**
   * Error.
   */
  errors: Record<string, string[]>;
}

export enum ArticleEditGetter {
  Article = "[article-edit] Article",
  Loading = "[article-edit] Loading",
  Submit = "[article-edit] Submitted",
  Error = "[article-edit] Error",
}

export enum ArticleEditMutation {
  GetArticleStart = "[article-edit] Get article start",
  GetArticleSuccess = "[article-edit] Get article success",
  GetArticleFailure = "[article-edit] Get article failure",
  UpdateArticleStart = "[article-edit] Update article start",
  UpdateArticleSuccess = "[article-edit] Update article success",
  UpdateArticleFailure = "[article-edit] Update article failure",
}

export enum ArticleEditAction {
  GetArticle = "[article-edit] Get article",
  UpdateArticle = "[article-edit] Update article",
}

const state: ArticleEditState = {
  article: null,
  isLoading: false,
  isSubmitted: false,
  errors: {},
};

const mutations = {
  [ArticleEditMutation.GetArticleStart](state: ArticleEditState): void {
    state.isLoading = true;
    state.article = null;
    state.errors = {};
  },
  [ArticleEditMutation.GetArticleSuccess](state: ArticleEditState, article: Article): void {
    state.isLoading = false;
    state.article = article;
    state.errors = {};
  },
  [ArticleEditMutation.GetArticleFailure](
    state: ArticleEditState,
    errors: Record<string, string[]>
  ): void {
    state.isLoading = false;
    state.article = null;
    state.errors = errors;
  },
  [ArticleEditMutation.UpdateArticleStart](state: ArticleEditState): void {
    state.isSubmitted = true;
    state.errors = {};
  },
  [ArticleEditMutation.UpdateArticleSuccess](state: ArticleEditState): void {
    state.isSubmitted = false;
    state.errors = {};
  },
  [ArticleEditMutation.UpdateArticleFailure](
    state: ArticleEditState,
    errors: Record<string, string[]>
  ): void {
    state.isSubmitted = false;
    state.errors = errors;
  },
};

const actions = {
  [ArticleEditAction.GetArticle](context: any, params: ArticleGetParams) {
    context.commit(ArticleEditMutation.GetArticleStart);

    return new Promise(resolve => {
      articleApi
        .getArticle(params)
        .then(article => {
          context.commit(ArticleEditMutation.GetArticleSuccess, article);
          resolve(article);
        })
        .catch(errors => {
          context.commit(ArticleEditMutation.GetArticleFailure, errors);
        });
    });
  },
  [ArticleEditAction.UpdateArticle](context: any, params: ArticleUpdateParams) {
    context.commit(ArticleEditMutation.UpdateArticleStart);

    return new Promise(resolve => {
      articleApi
        .updateArticle(params)
        .then(article => {
          context.commit(ArticleEditMutation.UpdateArticleSuccess, article);
          resolve(article);
        })
        .catch(errors => {
          context.commit(ArticleEditMutation.UpdateArticleFailure, errors);
        });
    });
  },
};

const getters = {
  [ArticleEditGetter.Article]: (state: ArticleEditState) => state.article,
  [ArticleEditGetter.Loading]: (state: ArticleEditState) => state.isLoading,
  [ArticleEditGetter.Submit]: (state: ArticleEditState) => state.isSubmitted,
  [ArticleEditGetter.Error]: (state: ArticleEditState) => state.errors,
};

export default {
  state,
  getters,
  mutations,
  actions,
};
