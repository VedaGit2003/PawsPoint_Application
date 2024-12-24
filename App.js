import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Path, G } from "react-native-svg";
import AsyncStorage from '@react-native-async-storage/async-storage';
import './global.css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import FoodScreen from './src/screens/FoodScreen';
import ShopScreen from './src/screens/ShopScreen';
import VetenerianScreen from './src/screens/VetenerianScreen';
import FlashDoorScreen from './src/screens/FlashDoorScreen';
import { HomeIcon } from 'react-native-heroicons/solid';
import SingleProduct from './src/Shared/SingleProduct';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginScreen from './src/screens/LoginScreen';
import UserProfile from './src/screens/Auth/UserProfile';
import { useEffect, useState } from 'react';

export default function App() {
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()
  const [token, setToken] = useState(null);

  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const getToken = async () => {
      try {
        const value = await AsyncStorage.getItem('token');
        setToken(value);
      } catch (error) {
        console.log("Error fetching token:", error);
      } finally {
        setLoading(false); // Set loading to false once token check is done
      }
    };

    getToken();
  }, []);

  if (loading) {
    return <View><Text>Loading...</Text></View>; // Render a loading state while fetching token
  }


  return (

    <NavigationContainer>
      {/* {
token ? */}
 <Stack.Navigator initialRouteName={token? 'Tabs':'signUp'}>
        <Stack.Screen name='Tabs' component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name='singleProduct' component={SingleProduct} options={{headerShown:false}} />
        <Stack.Screen name='userProfile' component={UserProfile} options={{headerShown:false}} />
        <Stack.Screen name='signUp' component={SignUpScreen} options={{headerShown:false}} />
        <Stack.Screen name='logIn' component={LoginScreen} options={{headerShown:false}} />
</Stack.Navigator>
{/* :   
      <Stack.Navigator initialRouteName='signUp'>
        <Stack.Screen name='signUp' component={SignUpScreen} options={{headerShown:false}} />
        <Stack.Screen name='logIn' component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name='Tabs' component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name='userProfile' component={UserProfile} options={{headerShown:false}} />
      </Stack.Navigator>
} */}
    </NavigationContainer>

  );
}

const TabNavigator = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name='Home' component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <HomeIcon size={24} color={'black'} />
          ),
          headerShown: false
          // tabBarActiveTintColor: COLORS.ORANGE,
          // tabBarInactiveTintColor: COLORS.BLACK,
        }} />
      <Tab.Screen name='Food' component={FoodScreen}
        options={{
          title: 'Food',
          tabBarIcon: ({ focused }) => (
            <Svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 72 72">
              <Circle cx="36" cy="37" r="23" fill="#3f3f3f" />
              <Circle cx="36" cy="36" r="20" fill="#e27022" />
              <Path
                fill="#f4aa41"
                stroke="#f4aa41"
                strokeMiterlimit="10"
                strokeWidth="1.6"
                d="M49.285 30.6a1.653 1.653 0 0 0-2.976-.73a7.57 7.57 0 0 0-2.436 8.48l-.373 1.518a.92.92 0 0 0 .687 1.135l1.822.447a.92.92 0 0 0 1.135-.687l.373-1.518a7.57 7.57 0 0 0 1.768-8.646Z"
              />
              <Path
                fill="#fff"
                stroke="#fff"
                strokeMiterlimit="10"
                strokeWidth="1.6"
                d="M43.398 45.303a.94.94 0 0 0 .856-.208a.94.94 0 0 0 .662.58a.938.938 0 1 0 .448-1.821l.447-1.822l-1.518-.373l-.448 1.822a.938.938 0 1 0-.447 1.822Z"
              />
              <Circle cx="38" cy="24" r="3" fill="#f4aa41" stroke="#f4aa41" strokeMiterlimit="10" strokeWidth="1.6" />
              <Circle cx="25" cy="40" r="2" fill="#f4aa41" stroke="#f4aa41" strokeMiterlimit="10" strokeWidth="1.6" />
              <Circle cx="38.5" cy="35.5" r="2" fill="#f4aa41" stroke="#f4aa41" strokeMiterlimit="10" strokeWidth="1.6" />
              <Path
                fill="#5c9e31"
                stroke="#5c9e31"
                strokeLinejoin="round"
                strokeWidth="1.6"
                d="M38.59 48.158a4.663 4.663 0 0 1-8.399-2.86a4.664 4.664 0 1 0 8.732 2.338a5 5 0 0 1-.333.522Z"
              />
              <Path
                fill="#5c9e31"
                stroke="#5c9e31"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
                d="M24.985 30.381a3.668 3.668 0 0 1 5.046 4.823a3.67 3.67 0 1 0-5.457-4.56a4 4 0 0 1 .411-.263"
              />
              <G stroke="#000">
                <Circle cx="36" cy="36" r="23" fill="none" strokeMiterlimit="10" strokeWidth="2" />
                <Path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M60 33c1.657 0 3 1.79 3 4s-1.343 4-3 4m-48-8c-1.657 0-3 1.79-3 4s1.343 4 3 4"
                />
                <Path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                  d="M30.19 45.298a4.664 4.664 0 1 0 8.733 2.338a5 5 0 0 1-.334.522M30.03 35.205a3.67 3.67 0 1 0-5.456-4.562a4 4 0 0 1 .411-.262M46.01 41.45a.92.92 0 0 0 1.134-.687l.373-1.519a7.57 7.57 0 0 0 1.768-8.645a1.68 1.68 0 0 0-1.242-1.367"
                />
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                  d="M45.582 45.6a.93.93 0 0 0 .469-.612a.92.92 0 0 0-.688-1.134l.448-1.822"
                />
                <Path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                  d="M38 21a3 3 0 0 1 0 6m.5 10.5a2 2 0 0 1 0-4M25 42a2 2 0 0 1 0-4"
                />
              </G>
            </Svg>

          ),
          // tabBarActiveTintColor: COLORS.ORANGE,
          // tabBarInactiveTintColor: COLORS.BLACK,
        }} />
      <Tab.Screen name='Shop' component={ShopScreen}
        options={{
          title: 'Shop',
          tabBarIcon: ({ focused }) => (
            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <Path
                fill="#625e5e"
                fillRule="evenodd"
                d="M7.307 1.25c-.801 0-1.35 0-1.84.133a3.75 3.75 0 0 0-2.36 1.936c-.227.452-.334.991-.491 1.777l-.62 3.098a3.79 3.79 0 0 0 .754 3.117v2.745c0 1.838 0 3.294.153 4.433c.158 1.172.49 2.121 1.238 2.87c.748.748 1.697 1.08 2.87 1.238c1.139.153 2.595.153 4.432.153h1.113c1.838 0 3.294 0 4.433-.153c1.172-.158 2.121-.49 2.87-1.238c.748-.749 1.08-1.698 1.238-2.87c.153-1.14.153-2.595.153-4.433v-2.744a3.79 3.79 0 0 0 .753-3.118l-.62-3.098c-.156-.786-.264-1.325-.49-1.777a3.75 3.75 0 0 0-2.361-1.936c-.489-.133-1.038-.133-1.84-.133zm10.961 11.5a3.8 3.8 0 0 0 1.482-.298V14c0 1.907-.002 3.262-.14 4.29c-.135 1.005-.389 1.585-.812 2.008s-1.003.677-2.01.812a16 16 0 0 1-1.538.114v-2.756c0-.44 0-.82-.028-1.13c-.03-.33-.096-.656-.274-.963a2.25 2.25 0 0 0-.823-.824c-.307-.177-.633-.243-.963-.273c-.31-.028-.69-.028-1.13-.028h-.065c-.44 0-.819 0-1.13.028c-.33.03-.655.096-.962.273a2.25 2.25 0 0 0-.824.824c-.177.307-.243.633-.273.962c-.028.312-.028.691-.028 1.13v2.757a16 16 0 0 1-1.54-.114c-1.005-.135-1.585-.389-2.008-.812s-.677-1.003-.812-2.009c-.139-1.027-.14-2.382-.14-4.289v-1.548a3.81 3.81 0 0 0 4.588-1.306A3.9 3.9 0 0 0 12 12.75a3.9 3.9 0 0 0 3.162-1.604a3.8 3.8 0 0 0 3.106 1.604m-8.018 8.498q.582.002 1.25.002h1q.668 0 1.25-.002V18.5c0-.481-.001-.792-.022-1.027c-.02-.225-.055-.307-.079-.348a.75.75 0 0 0-.274-.274c-.041-.024-.123-.058-.348-.079A13 13 0 0 0 12 16.75c-.481 0-.792 0-1.027.022c-.226.02-.307.055-.348.079a.75.75 0 0 0-.275.274c-.023.04-.058.123-.078.348c-.021.235-.022.546-.022 1.027zM8.67 2.75H7.418c-.954 0-1.285.007-1.553.08a2.25 2.25 0 0 0-1.416 1.161c-.125.249-.196.571-.383 1.507l-.598 2.99a2.31 2.31 0 1 0 4.562.683l.069-.686l.004-.042zm.921 5.875l.588-5.875h3.642l.584 5.842a2.417 2.417 0 1 1-4.814.033m8.544-5.795c-.268-.073-.599-.08-1.553-.08h-1.254l.643 6.42a2.309 2.309 0 1 0 4.561-.682l-.597-2.99c-.188-.936-.259-1.258-.383-1.507a2.25 2.25 0 0 0-1.417-1.161"
                clipRule="evenodd"
              />
            </Svg>
          ),
          headerShown:false
          // tabBarActiveTintColor: COLORS.ORANGE,
          // tabBarInactiveTintColor: COLORS.BLACK,
        }}
      />
      <Tab.Screen name='Vet' component={VetenerianScreen}
        options={{
          title: 'Vet',
          tabBarIcon: ({ focused }) => (
            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
              <Path
                fill="#048b0c"
                d="M18.25 6A2.25 2.25 0 0 0 16 8.25V16H8.25A2.25 2.25 0 0 0 6 18.25v11.5A2.25 2.25 0 0 0 8.25 32H16v7.75A2.25 2.25 0 0 0 18.25 42h11.5A2.25 2.25 0 0 0 32 39.75V32h7.75A2.25 2.25 0 0 0 42 29.75v-11.5A2.25 2.25 0 0 0 39.75 16H32V8.25A2.25 2.25 0 0 0 29.75 6z"
              />
            </Svg>
          ),
          headerShown:false
          // tabBarActiveTintColor: COLORS.ORANGE,
          // tabBarInactiveTintColor: COLORS.BLACK,
        }}
      />
      <Tab.Screen name='Flash' component={FlashDoorScreen}
        options={{
          title: 'Flash',
          tabBarIcon: ({ focused }) => (
            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
              <Path
                fill="#b53d3d"
                d="M7.212 2c-.474 0-.89.314-1.021.77l-2.25 7.874a1.062 1.062 0 0 0 1.022 1.354H6.23l-1.17 4.68c-.264 1.055 1.041 1.777 1.796.995l8.676-8.858l.004-.004c.64-.667.18-1.811-.767-1.811h-2.564l1.262-3.594l.002-.008A1.062 1.062 0 0 0 12.461 2z"
              />
            </Svg>
          ),
          // tabBarActiveTintColor: COLORS.ORANGE,
          // tabBarInactiveTintColor: COLORS.BLACK,
        }}
      />
    </Tab.Navigator>

  )
}


