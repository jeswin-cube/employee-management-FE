import { ApiErrorResponse, ApiResponse } from "apisauce";
import { ApiError, ErrorResponse } from "./error";

export const postProcess = <T>(response: ApiResponse<T, ErrorResponse>) => {
  if (response.ok) {
    return response.data as T;
  }

  throw new ApiError(response as ApiErrorResponse<ErrorResponse>);
};
