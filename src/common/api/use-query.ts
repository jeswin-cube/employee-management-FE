import { QueryFunction, QueryKey, useQuery as libUseQuery } from "react-query";
import { UseQueryOptions } from "react-query/types/react/types";
import {ErrorResponse} from "./error";


export const useQuery = <T>({
  queryKey,
  queryFn,
  options,
}: {
  queryKey: QueryKey;
  queryFn: QueryFunction<T>;
  options: Omit<UseQueryOptions<T, ErrorResponse, T>, "queryKey" | "queryFn">;
}) => {
  return libUseQuery<T, ErrorResponse>({ queryKey: queryKey, queryFn: queryFn, ...options });
};
