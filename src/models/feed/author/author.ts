export interface Author {
  /**
   * Username.
   */
  readonly username: string;

  /**
   * Image link.
   */
  readonly image: string;

  /**
   * Whether following the author.
   */
  readonly following: boolean;

  /**
   * Bio.
   */
  readonly bio: null;
}
