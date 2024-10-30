import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CheckoutScreen = ({navigation}) => {
  const [paymentMethod, setPaymentMethod] = useState(null);

  const paymentOptions = [
    { label: 'Credit Card', value: 'creditCard' },
    { label: 'Mobile Money & Cash', value: 'mobileMoney' },
   
  ];

  const mobileMoneyOptions = [
    { label: 'MTM Mobile money', image: require('../assets/momo.png') },
    { label: 'Airtel Money', image: require('../assets/airtel.png') },
    { label: 'Cash', image: require('../assets/cash.png') },
  ];

  return (
    <View style={styles.container}>
     
     <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="orange" />
      </TouchableOpacity>

      

      <View style={styles.paymentOptions}>
        {paymentOptions.map(option => (
          <TouchableOpacity
            key={option.value}
            style={[styles.optionButton, paymentMethod === option.value && styles.selectedOption]}
            onPress={() => setPaymentMethod(option.value)}
          >
            <Text style={styles.optionText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

     
      <View style={styles.mobileMoneyContainer}>
        {mobileMoneyOptions.map(option => (
          <View key={option.label} style={styles.mobileMoneyOption}>
            <Image source={option.image} style={styles.mobileImage} />
            <Text style={styles.mobileText}>{option.label}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.orderDetailsText}>
        We will send you order details to your email after successful payment.
      </Text>

  
      <TouchableOpacity style={styles.payButton}>
        <Ionicons name="lock-closed" size={24} color="#fff" />
        <Text style={styles.payButtonText}> Pay for Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  optionButton: {
    flex: 1,
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: '#f9f9f9',
  },
  selectedOption: {
    backgroundColor: 'lightgreen',
    borderColor: 'green',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  mobileMoneyContainer: {
    marginTop: 40,
  },
  mobileMoneyOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15, 
    paddingVertical: 10, 
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 10,
  },
  mobileImage: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  mobileText: {
    fontSize: 16,
    color: '#333',
  },
  orderDetailsText: {
    fontSize: 14,
    color: 'gray',
    marginTop: 40,
    textAlign: 'center',
  },
  payButton: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default CheckoutScreen;
