import {MutationFunction, MutationKey, useMutation as libUseMutation} from "react-query";
import {UseMutationOptions} from "react-query/types/react/types";
import {ErrorResponse} from "./error";


export const useMutation = <T, K>(
    mutationKey: MutationKey,
    mutationFn: MutationFunction<T, K>,
    options?: Omit<UseMutationOptions<T, ErrorResponse, K>, "mutationKey" | "mutationFn">,
) => {
    return libUseMutation<T, ErrorResponse, K>(mutationKey, mutationFn, options);
};
