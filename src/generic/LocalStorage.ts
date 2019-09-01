export abstract class LocalStorage {
  public static set(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  public static get(key: string) {
    localStorage.getItem(key);
  }

  public static remove(key: string) {
    localStorage.removeItem(key);
  }

  public static exists(key: string) {
    return !!localStorage.getItem(key);
  }
}
