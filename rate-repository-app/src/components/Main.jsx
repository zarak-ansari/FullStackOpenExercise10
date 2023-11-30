import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Navigate, Route, Routes } from 'react-router-native';
import SignIn from './SignIn';
import SignOut from './SignOut';
import RepositoryInfo from './SingleRepository/RepositoryInfo';
import CreateReview from './CreateReview';
import CreateUser from './CreateUser';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: '#e1e4e8'
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path='/' element={<RepositoryList />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signout' element={<SignOut />} />
                <Route path='/signup' element={<CreateUser/>} />
                <Route path='/createreview' element={<CreateReview />} />
                <Route path='/repository/:id' element={<RepositoryInfo />} />
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </View>
    );
};

export default Main;