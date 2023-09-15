import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import * as FileSystem from 'expo-file-system';

import { globalStyles } from '../styles/GlobalStyles';
import { fetchRations, fetchRationFoods } from '../database/dataRation';
import RationSwitcher from '../components/RationScreen/RationSwitcher';

const RationScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [rations, setRations] = useState([]);

  useEffect(() => {
    fetchRations(setRations);
  }, []);

  const renderItem = ({ item }) => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
      fetchRationFoods(item.id)
        .then((foods) => {
          setFoods(foods);
        })
    }, [item]);

}

const dbName = 'FoodSmile.db';
const dbPath = `${FileSystem.documentDirectory}SQLite/${dbName}`;

const FileSystemPath = async () => {
    FileSystem.deleteAsync(dbPath)
        .then(() => {
            console.log('Database is deleted!');
            })
        .catch((error) => {
            console.error(error);
  });

    return (
      <View style={styles.rationItem}>
          <View style={styles.rationHeader}>
              <Text>{item.name}</Text>
              <Text>{item.total_calories}</Text>
          </View>
          <View style={styles.rationContent}>
              {foods.map((food) => (
                <Text key={food.id}>{food.food_id} - {food.quantity}</Text>
            ))}
          </View>
          <View style={styles.rationActions}>
              <TouchableOpacity>
                  <Text>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                  <Text>Delete</Text>
              </TouchableOpacity>
          </View>
      </View>
  );
}
  return (
      <View style={globalStyles.container}>
          <RationSwitcher navigation={navigation} activeScreen="Ration" />
          <View style={styles.searchContainer}>
              <TextInput
                  style={styles.searchInput}
                  value={searchText}
                  onChangeText={setSearchText}
                  placeholder="Search..."
              />
              <TouchableOpacity style={styles.filterButton}>
                  <Text>Filter</Text>
              </TouchableOpacity>
          </View>

          <FlatList
              style={styles.rationList}
              data={rations}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            //   onEndReached={fetchMoreRations}
            //   onEndReachedThreshold={0.5}
          />

          <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddNewRation')}>
                  <Text>Add Ration</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} /*onPress = {FileSystemPath}*/>
                  <Text>Load Rations</Text>
              </TouchableOpacity>
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '10%',
  },

  searchInput: {
      width: '80%',
  },

  filterButton: {
      width: '20%',
  },

  rationList: {
      height: '75%',
  },

  rationItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
  },

  rationHeader: {
      width: '50%',
  },

  rationContent: {
      width: '75%',
      paddingLeft: '5%',
  },
  rationActions: {
      width: '15%',
      paddingRight: '5%',
  },

  buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: '10%',
  },

  button: {
      width: '45%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#ccc',
      borderRadius: 5,
  },
});

export default RationScreen;