import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Choose Kigali</Text>
      
      <View style={styles.orderContainer}>
        <View style={styles.orderItem}>
          <MaterialCommunityIcons name="glass-wine" size={24} color="#F7941D" />
          <Text style={styles.tableNumber}>N8</Text>
          <Text style={styles.orderedText}>Ordered</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.orderItem}>
          <MaterialCommunityIcons name="chef-hat" size={24} color="#F7941D" />
          <Text style={styles.callWaiterText}>call waiter</Text>
        </View>
      </View>

      <Text style={styles.menuText}>menu</Text>
      
      {['Appetizer', 'Starter', 'Main', 'Dessert', 'Drink'].map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => navigation.navigate("Item")}
        >
          <Text style={styles.menuItemText}>{item}</Text>
          <MaterialCommunityIcons name="chevron-right" size={24} color="#fff" />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 50,
  
  },
  headerText: {
    color: '#F7941D',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 23,
  },
  orderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  orderItem: {
    alignItems: 'center',
  },
  tableNumber: {
    color: '#F7941D',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  orderedText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    height: 40,
    width: 1,
    backgroundColor: '#F7941D',
  },
  callWaiterText: {
    color: '#ccc',
    fontSize: 16,
    marginTop: 5,
  },
  menuText: {
    color: '#F7941D',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  menuItemText: {
    color: '#fff',
    fontSize: 18,
  },
});
