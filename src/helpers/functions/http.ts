import axios, { Method, AxiosResponse } from "axios";

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

/**
 * Calls the server and show error/success notification
 * @param method API call method
 * @param url API call url
 * @param doneCallback what to do with the response
 * @param payload API call payload
 */
export const makeServerCallAsync = async <T = unknown, R = unknown>(
  method: Method,
  url: string,
  payload?: T
): Promise<AxiosResponse<R>> => {
  const result = await http.request({
    method,
    url,
    data: payload,
  });

  return result;
};
