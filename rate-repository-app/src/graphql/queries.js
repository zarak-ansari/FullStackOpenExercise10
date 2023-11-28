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

export const GET_REPOSITORY_BY_ID = gql`
query Repository($repositoryId: ID!) {
  repository(id: $repositoryId) {
    id
    fullName
    url
    reviewCount
    stargazersCount
    forksCount
    language
    ratingAverage
    ownerAvatarUrl
    description
    ownerName
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`