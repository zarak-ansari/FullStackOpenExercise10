import { useQuery } from "@apollo/client"
import Text from "./Text"
import { GET_USER } from "../graphql/queries"
import { FlatList, View } from "react-native"
import ReviewItem from "./SingleRepository/ReviewItem"

const UserReviews = () => {

    const { data, error, loading } = useQuery(GET_USER, {variables:{includeReviews:true}})

    if(error) return error
    if(loading) return <Text>Loading...</Text>

    const reviews = data.me.reviews.edges.map(e => e.node)


    return(
        <FlatList
            data={reviews}
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={() => <View style={{height:10,}} />}
            renderItem={({item})=><ReviewItem review={item} />}
        />

    )
}

export default UserReviews