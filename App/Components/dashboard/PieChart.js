import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PieChart from 'react-native-pie-chart';

const PieChartComponent = ({ income, totalOut, totalSaved }) => {
    let untouched = Number(income) - (Number(totalOut) + Number(totalSaved))
    const widthAndHeight = 250
    const series = [Number(totalOut), Number(totalSaved), Number(untouched)]
    const sliceColor = ['#EB8A1A', '#83A6ED', '#85C898']

    return (
      <View style={{ flex: 1, borderWidth: 1, borderColor: '#e6e6e6', borderRadius: 10, marginVertical: 20, marginHorizontal: 10 }}>
        <View style={{padding: 15}}>
            <Text style={styles.title}>Money Statistics</Text>
            <View style={{padding: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
                    <View style={{height: 10, width: 10, backgroundColor: "#EB8A1A"}}/>
                    <Text style={{color: '#EB8A1A'}}>Expenses ${Number(totalOut).toFixed(2)}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
                    <View style={{height: 10, width: 10, backgroundColor: "#83A6ED"}}/>
                    <Text style={{color: '#83A6ED'}}>Saved ${Number(totalSaved).toFixed(2)}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
                    <View style={{height: 10, width: 10, backgroundColor: "#85C898"}}/>
                    <Text style={{color: '#85C898'}}>Untouched ${Number(untouched).toFixed(2)}</Text>
                </View>
            </View>
        </View>
        <View style={styles.container}>
          
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
        </View>

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  legend: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  legendColor: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  legendText: {
    fontSize: 14,
    color: '#0F172A',
  },
});

export default PieChartComponent;
