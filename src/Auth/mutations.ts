import {gql} from 'apollo-boost';

export const LOG_IN = gql`
  mutation LogIn($user: String!, $password: String!) {
    login(user: $user, password: $password) {
      accessToken
    }
  }
`;
