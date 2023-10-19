import { Article } from "@/models";

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
