import { ApiRoutes } from '../constants/api';
import { IApiUserEntity } from '../store/User/types';
import { AxiosService } from './AxiosService';

export class UserService {
  public static async fetchAllUsers() {
    return AxiosService.apiCall<null, Array<IApiUserEntity>>('GET', ApiRoutes.allUsers());
  }
}
