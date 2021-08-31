export class StorageService {
  public static getAccessToken() {
    return localStorage.getItem('token');
  }
}
