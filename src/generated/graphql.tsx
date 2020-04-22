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
  user: User;
  group: UserGroup;
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  chores: Array<Chore>;
  group: UserGroup;
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
  login: LoginResponse;
  signup: Scalars['Boolean'];
  revokeRefreshToken: Scalars['Boolean'];
};


export type MutationCreateChoreArgs = {
  data: CreateChoreInput;
};


export type MutationCreateUserGroupArgs = {
  data: CreateUserGroupInput;
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
  ownerId: Scalars['Float'];
  groupId: Scalars['Float'];
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