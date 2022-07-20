import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      firstname
      lastname
      email
      password
      role
      token
    }
  }
`;

export const SIGNUP = gql`
  mutation signUp(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
  ) {
    signUp(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
    ) {
      id
      firstname
      lastname
      email
      password
      role
      token
    }
  }
`;
