import axios, { Method } from "axios";
import { getLocalStorage } from "./helpers";
import { config } from "./config";

export const apiRequest = async (
  method: Method,
  url: string,
  data: any = {},
  authorized: boolean = false,
  params: any = {}
): Promise<any> => {
  return await axios.request({
    data,
    headers: {
      Authorization: authorized ? "Bearer " + getLocalStorage("token") : "",
      "Content-Type": "application/json"
    },
    method,
    params,
    url: `${config.BASE_API_URL}${url}`
  });
};
