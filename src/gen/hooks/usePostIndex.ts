import client from "@kubb/swagger-client/client";
import { useQuery } from "@tanstack/react-query";
import type { PostIndexMutationRequest, PostIndexMutationResponse } from "../types/PostIndex";
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired } from "@tanstack/react-query";

 type PostIndexClient = typeof client<PostIndexMutationResponse, never, PostIndexMutationRequest>;
type PostIndex = {
    data: PostIndexMutationResponse;
    error: never;
    request: PostIndexMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: PostIndexMutationResponse;
    client: {
        parameters: Partial<Parameters<PostIndexClient>[0]>;
        return: Awaited<ReturnType<PostIndexClient>>;
    };
};
export const postIndexQueryKey = () => [{ url: "/" }] as const;
export type PostIndexQueryKey = ReturnType<typeof postIndexQueryKey>;
export function postIndexQueryOptions<TData = PostIndex["response"], TQueryData = PostIndex["response"]>(data: PostIndex["request"], options: PostIndex["client"]["parameters"] = {}): WithRequired<UseBaseQueryOptions<PostIndex["response"], PostIndex["error"], TData, TQueryData>, "queryKey"> {
    const queryKey = postIndexQueryKey();
    return {
        queryKey,
        queryFn: async () => {
            const res = await client<PostIndex["data"], PostIndex["error"]>({
                method: "post",
                url: `/`,
                data,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @link /
 */
export function usePostIndex<TData = PostIndex["response"], TQueryData = PostIndex["response"], TQueryKey extends QueryKey = PostIndexQueryKey>(data: PostIndex["request"], options: {
    query?: Partial<UseBaseQueryOptions<PostIndex["response"], PostIndex["error"], TData, TQueryData, TQueryKey>>;
    client?: PostIndex["client"]["parameters"];
} = {}): UseQueryResult<TData, PostIndex["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? postIndexQueryKey();
    const query = useQuery<PostIndex["data"], PostIndex["error"], TData, any>({
        ...postIndexQueryOptions<TData, TQueryData>(data, clientOptions),
        queryKey,
        ...queryOptions
    }) as UseQueryResult<TData, PostIndex["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}