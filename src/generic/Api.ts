import axios, { Method } from "axios";
import { LocalStorage } from "./LocalStorage";
import { config } from "../config";

export class Api {
  static call = async (
    method: Method,
    url: string,
    data: any = {},
    authorized: boolean = false,
    params: any = {}
  ): Promise<any> => {
    return await axios.request({
      data,
      headers: {
        Authorization: authorized ? "Bearer " + LocalStorage.get("token") : "",
        "Content-Type": "application/json"
      },
      method,
      params,
      url: `${config.BASE_API_URL}${url}`
    });
  };
}
