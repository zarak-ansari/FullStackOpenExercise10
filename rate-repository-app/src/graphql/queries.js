import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_ALL_REPOSITORIES = gql`
query Repositories {
    repositories {
      ...RepositoryDetails
    }
  }
${REPOSITORY_DETAILS}
`

export const SIGN_IN = gql`
mutation ($username: String!, $password: String!){
  authenticate(credentials: { username: $username, password: $password }) {
    accessToken
  }
}
`

export const GET_USERNAME = gql`
query Username {
  me {
    id
    username
  }
}
`