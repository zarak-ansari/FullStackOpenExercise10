import { useParams } from "react-router-native"
import { FlatList, View, StyleSheet } from "react-native"
import { useQuery } from "@apollo/client"

import ReviewItem from "./ReviewItem"
import RepositoryItem from "../RepositoryItem/RepositoryItem"
import Text from "../Text"

import { GET_REPOSITORY_BY_ID } from "../../graphql/queries"

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = () => {
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

    const repository = data.repository

    const reviews = repository.reviews.edges.map(edge => edge.node)
     
    return (
        <FlatList
          data={reviews}
          renderItem={({ item }) => <ReviewItem review={item} />}
          keyExtractor={({ id }) => id}
          ListHeaderComponent={() => <RepositoryItem repository={repository} showGithubLink={true} />}
          ItemSeparatorComponent={ ItemSeparator }
        />
    )
}

export default RepositoryInfo