import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem/RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SortingOptionPicker = ({sortingOption, setSortingOption}) => {
    return(
        <Picker
            style={{padding:10, backgroundColor:'white'}}
            selectedValue={sortingOption}
            onValueChange={(itemValue) => setSortingOption(itemValue)}
        >
            <Picker.Item label="Latest Repositories" value="latest" />
            <Picker.Item label="Highest Rated Repositories" value="highestRated" />
            <Picker.Item label="Lowest Rated Repositories" value="lowestRated" />
        </Picker>
    )
}

export const RepositoryListContainer = ({ repositories, sortingOption, setSortingOption }) => {
    
    const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];
    
    const navigate = useNavigate()

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            ListHeaderComponent={<SortingOptionPicker sortingOption={sortingOption} setSortingOption={setSortingOption}/>}
            renderItem={({ item }) => <Pressable onPress={() => navigate(`/repository/${item.id}`)}><RepositoryItem key={item.id} repository={item} /></Pressable>}
        />
    );    
}

const RepositoryList = () => {
    
    const [sortingOption, setSortingOption] = useState("latest")

    const { repositories } = useRepositories(sortingOption)
    

    return (
        <RepositoryListContainer 
            repositories={repositories}
            sortingOption={sortingOption}
            setSortingOption={setSortingOption} 
        />
    );
};

export default RepositoryList;