import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import SubHeading from './SubHeading';
import theme from '../themes';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.darkBackground
    },
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <Pressable><SubHeading color="textSecondary">Repositories</SubHeading></Pressable>
        </View>
    );
};

export default AppBar;