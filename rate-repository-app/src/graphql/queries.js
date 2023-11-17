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