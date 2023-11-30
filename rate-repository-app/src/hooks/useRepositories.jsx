import { useQuery } from '@apollo/client';
import { GET_ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortingOption) => {

    const { data, error, loading } = useQuery(GET_ALL_REPOSITORIES,{
        variables:{
            orderBy: sortingOption === 'latest' ? 'CREATED_AT' : 'RATING_AVERAGE',
            orderDirection: (sortingOption === 'latest' || sortingOption === 'highestRated') ? 'DESC' : 'ASC'
        },
        fetchPolicy: 'cache-and-network',
    });

    if(error) return error

    return ({
        repositories: data && data.repositories,
        loading,
        refetch: null
    })   
}

export default useRepositories