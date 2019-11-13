import axios from "axios";
import { LocalStorage } from "./LocalStorage";
import { AxiosResponse } from "axios";

export class Request<TRequestData = any, TResponse extends {} = {}> {
  protected request: {} = {};
  protected headers: {} = {
    "Content-Type": "application/json"
  };

  constructor(url: string) {
    this.request = {
      ...this.request,
      url: `${process.env.REACT_APP_BASE_API_URL}${url}`
    };
  }

  data = (data: TRequestData | null = {} as TRequestData): Request => {
    this.request = {
      ...this.request,
      data
    };

    return this;
  };

  authorized = (auth?: boolean): Request => {
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

  params = (params: any): Request => {
    this.request = {
      ...this.request,
      params
    };

    return this;
  };

  header = (header: {}): Request => {
    this.request = {
      ...this.request,
      headers: {
        ...this.headers,
        header
      }
    };

    return this;
  };

  get = async (): Promise<AxiosResponse<TResponse>> => {
    return await axios.request({
      ...this.request,
      method: "GET"
    });
  };

  post = async (): Promise<AxiosResponse<TResponse>> => {
    return await axios.request({
      ...this.request,
      method: "POST"
    });
  };
}
