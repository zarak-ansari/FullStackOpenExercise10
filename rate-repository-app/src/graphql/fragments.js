import { gql } from '@apollo/client';


export const REPOSITORY_DETAILS = gql`
fragment RepositoryDetails on RepositoryConnection {
    edges {
        node {
            fullName
            description
            language
            ownerAvatarUrl
            ownerName
            ratingAverage
            reviewCount
            stargazersCount
            url
            forksCount
        }
    }
}
`