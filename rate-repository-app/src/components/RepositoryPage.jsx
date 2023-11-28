import { useParams } from "react-router-native"
import RepositoryItem from "./RepositoryItem/RepositoryItem"
import { useQuery } from "@apollo/client"
import { GET_REPOSITORY_BY_ID } from "../graphql/queries"
import Text from "./Text"

const RepositoryPage = () => {
    const { id } = useParams()
    const { data, error, loading } = useQuery(GET_REPOSITORY_BY_ID,{
        variables: {repositoryId: id},
        fetchPolicy: 'cache-and-network',
    });

    if(error){
        return error
    }

    if(loading){
        return <Text>Fetching Data...</Text>
    }

    return <RepositoryItem repository={data.repository} showGithubLink={true} />
}

export default RepositoryPage