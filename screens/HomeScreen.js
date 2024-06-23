import { View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-[#F7941D] flex flex-row">
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <View className="flex flex-row">
          <Text className="text-[25px] font-bold">Supa</Text>
          <Text className="text-[25px] font-bold text-white">Menu</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
