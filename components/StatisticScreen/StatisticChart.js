import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const StatisticChart = ({ data, startDate, endDate }) => {
  const screenWidth = Dimensions.get('window').width;
  const chartWidth = screenWidth * 0.9;

  // Здесь можно добавить логику обработки данных, используя startDate и endDate
  // Например, вы можете отфильтровать данные по диапазону дат

  return (
    <View>
      <LineChart
        data={data}
        width={chartWidth}
        height={220}
        chartConfig={{
          backgroundGradientFrom: '#1E2923',
          backgroundGradientTo: '#08130D',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default StatisticChart;