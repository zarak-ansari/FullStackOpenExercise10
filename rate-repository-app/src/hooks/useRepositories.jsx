import { useQuery } from '@apollo/client';
import { GET_ALL_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
    const { data, error, loading } = useQuery(GET_ALL_REPOSITORIES,{
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