export class LocalStorageHelper {
  public static setItem(key: string, data: string | [] | { [key: string]: any }): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public static getItem(key: string) {
    const value = localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }

    return null;
  }

  public static clearItem(key: string): void {
    localStorage.setItem(key, "");
  }
}
