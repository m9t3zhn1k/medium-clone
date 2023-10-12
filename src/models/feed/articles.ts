import { Article } from "./article";

export interface Articles {
  /**
   * Articles.
   */
  readonly articles: Article[];

  /**
   * Articles count.
   */
  readonly articlesCount: number;
}
