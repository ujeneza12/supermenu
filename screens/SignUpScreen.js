import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from 'react';

export default function SigninScreen({ navigation }) {

  return (
    <View className="flex-1 items-center justify-center bg-[#F7941D]">
      <View className="w-full flex-1 bg-white mt-[133px] rounded-t-lg">
        <View className="flex flex-row items-center justify-center mt-[10px]">
          <Text className="text-[40px] font-bold">Supa</Text>
          <Text className="text-[40px] font-bold text-[#F7941D]">Menu</Text>
        </View>
        <View className="items-center justify-center mt-[15px]">
          <Text className="font-bold text-blue-900">Welcome ...</Text>
          <Text className="font-bold text-stone-300">Please fill in the information </Text>
        </View>

        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="email-outline"
            size={24}
            color="#222222"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Your Email"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed-outline"
            size={24}
            color="#222222"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          className="py-4 items-center justify-center rounded-lg bg-[#F7941D] text-white mt-[20px] w-[300px] ml-[20px]"
          onPress={() => navigation.navigate("Restaurant")}
        >
          <Text className="text-white font-bold">Sign In</Text>
        </TouchableOpacity>

        <View style={styles.socialLoginContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-google" size={20} color="#DB4437" style={styles.socialIcon} />
            <Text style={styles.socialText}>Login with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-facebook" size={20} color="#4267B2" style={styles.socialIcon} />
            <Text style={styles.socialText}>Login with Facebook</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPassword} className="font-bold">Forgot Password?</Text>
        </TouchableOpacity>

        <View className="flex flex-row items-center justify-center mt-[10px]">
          <Text className="text-[10px] text-stone-300">Don't have an account?</Text>
          <Text 
            className="text-[10px] text-[#F7941D]"
            onPress={() => navigation.navigate("Signin")}  
          >
            Register
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#F7941D",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    width: "80%",
    padding: 5,
    marginLeft: 24,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    marginTop: 20,
  },
  inputIcon: {
    marginRight: 10,
  },
  socialLoginContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8E8E8",
    padding: 14,
    borderRadius: 5,
    width: "80%",
    marginVertical: 5,
  },
  socialIcon: {
    marginRight: 10,
  },
  socialText: {
    color: "#333333",
    fontSize: 16,
    marginLeft: 30,
  },
  forgotPassword: {
    color: "#F7941D",
    fontSize: 12,
    marginTop: 10,
    textAlign: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    height: "85%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
