import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
   __typename?: 'Query';
  chore: Array<Chore>;
  chores: Array<Chore>;
  group: UserGroup;
  groups: Array<UserGroup>;
  me?: Maybe<User>;
  user: User;
  users: Array<User>;
};


export type QueryChoreArgs = {
  id: Scalars['String'];
};


export type QueryGroupArgs = {
  id: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type Chore = {
   __typename?: 'Chore';
  id: Scalars['ID'];
  title: Scalars['String'];
  emoji: Scalars['String'];
  cycleDate: Scalars['String'];
  isCompleted: Scalars['Boolean'];
  owner: User;
  group: UserGroup;
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  chores?: Maybe<Array<Chore>>;
  group?: Maybe<UserGroup>;
};

export type UserGroup = {
   __typename?: 'UserGroup';
  id: Scalars['ID'];
  name: Scalars['String'];
  code: Scalars['String'];
  admin: User;
  chores: Array<Chore>;
  users: Array<User>;
};

export type Mutation = {
   __typename?: 'Mutation';
  createChore: Chore;
  createUserGroup: UserGroup;
  joinUserGroup: UserGroup;
  login: LoginResponse;
  signup: Scalars['Boolean'];
  logout: Scalars['Boolean'];
  revokeRefreshToken: Scalars['Boolean'];
};


export type MutationCreateChoreArgs = {
  data: CreateChoreInput;
};


export type MutationCreateUserGroupArgs = {
  data: CreateUserGroupInput;
};


export type MutationJoinUserGroupArgs = {
  groupName: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  user: Scalars['String'];
};


export type MutationSignupArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRevokeRefreshTokenArgs = {
  userId: Scalars['Int'];
};

export type CreateChoreInput = {
  title: Scalars['String'];
  ownerId: Scalars['String'];
  groupId: Scalars['String'];
  emoji: Scalars['String'];
  cycleDate: Scalars['String'];
};

export type CreateUserGroupInput = {
  name: Scalars['String'];
  adminId: Scalars['String'];
};

export type LoginResponse = {
   __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
};

export type ChoresQueryVariables = {};


export type ChoresQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  )> }
);

export type JoinUserGroupMutationVariables = {
  userId: Scalars['String'];
  groupName: Scalars['String'];
};


export type JoinUserGroupMutation = (
  { __typename?: 'Mutation' }
  & { joinUserGroup: (
    { __typename?: 'UserGroup' }
    & Pick<UserGroup, 'id'>
  ) }
);

export type LogInMutationVariables = {
  user: Scalars['String'];
  password: Scalars['String'];
};


export type LogInMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
  ) }
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
    & { group?: Maybe<(
      { __typename?: 'UserGroup' }
      & Pick<UserGroup, 'id'>
    )> }
  )> }
);

export type SignUpMutationVariables = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'signup'>
);

export type UsersQueryVariables = {};


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  )> }
);


export const ChoresDocument = gql`
    query Chores {
  users {
    id
    username
  }
}
    `;

/**
 * __useChoresQuery__
 *
 * To run a query within a React component, call `useChoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useChoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChoresQuery({
 *   variables: {
 *   },
 * });
 */
export function useChoresQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ChoresQuery, ChoresQueryVariables>) {
        return ApolloReactHooks.useQuery<ChoresQuery, ChoresQueryVariables>(ChoresDocument, baseOptions);
      }
export function useChoresLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ChoresQuery, ChoresQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ChoresQuery, ChoresQueryVariables>(ChoresDocument, baseOptions);
        }
export type ChoresQueryHookResult = ReturnType<typeof useChoresQuery>;
export type ChoresLazyQueryHookResult = ReturnType<typeof useChoresLazyQuery>;
export type ChoresQueryResult = ApolloReactCommon.QueryResult<ChoresQuery, ChoresQueryVariables>;
export const JoinUserGroupDocument = gql`
    mutation JoinUserGroup($userId: String!, $groupName: String!) {
  joinUserGroup(userId: $userId, groupName: $groupName) {
    id
  }
}
    `;
export type JoinUserGroupMutationFn = ApolloReactCommon.MutationFunction<JoinUserGroupMutation, JoinUserGroupMutationVariables>;

/**
 * __useJoinUserGroupMutation__
 *
 * To run a mutation, you first call `useJoinUserGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinUserGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinUserGroupMutation, { data, loading, error }] = useJoinUserGroupMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      groupName: // value for 'groupName'
 *   },
 * });
 */
export function useJoinUserGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<JoinUserGroupMutation, JoinUserGroupMutationVariables>) {
        return ApolloReactHooks.useMutation<JoinUserGroupMutation, JoinUserGroupMutationVariables>(JoinUserGroupDocument, baseOptions);
      }
export type JoinUserGroupMutationHookResult = ReturnType<typeof useJoinUserGroupMutation>;
export type JoinUserGroupMutationResult = ApolloReactCommon.MutationResult<JoinUserGroupMutation>;
export type JoinUserGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<JoinUserGroupMutation, JoinUserGroupMutationVariables>;
export const LogInDocument = gql`
    mutation LogIn($user: String!, $password: String!) {
  login(user: $user, password: $password) {
    accessToken
  }
}
    `;
export type LogInMutationFn = ApolloReactCommon.MutationFunction<LogInMutation, LogInMutationVariables>;

/**
 * __useLogInMutation__
 *
 * To run a mutation, you first call `useLogInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logInMutation, { data, loading, error }] = useLogInMutation({
 *   variables: {
 *      user: // value for 'user'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLogInMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogInMutation, LogInMutationVariables>) {
        return ApolloReactHooks.useMutation<LogInMutation, LogInMutationVariables>(LogInDocument, baseOptions);
      }
export type LogInMutationHookResult = ReturnType<typeof useLogInMutation>;
export type LogInMutationResult = ApolloReactCommon.MutationResult<LogInMutation>;
export type LogInMutationOptions = ApolloReactCommon.BaseMutationOptions<LogInMutation, LogInMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    group {
      id
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const SignUpDocument = gql`
    mutation SignUp($username: String!, $email: String!, $password: String!) {
  signup(username: $username, email: $email, password: $password)
}
    `;
export type SignUpMutationFn = ApolloReactCommon.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        return ApolloReactHooks.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, baseOptions);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = ApolloReactCommon.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = ApolloReactCommon.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    id
    username
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        return ApolloReactHooks.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
      }
export function useUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = ApolloReactCommon.QueryResult<UsersQuery, UsersQueryVariables>;