import axios from "@/api/axios";
import {
  Article,
  ArticleDeleteParams,
  ArticleGetParams,
  ArticleCreateParams,
  ArticleResponse,
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

export default {
  getArticle,
  deleteArticle,
  createArticle,
};
