import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_ALL_REPOSITORIES = gql`
query Repositories ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories (orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
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

export const GET_USER = gql`
query Username ($includeReviews: Boolean = false) {
  me {
    id
    username
    reviews @include(if: $includeReviews) {
      edges{
        node {
          repository {
            fullName
            id
          }
          rating
          text
          createdAt
          id
        }
      }
    }
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

export const CREATE_REVIEW = gql`
mutation CreateReview($review: CreateReviewInput) {
  createReview(review: $review) {
    repositoryId
  }
}
`
export const CREATE_USER = gql`
mutation Mutation($user: CreateUserInput) {
  createUser(user: $user) {
    id
    username
  }
}
`

export const DELETE_REVIEW = gql`
mutation Mutation($deleteReviewId: ID!) {
  deleteReview(id: $deleteReviewId)
}
`