import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

import useStyles from '../../hooks/useStyles';
import { LogFoodStyles } from '../../styles/HomeScreen/LogFoodStyles';

const DATA = [ 
  { id: '1', time: '10:00', name: 'Яблоко', calories: 50 },
  { id: '2', time: '12:00', name: 'Банан', calories: 80 },
  { id: '3', time: '14:00', name: 'Гречка', calories: 120 },
  { id: '4', time: '16:00', name: 'Курица', calories: 150 },
  { id: '5', time: '18:00', name: 'Макароны', calories: 200 },
  { id: '6', time: '20:00', name: 'Рыба', calories: 100 },
  { id: '7', time: '22:00', name: 'Творог', calories: 70 },
];

const LogFood = () => {
  const { styles } = useStyles(LogFoodStyles);
  
  const [data, setData] = useState(DATA);

  const handleDelete = id => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  };

  const Item = ({ time, name, calories, onDelete }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{time}</Text>
      <Text style={styles.itemText}>{name}</Text>
      <Text style={styles.itemText}>{calories}</Text>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.itemText}>Удалить</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item
      time={item.time}
      name={item.name}
      calories={item.calories}
      onDelete={() => handleDelete(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        initialNumToRender={5}
      />
    </View>
  );
};

export default LogFood;