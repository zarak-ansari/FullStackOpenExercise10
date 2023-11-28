import { View, StyleSheet } from "react-native"
import Header from "./Header"
import LanguageTag from "./LanguageTag";
import Footer from "./Footer";
import GitHubLinkButton from "./GitHubLinkButton";

const cardStyles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 20
    },
});

const RepositoryItem = props => {
    const repository = props.repository
    return (
        <View style={cardStyles.container} testID="repositoryItem">
            <Header name={repository.fullName} avatarImage={repository.ownerAvatarUrl} description={repository.description}/>
            <LanguageTag languageName={repository.language} />
            <Footer 
                forksCount={repository.forksCount}
                stargazersCount={repository.stargazersCount}
                reviewCount={repository.reviewCount}
                ratingAverage={repository.ratingAverage} 
            />
            {props.showGithubLink && <GitHubLinkButton url={repository.url} />}
        </View>
    )
}

export default RepositoryItem