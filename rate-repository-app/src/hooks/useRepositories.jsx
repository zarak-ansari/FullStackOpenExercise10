import { useQuery } from '@apollo/client';
import { GET_ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortingOption) => {

    const { data, error, loading } = useQuery(GET_ALL_REPOSITORIES,{
        // sortingOption can either be 'latest', 'lowestRated' or 'highestRated' 
        // might break if other values are allowed for sortingOption
        variables:{
            orderBy: sortingOption !== 'latest' ? 'RATING_AVERAGE': 'CREATED_AT', 
            orderDirection: sortingOption === 'lowestRated' ? 'ASC' : 'DESC'
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