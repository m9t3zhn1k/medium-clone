import axios from "@/api/axios";
import {
  Article,
  ArticleDeleteParams,
  ArticleGetParams,
  ArticleCreateParams,
  ArticleUpdateParams,
  ArticleResponse,
  ArticleFavoriteParams,
} from "@/models";
import { AxiosResponse } from "axios";

const getArticle = (params: ArticleGetParams): Promise<Article> =>
  axios.get<ArticleResponse>(`/articles/${params.slug}`).then(response => response.data.article);

const deleteArticle = (params: ArticleDeleteParams): Promise<AxiosResponse<void>> =>
  axios.delete<void>(`/articles/${params.slug}`);

const createArticle = (params: ArticleCreateParams): Promise<Article> =>
  axios
    .post<ArticleResponse>(`/articles`, { article: params })
    .then(response => response.data.article);

const updateArticle = (params: ArticleUpdateParams): Promise<Article> =>
  axios
    .put<ArticleResponse>(`/articles/${params.slug}`, { article: params.data })
    .then(response => response.data.article);

const addToFavorites = (params: ArticleFavoriteParams): Promise<Article> =>
  axios
    .post<ArticleResponse>(`/articles/${params.slug}/favorite`)
    .then(response => response.data.article);

const removeFromFavorites = (params: ArticleFavoriteParams): Promise<Article> =>
  axios
    .delete<ArticleResponse>(`/articles/${params.slug}/favorite`)
    .then(response => response.data.article);

export default {
  getArticle,
  deleteArticle,
  createArticle,
  updateArticle,
  addToFavorites,
  removeFromFavorites,
};
