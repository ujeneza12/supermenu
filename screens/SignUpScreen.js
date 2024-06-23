import { View, Text, TextInput,TouchableOpacity, StyleSheet,} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from 'react';


export default function SigninScreen({navigation}){

  const [email, setEmail] = useState('');
  const [fullname, setFullName] = useState('');
  const[telephone,setTelephone] = useState('')

  const handleSignUp = () => {
    // Implement your signup logic here
    console.log('Email:', email);
    console.log('Fullname:', fullname);
    console.log('Telephone:', telephone);
    // For demo purposes, navigate to HomeScreen
    navigation.navigate('Home');
  };

return(
    <View className="flex-1 items-center justify-center bg-[#F7941D]">
     <View className="w-full bg-white h-[540px] mt-[133px] rounded-t-lg ">
        <View className="flex flex-row items-center justify-center mt-[10px]">
          <Text className="text-[40px] font-bold">Supa</Text>
          <Text className="text-[40px] font-bold text-[#F7941D]">Menu</Text>
        </View>
        <View className ="items-center justify-center mt-[15px]">
            <Text className=" font-bold text-blue-900">Welcome ...</Text>
            <Text className=" font-bold text-stone-300">Please fill in the information </Text>
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
                    onChangeText={(text) => setTelephone(text)}
                    secureTextEntry
                  />
        </View>
                
          <TouchableOpacity
          className="py-4 items-center justify-center rounded-lg bg-[#F7941D] text-white mt-[20px] w-[300px] ml-[20px]"
           
           onPress={() => navigation.navigate("Restaurant")}
          >
            <Text className="text-white font-bold">Sign In</Text>
          </TouchableOpacity>
          <View className="flex flex-row items-center justify-center mt-[10px]">
          <Text className="text-[10px] text-stone-300 ">Don't have a account?</Text>
          <Text className="text-[10px]  text-[#F7941D]">Register</Text>
        </View>
      </View>
     </View>

) 


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
    marginTop:20
  },
  inputIcon: {
    marginRight: 10,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    height: "85%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  }
});