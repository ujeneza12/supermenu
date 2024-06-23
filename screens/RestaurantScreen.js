import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TextInput,
  } from "react-native";
  import { Ionicons } from "@expo/vector-icons";
  
  export default function RestaurantScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
         onPress={() => navigation.navigate("Review")}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={24}
            color="#F7941D"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search for your preferred restaurant"
            style={styles.searchText}
          />
        </View>
        <Text style={styles.orText}>or</Text>
        <View style={styles.qrCodeContainer}>
          <Image
            source={require("../assets/qrCode.png")}
            style={styles.qrCodeImage}
          />
        </View>
        <Text style={styles.scanText}>Scan, Pay & Enjoy</Text>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: "#F7941D",
      padding: 20,
      alignItems: "center",
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
      marginTop: 80,
      backgroundColor: "white",
      borderRadius: 10,
    },
    backButton: {
      position: "absolute",
      top: 30,
      left: 20,
      zIndex: 1,
      color: "#222222",
    },
    searchIcon: {
      marginRight: 10,
      marginLeft: 6,
    },
    searchText: {
      color: "#807B7A",
      fontSize: 16,
      padding: 12,
    },
    orText: {
      color: "#373130",
      fontSize: 32,
      marginLeft: 10,
      marginRight: 10,
    },
    qrCodeContainer: {
      marginBottom: 20,
    },
    qrCodeImage: {
      width: 300,
      height: 150,
    },
    scanText: {
      color: "#373130",
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 80,
    },
  });