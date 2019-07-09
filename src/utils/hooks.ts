import { useRef } from 'react';
import { useQuery, QueryHookOptions } from 'react-apollo-hooks';
import { OperationVariables } from 'apollo-client';
import { DocumentNode } from 'graphql';

let id = 0;

export function useUniqueId() {
  const idRef = useRef(id++);
  return idRef.current;
}

export function useCustomQuery<
  TData,
  TVariables = OperationVariables,
  TCache = object
>(
  query: DocumentNode,
  {
    suspend = true,
    throwNetworkError = true,
    ...otherArgs
  }: QueryHookOptions<TVariables, TCache> & {
    throwNetworkError?: boolean;
  } = {}
) {
  const result = useQuery<TData, TVariables, TCache>(query, {
    suspend,
    ...otherArgs
  });

  if (throwNetworkError && result.error) {
    throw result.error;
  }

  return result;
}
