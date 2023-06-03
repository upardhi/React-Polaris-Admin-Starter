import axios from "axios";
import { AxiosError } from "axios";
import { APP_CONSTANTS } from "constants/AppConstants";
import { readToken } from "../services/localStorage.service";
import { ApiError } from "./ApiError";
export const baseURL = APP_CONSTANTS.base_url;
export const httpApi = axios.create({
  baseURL: baseURL,
});

httpApi.interceptors.request.use((config: any) => {
  if (
    config.url == "auth/token/" ||
    config.url == "users/google/" ||
    (config && config.url && config.url.includes("authorize_callback/"))
  ) {
    config.headers = {
      ...config.headers,
    };
  } else {
    config.headers = {
      ...config.headers,
      Authorization: `JWT ${readToken()}`,
    };
  }

  return config;
});

httpApi.interceptors.response.use(undefined, (error: any) => {
  if (
    error?.response?.status == 401 &&
    window.location.pathname != "/auth/login"
  ) {
    window.location.href = "/logout";
  }
  if (error?.response?.status == 404) {
    window.location.href = "/404";
  }
  throw new ApiError<ApiErrorData>(
    error && error.response?.data["message_description"]
      ? error.response?.data["message_description"]
      : error.message
  );
});

export interface ApiErrorData {
  message: string;
}
