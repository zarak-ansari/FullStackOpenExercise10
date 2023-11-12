import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'flex-start',
    },
    text: {
        flexGrow: 0,
        padding: 5,
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