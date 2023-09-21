import { StyleSheet } from 'react-native';

export const StatisticScreenStyles = (themeColors) => StyleSheet.create({
    selectPeriodTitle: {
        height: 50,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginHorizontal: '20%',
      },

      selectPeriodText: {
        fontSize: 20,
      },

      dateButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
      },

      dateButton: {
        width: 170,
        height: 50,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
      },

      dateButtonText: {
        fontSize: 18,
      },

      selectedPeriodContainer: {
        marginTop: 20,
        alignItems: 'center',
      },

      selectedPeriodText: {
        fontSize: 20,
      },

      statisticsChart: {
        marginTop: 50,
        alignItems: 'center',
      },

      statisticsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20,
      },

      statisticText: {
      },
});  