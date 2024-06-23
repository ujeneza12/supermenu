import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/HomeScreen"
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignUpScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import ReviewScreen from './screens/ReviewScreen';
import MenuScreen from './screens/MenuScreen';



const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"  component={Home}   options={{ headerShown: false }}/>
        <Stack.Screen name="Signin"  component={SigninScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup"  component={SignupScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Restaurant"  component={RestaurantScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Review"  component={ReviewScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Menu"  component={MenuScreen} options={{ headerShown: false }}/>


        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
