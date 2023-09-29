import React from 'react';
import { View, TextInput } from 'react-native';

import useStyles from '../../hooks/useStyles';
import { SearchBarStyles } from '../../styles/MealScreen/SearchBarStyles';

const SearchBar = ({ setSearch, search }) => {
  const { styles } = useStyles(SearchBarStyles);

  return (
    <View style={styles.searchContainer}>
        <TextInput
            style={styles.searchInput}
            onChangeText={setSearch}
            value={search}
            placeholder="Поиск продукта..."
        />
    </View>
  );
};

export default SearchBar;
