import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import useStyles from '../hooks/useStyles';
import { AddNewRationScreenStyles } from '../styles/AddNewRationScreen/AddNewRationScreenStyles';
import { GlobalStyles } from '../styles/GlobalStyles';

import { fetchAllFood } from '../database/dataFood';
import { addRation, addRationFood } from '../database/dataRation';

const AddNewRationScreen = ({ navigation }) => {
    const { styles } = useStyles(AddNewRationScreenStyles);
    const { styles: globalStyles } = useStyles(GlobalStyles);

    const [rationName, setRationName] = useState('');
    const [foodList, setFoodList] = useState([]);
    const [selectedFoods, setSelectedFoods] = useState([]);
    const [quantities, setQuantities] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };
  
    const fetchFoodData = async () => {
      fetchAllFood((food) => {
        setFoodList(food);
      });
    };
  
    useEffect(() => {
      fetchFoodData();
    }, []);
  
    const addFoodToRation = (food) => {
        setSelectedFoods([...selectedFoods, food]);
        setQuantities({ ...quantities, [food.id]: 1 });
    };
  
    const removeFoodFromRation = (index) => {
      setSelectedFoods(selectedFoods.filter((_, i) => i !== index));
    };
  
    const handleAddRation = async () => {
        
        if (rationName.trim() === '') return;
        const rationId = await addRation(rationName);
        
        for (const food of selectedFoods) {
          await addRationFood(rationId, food.id, quantities[food.id]);
        }
        navigation.goBack();
      };
  
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Введите название:</Text>
        <TextInput
          style={styles.input}
          value={rationName}
          onChangeText={setRationName}
        />
        <Text style={styles.label}>Добавить продукты в рацион:</Text>
        <TouchableOpacity style={styles.addButtonPlus} onPress={showModal}>
            <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => {
                closeModal();
            }}
        >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <FlatList
                data={foodList}
                renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.foodItem}
                    onPress={() => {
                    addFoodToRation(item);
                    closeModal();
                    }}
                >
                    <Text style={styles.foodName}>{item.name}</Text>
                    <Text style={styles.foodUnit}>{item.unit}</Text>
                </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Закрыть</Text>
            </TouchableOpacity>
            </View>
        </View>
        </Modal>
        <View style={styles.selectedFoods}>
            {selectedFoods.map((food, index) => (
            <View key={food.id} style={styles.selectedFoodItem}>
                <Text>{food.name}</Text>
                <TextInput
                  style={styles.quantityInput}
                  keyboardType="decimal-pad"
                  value={quantities[food.id].toString()}
                  onChangeText={(text) => {
                    const regex = /^-?\d*\.?\d*$/;
                    if (regex.test(text)) {
                      const newQuantity = text === '' ? 0 : parseFloat(text);
                      setQuantities({ ...quantities, [food.id]: newQuantity });
                    }
                  }}
                />
                <Text>{food.unit}</Text>
                <TouchableOpacity onPress={() => removeFoodFromRation(index)}>
                <MaterialIcons name="remove-circle" size={24} color={Colors.mainColor} />
                </TouchableOpacity>
            </View>
            ))}
        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleAddRation}>
          <Text style={styles.addButtonText}>Подтвердить</Text>
        </TouchableOpacity>
      </View>
    );
  };

  export default AddNewRationScreen;