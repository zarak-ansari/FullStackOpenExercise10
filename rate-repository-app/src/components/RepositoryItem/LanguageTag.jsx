import { StyleSheet, View } from "react-native"
import Text from "../Text"

const styles = StyleSheet.create({
    container:{
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 60,
        alignItems: 'flex-start',
    },
    text: {
        flexGrow: 0,
        padding: 2,
        borderRadius: 5,
        backgroundColor: '#0366d6',
        color: '#fff',
    }
})

const LanguageTag = props => {
    const languageName = props.languageName

    return(
        <View style={styles.container}>
                <Text style={styles.text}>{languageName}</Text>
        </View>
    )
}

export default LanguageTag