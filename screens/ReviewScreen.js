import { View, Text,  Image, } from "react-native";

export default function ReviewScreen({}) {
  return (
    <View className="flex-1 items-center justify-center bg-black ">
        <View>
            <Text className="text-[18px] font-bold text-yellow-600 text-center">Yay!!</Text>
            <Text className="text-[18px] font-bold text-yellow-600 ml-[20px]">We value all feedback,</Text>
            <Text className="text-[18px] font-bold text-yellow-600">please rate your experience</Text>
            <Text className="text-[18px] font-bold text-yellow-600 text-center">below:</Text>

        </View>

        <View className="mt-[100px]" >
          <Image
            source={require("../assets/review.png")}   
          />
        </View>
        <Text className="text-yellow-600 mt-[100px] font-bold text-[13px] ">Thank you for helping us improve our service!</Text>
        <View className="flex flex-row mt-[50px]">
          <Text className="text-[35px] font-bold text-white">Supa</Text>
          <Text className="text-[35px] font-bold text-yellow-600">Menu</Text>
        </View>
    </View>
  );
}
