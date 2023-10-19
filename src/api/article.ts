import axios from "@/api/axios";
import { Article, ArticleGetParams, ArticleGetResponse } from "@/models";

const getArticle = (params: ArticleGetParams): Promise<Article> =>
  axios.get<ArticleGetResponse>(`/articles/${params.slug}`).then(response => response.data.article);

export default {
  getArticle,
};
