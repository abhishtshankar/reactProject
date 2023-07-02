import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const [showInsights, setShowInsights] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleInsightsClick = () => {
    setShowInsights(!showInsights);
    setSelectedOption('');
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowInsights(false);
  };

  const renderContent = () => {
    if (selectedOption === 'Clients') {
      return (
        <ScrollView>
          <Text style={styles.listTitle}>Clients</Text>
          <View style={styles.frameContainer}>
            <View style={styles.frame}>
              <Text style={styles.listItem}>Ram</Text>
            </View>
            <View style={styles.frame}>
              <Text style={styles.listItem}>Sita</Text>
            </View>
            <View style={styles.frame}>
              <Text style={styles.listItem}>Ramesh</Text>
            </View>
            <View style={styles.frame}>
              <Text style={styles.listItem}>Ganesh</Text>
            </View>
            <View style={styles.frame}>
              <Text style={styles.listItem}>Hari</Text>
            </View>
          </View>
        </ScrollView>
      );
    }

    if (selectedOption === 'Teams') {
      return (
        <ScrollView>
          <Text style={styles.listTitle}>Teams</Text>
          <View style={styles.frameContainer}>
            <View style={styles.frame}>
              <Text style={styles.listItem}>Team A</Text>
            </View>
            <View style={styles.frame}>
              <Text style={styles.listItem}>Team B</Text>
            </View>
            <View style={styles.frame}>
              <Text style={styles.listItem}>Team C</Text>
            </View>
            <View style={styles.frame}>
              <Text style={styles.listItem}>Team D</Text>
            </View>
            <View style={styles.frame}>
              <Text style={styles.listItem}>Team E</Text>
            </View>
          </View>
        </ScrollView>
      );
    }

    if (showInsights) {
      const pieChartData = [
        {
          name: 'Delivered',
          population: 52.4,
          value: '52.4%',
          color: '#00FF00',
          legendFontColor: '#7F7F7F',
          legendFontSize: 16,
          legendFontWeight: 'bold',
        },
        {
          name: 'Transit',
          population: 16.4,
          value: '16.4%',
          color: '#FFA500',
          legendFontColor: '#7F7F7F',
          legendFontSize: 16,
        },
        {
          name: 'Pending',
          population: 31.6,
          value: '31.6%',
          color: '#FF0000',
          legendFontColor: '#7F7F7F',
          legendFontSize: 16,
        },
      ];

      const pieChartItems = pieChartData.map((item, index) => (
        <View key={index} style={styles.dataItemContainer}>
          <Text style={styles.dataItemName}>{item.name}</Text>
          <Text style={styles.dataItemPopulation}>{item.population}</Text>
        </View>
      ));
  
      return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <ScrollView horizontal>
            <View style={styles.insightsBox}>
              <View style={styles.dropdownContainer}>
                <Text style={styles.dropdownText}>Month</Text>
              </View>
              <Text style={styles.insightsBoxTitle}>Demographics</Text>
              <BarChart
                data={{
                  labels: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5'],
                  datasets: [
                    {
                      data: [10, 22, 19, 30, 14],
                    },
                  ],
                }}
                width={300}
                height={200}
                chartConfig={barChartConfig}
                style={styles.chartStyle}
              />
            </View>
          </ScrollView>
  
          <ScrollView horizontal>
            <View style={styles.insightsBox}>
              <View style={styles.dropdownContainer}>
                <Text style={styles.dropdownText}>Month</Text>
              </View>
              <Text style={styles.insightsBoxTitle}>Order</Text>
              <PieChart
                data={pieChartData}
                width={300}
                height={200}
                chartConfig={pieChartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
                style={styles.chartStyle}
              >
                {pieChartItems}
              </PieChart>
              <Text style={styles.totalOrdersText}>9,204 Total Orders</Text>
            </View>
          </ScrollView>
        </ScrollView>
      );
    }

    return null;
  };

  const barChartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  const pieChartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileBackground}>
          <Image
            style={styles.profileImage}
            source={require('./assets/image/image.jpeg')}
          />
          <View style={styles.profileInfoContainer}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileInfo}>643567890</Text>
          </View>
          <Text style={styles.profileInfo}>Delhi, India</Text>
        </View>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === '' && showInsights && styles.selectedOption,
          ]}
          onPress={handleInsightsClick}
        >
          <Text
            style={[
              styles.optionText,
              selectedOption === '' && showInsights && styles.selectedOptionText,
            ]}
          >
            Insights
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === 'Clients' && styles.selectedOption,
          ]}
          onPress={() => handleOptionClick('Clients')}
        >
          <Text
            style={[
              styles.optionText,
              selectedOption === 'Clients' && styles.selectedOptionText,
            ]}
          >
            Clients
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === 'Teams' && styles.selectedOption,
          ]}
          onPress={() => handleOptionClick('Teams')}
        >
          <Text
            style={[
              styles.optionText,
              selectedOption === 'Teams' && styles.selectedOptionText,
            ]}
          >
            Team
          </Text>
        </TouchableOpacity>
      </View>

      {renderContent()}

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Ionicons name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Ionicons name="notifications" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarItem}>
          <Ionicons name="person" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    width: '100%',
    padding: 20,
    borderRadius: 10,
  },
  profileBackground: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  profileInfo: {
    fontSize: 16,
    marginRight: 5,
  },

  optionsContainer: {
    flexDirection: 'row',
    backgroundColor: 'cyan',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  option: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  optionText: {
    fontSize: 18,
    color: 'black',
  },
  selectedOption: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  selectedOptionText: {
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insightsBox: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'lightblue',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    elevation: 2,
    overflow: 'hidden',
  },

  insightsBoxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  chartStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
  totalOrdersText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  dataItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  dataItemName: {
    marginRight: 5,
  },
  dataItemPopulation: {
    fontWeight: 'bold',
  },
  bottomBar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'lightgray',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomBarItem: {},
  dropdownContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 5,
    zIndex: 1,
  },
  dropdownText: {
    fontSize: 14,
  },
  
});

export default App;
