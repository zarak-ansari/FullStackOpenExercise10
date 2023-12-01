import { FlatList, View, StyleSheet, Pressable, TextInput } from 'react-native';
import RepositoryItem from './RepositoryItem/RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
    picker: {
        padding:10,
        backgroundColor:'white',
        margin: 5,
        borderColor: 'black',
        borderRadius: 5
    },
    textInput: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 5
    }
});

const ItemSeparator = () => <View style={styles.separator} />;

const SortingOptionPicker = ({sortingOption, setSortingOption, searchKeyword, setSearchKeyword}) => {
    return(
        <>
            <TextInput
                style={styles.textInput} 
                value={searchKeyword}
                onChangeText={setSearchKeyword}
                placeholder='Search'
            />
            <Picker
                style={styles.picker}
                selectedValue={sortingOption}
                onValueChange={(itemValue) => setSortingOption(itemValue)}
            >
                <Picker.Item label="Latest Repositories" value="latest" />
                <Picker.Item label="Highest Rated Repositories" value="highestRated" />
                <Picker.Item label="Lowest Rated Repositories" value="lowestRated" />
            </Picker>
        </>
    )
}

export const RepositoryListContainer = ({ repositories, sortingOption, setSortingOption, searchKeyword, setSearchKeyword }) => {
    
    const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];
    
    const navigate = useNavigate()

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            ListHeaderComponent={<SortingOptionPicker 
                                    sortingOption={sortingOption}
                                    setSortingOption={setSortingOption}
                                    searchKeyword={searchKeyword}
                                    setSearchKeyword={setSearchKeyword}
                                />}
            renderItem={({ item }) => <Pressable onPress={() => navigate(`/repository/${item.id}`)}><RepositoryItem key={item.id} repository={item} /></Pressable>}
        />
    );    
}

const RepositoryList = () => {
    
    const [sortingOption, setSortingOption] = useState("latest")
    const [searchKeyword, setSearchKeyword] = useState('')
    const [searchKeywordDebouncedValue] = useDebounce(searchKeyword, 500)
    const { repositories } = useRepositories(sortingOption, searchKeywordDebouncedValue)

    return (
        <RepositoryListContainer 
            repositories={repositories}
            sortingOption={sortingOption}
            setSortingOption={setSortingOption} 
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
        />
    );
};

export default RepositoryList;