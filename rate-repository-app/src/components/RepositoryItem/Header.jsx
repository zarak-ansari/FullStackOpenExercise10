import { StyleSheet, View, Image } from "react-native";
import Text from "../Text";

const headerStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexGrow: 1,
    },
    avatar: {
      width: 45,
      height: 45,
      borderRadius: 5,
    },
    avatarContainer: {
      flexGrow: 0,
      paddingRight: 15,
    },
    infoContainer: {
      flexGrow: 1,
    },
});

const Header = ({ avatarImage, name, description }) =>{
 
    return(
        <View style={headerStyles.container}>
            <View style={headerStyles.avatarContainer}>
                <Avatar imageUrl={avatarImage} />
            </View>
            <View style={headerStyles.infoContainer}>
                <Text fontWeight='bold' testID='fullName'>{name}</Text>
                <Text testID='description'>{description}</Text>
            </View>
        </View>
    )
}

const Avatar = ({ imageUrl }) => {
    return <Image style={headerStyles.avatar} source={imageUrl} />
}

export default Header;