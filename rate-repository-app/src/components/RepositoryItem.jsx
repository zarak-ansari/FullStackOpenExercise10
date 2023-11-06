import { Text, View } from "react-native"

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

// id: 'reduxjs.redux',
// fullName: 'reduxjs/redux',
// description: 'Predictable state container for JavaScript apps',
// language: 'TypeScript',
// forksCount: 13902,
// stargazersCount: 52869,
// ratingAverage: 0,
// reviewCount: 0,
// ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',