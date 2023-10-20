import { Author } from "./author";

export interface Article {
  /**
   * Title.
   */
  readonly title: string;

  /**
   * Description.
   */
  readonly description: string;

  /**
   * Body.
   */
  readonly body: string;

  /**
   * Author.
   */
  readonly author: Author;

  /**
   * Slug.
   */
  readonly slug: string;

  /**
   * Tag list.
   */
  readonly tagList: string[];

  /**
   * Created at.
   */
  readonly createdAt: string;

  /**
   * Updated at.
   */
  readonly updatedAt: string;

  /**
   * Whether the article is favorite.
   */
  readonly favorited: boolean;

  /**
   * Favorites count.
   */
  readonly favoritesCount: number;
}

export type ArticleGetParams = Pick<Article, "slug">;

export type ArticleDeleteParams = Pick<Article, "slug">;

export interface ArticleGetResponse {
  readonly article: Article;
}
