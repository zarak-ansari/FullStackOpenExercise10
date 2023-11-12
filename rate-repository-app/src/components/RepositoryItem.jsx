import { View } from "react-native"
import Text from "./Text"

const RepositoryItem = props => {
    const repository = props.repository
    return (
        <View>
            <Text>Full Name: {repository.fullName}</Text>
            <Text>Description: {repository.description}</Text>
            <Text>Language: {repository.language}</Text>
            <Text>Forks: {repository.forksCount}</Text>
            <Text>Stars: {repository.stargazersCount}</Text>
            <Text>Reviews: {repository.reviewCount}</Text>
            <Text>Rating: {repository.ratingAverage}</Text>
        </View>
    )
}

export default RepositoryItem
