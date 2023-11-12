import { Text, View, StyleSheet } from "react-native"
import Header from "./Header"
import LanguageTag from "./LanguageTag";

const cardStyles = StyleSheet.create({
    container: {
      backgroundColor: 'white'
    },
});

const RepositoryItem = props => {
    const repository = props.repository
    return (
        <View style={cardStyles.container}>
            <Header name={repository.fullName} avatarImage={repository.ownerAvatarUrl} description={repository.description}/>
            <LanguageTag languageName={repository.language} />
            <View>
                <Text>Forks: {repository.forksCount}</Text>
                <Text>Stars: {repository.stargazersCount}</Text>
                <Text>Reviews: {repository.reviewCount}</Text>
                <Text>Rating: {repository.ratingAverage}</Text>
            </View>
        </View>
    )
}

export default RepositoryItem

