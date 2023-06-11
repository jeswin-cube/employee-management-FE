import { create } from "apisauce";
import { BASE_URL } from "./constants";
import { ErrorResponse } from "./error";

export const api = create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    "X-ORIGIN-SECRET": "ax3muNnP9scLaZKQF9Cg",
  },
});

export const get = async <T, P extends {} = {}, K extends {} = {}>(url: string, params?: P, additionalHeaders?: K) =>
  await api.get<T, ErrorResponse>(url, params ?? {}, additionalHeaders);
export const post = async <T, D extends any = {}, K extends {} = {}>(url: string, data?: D, additionalHeaders?: K) =>
  await api.post<T, ErrorResponse>(url, data, additionalHeaders);
export const put = async <T, D extends any = {}, K extends {} = {}>(url: string, data?: D, additionalHeaders?: K) =>
  await api.put<T, ErrorResponse>(url, data, additionalHeaders);
export const del = async <T, P extends {} = {}, K extends {} = {}>(url: string, params?: P, additionalHeaders?: K) =>
  await api.delete<T, ErrorResponse>(url, params ?? {}, additionalHeaders);
