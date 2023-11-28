import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem/RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;


export const RepositoryListContainer = ({ repositories }) => {
    
    const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];
    
    const navigate = useNavigate()

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <Pressable onPress={() => navigate(`/repository/${item.id}`)}><RepositoryItem key={item.id} repository={item} /></Pressable>}
        />
    );    
}

const RepositoryList = () => {

    const { repositories } = useRepositories()
    

    return (<RepositoryListContainer repositories={repositories} />);
};

export default RepositoryList;