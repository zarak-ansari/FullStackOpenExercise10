import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import SubHeading from './SubHeading';
import theme from '../themes';
import { Link } from 'react-router-native';
import { ScrollView } from 'react-native';
import { GET_USERNAME } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.darkBackground,
        flexDirection: 'row'
    },
    button: {
        margin: 10
    }
});


const AppBar = () => {
    const { data, error, loading } = useQuery(GET_USERNAME)
    
    if(error) return null
    if(loading) return null

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarButton name='Repositories' path='/' />
                <AppBarButton name='Create a Review' path='/createreview' />
                { !data.me && <AppBarButton name='Sign In' path='/signin'/> }
                { data.me && <AppBarButton name='Sign Out' path='/signout' /> }
            </ScrollView>
        </View>
    );
};

const AppBarButton = (props) => {
    return (
        <Pressable style={styles.button}>
            <Link to={props.path}>
                <SubHeading color="white">{props.name}</SubHeading>
            </Link>
        </Pressable>
    )
}

export default AppBar;