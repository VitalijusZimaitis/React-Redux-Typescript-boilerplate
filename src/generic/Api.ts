import axios from "axios";
import { LocalStorage } from "./LocalStorage";
import { config } from "../config";

export class Api {
  protected request: {} = {};
  protected headers: {} = {
    "Content-Type": "application/json"
  };

  public constructor(url: string) {
    this.request = {
      ...this.request,
      url: `${config.BASE_API_URL}${url}`
    };
  }

  public data = (data: any = {}) => {
    this.request = {
      ...this.request,
      data
    };

    return this;
  };

  public authorized = (auth?: boolean) => {
    if (auth) {
      this.request = {
        ...this.request,
        headers: {
          ...this.headers,
          Authorization: "Bearer " + LocalStorage.get("token")
        }
      };
    }

    return this;
  };

  public get = async (): Promise<any> => {
    return await axios.request({
      ...this.request,
      method: "GET"
    });
  };

  public post = async (): Promise<any> => {
    return await axios.request({
      ...this.request,
      method: "POST"
    });
  };
}
