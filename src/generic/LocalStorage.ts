export abstract class LocalStorage {
  static set(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  static get(key: string) {
    localStorage.getItem(key);
  }

  static remove(key: string) {
    localStorage.removeItem(key);
  }

  static exists(key: string) {
    return !!localStorage.getItem(key);
  }
}
