import client from "@kubb/swagger-client/client";
import { useQuery } from "@tanstack/react-query";
import type { GetIndexQueryResponse } from "../types/GetIndex";
import type { UseBaseQueryOptions, UseQueryResult, QueryKey, WithRequired } from "@tanstack/react-query";

 type GetIndexClient = typeof client<GetIndexQueryResponse, never, never>;
type GetIndex = {
    data: GetIndexQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: GetIndexQueryResponse;
    client: {
        parameters: Partial<Parameters<GetIndexClient>[0]>;
        return: Awaited<ReturnType<GetIndexClient>>;
    };
};
export const getIndexQueryKey = () => [{ url: "/" }] as const;
export type GetIndexQueryKey = ReturnType<typeof getIndexQueryKey>;
export function getIndexQueryOptions<TData = GetIndex["response"], TQueryData = GetIndex["response"]>(options: GetIndex["client"]["parameters"] = {}): WithRequired<UseBaseQueryOptions<GetIndex["response"], GetIndex["error"], TData, TQueryData>, "queryKey"> {
    const queryKey = getIndexQueryKey();
    return {
        queryKey,
        queryFn: async () => {
            const res = await client<GetIndex["data"], GetIndex["error"]>({
                method: "get",
                url: `/`,
                ...options
            });
            return res.data;
        },
    };
}
/**
 * @link /
 */
export function useGetIndex<TData = GetIndex["response"], TQueryData = GetIndex["response"], TQueryKey extends QueryKey = GetIndexQueryKey>(options: {
    query?: Partial<UseBaseQueryOptions<GetIndex["response"], GetIndex["error"], TData, TQueryData, TQueryKey>>;
    client?: GetIndex["client"]["parameters"];
} = {}): UseQueryResult<TData, GetIndex["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? getIndexQueryKey();
    const query = useQuery<GetIndex["data"], GetIndex["error"], TData, any>({
        ...getIndexQueryOptions<TData, TQueryData>(clientOptions),
        queryKey,
        ...queryOptions
    }) as UseQueryResult<TData, GetIndex["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}