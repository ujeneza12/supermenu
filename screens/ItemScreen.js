import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const drinks = [
  {
    name: 'Gin & Tonic',
    contents: 'Singapore Sling - 12.5',
    image: require('../assets/gin.png'), 
  },
  {
    name: 'Kaffir Lime Vodka & Ginger',
    contents: 'Tomy Yummy - 12.5',
    image: require('../assets/vodka.png'), 
  },
  {
    name: 'Vanilla Coffee Chocolate',
    contents: 'White Russian - 12.5',
    image: require('../assets/coffe.png'), 
  },
];

const ItemScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
     
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} className="mt-[35px]">
        <Ionicons name="arrow-back" size={24} color="orange"  />
      </TouchableOpacity>

      
      <Text className="text-2xl font-bold text-center mb-4">Choose Kigali</Text>
      <Text className="text-[19px] text-center mb-4 text-orange-300">Drinks</Text>

     
      <ScrollView style={styles.scrollView}>
        {drinks.map((drink, index) => (
          <View key={index} style={styles.drinkContainer}>
            <Image source={drink.image} style={styles.image} />
            <View style={styles.drinkInfo}>
              <Text style={styles.drinkName}>{drink.name}</Text>
              {drink.contents && <Text style={styles.contents}>{drink.contents}</Text>}
            </View>
          </View>
        ))}
      </ScrollView>

     
      <TouchableOpacity style={styles.checkoutButton} onPress={() => {/* Handle checkout */}}>
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',

   
  },
  scrollView: {
    width: '100%', 
  },
  drinkContainer: {
    flexDirection: 'row', 
    marginBottom: 20,
    alignItems: 'center', 
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  drinkInfo: {
    marginLeft: 20, 
    flex: 1, 
  },
  drinkName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contents: {
    fontSize: 14,
    color: 'gray',
  },
  checkoutButton: {
    backgroundColor: 'orange', // Changed to orange
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%', 
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ItemScreen;