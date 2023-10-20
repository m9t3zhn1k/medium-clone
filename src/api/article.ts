import axios from "@/api/axios";
import { Article, ArticleDeleteParams, ArticleGetParams, ArticleGetResponse } from "@/models";
import { AxiosResponse } from "axios";

const getArticle = (params: ArticleGetParams): Promise<Article> =>
  axios.get<ArticleGetResponse>(`/articles/${params.slug}`).then(response => response.data.article);

const deleteArticle = (params: ArticleDeleteParams): Promise<AxiosResponse<void>> =>
  axios.delete<void>(`/articles/${params.slug}`);

export default {
  getArticle,
  deleteArticle,
};
