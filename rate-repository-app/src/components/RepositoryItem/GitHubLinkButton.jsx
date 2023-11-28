import { View, Pressable, Linking, StyleSheet } from "react-native";

import Text from "../Text";

const style = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 5,
        width: 350,
        alignItems: 'center'
    }
});

const GitHubLinkButton = (props) =>{

    return (
        <Pressable onPress={()=>Linking.openURL(props.url)}>
            <View style={style.button}>
                <Text color='white'>Open in Github</Text>
            </View>
        </Pressable>
    )

} 
export default GitHubLinkButton