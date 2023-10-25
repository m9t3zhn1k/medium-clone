import { Article } from "@/models";

export interface Articles {
  /**
   * Articles.
   */
  articles: Article[];

  /**
   * Articles count.
   */
  readonly articlesCount: number;
}
