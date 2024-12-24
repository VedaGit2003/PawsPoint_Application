import { View, Text, TouchableOpacity, StatusBar, Alert } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const UserProfile = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('Token before clear:', token);

      // Clear AsyncStorage
      await AsyncStorage.clear();
      console.log('AsyncStorage cleared');

      // Navigate to the SignUp screen
      navigation.navigate('signUp');
    } catch (error) {
      console.error('Logout failed:', error);
      Alert.alert('Error', 'An error occurred during logout. Please try again.');
    }
  };

  return (
    <View className="h-full w-full flex justify-center items-center bg-black p-4">
      <StatusBar style="light" />
      <Text className="text-white text-center text-3xl font-bold">User Profile</Text>

      {/* Logout Button */}
      <TouchableOpacity onPress={handleLogout} accessibilityLabel="Logout Button">
        <Svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
          <Path
            fill="#b53d3d"
            fillRule="evenodd"
            d="M10.796 2.244C12.653 1.826 14 3.422 14 5v14c0 1.578-1.347 3.174-3.204 2.756C6.334 20.752 3 16.766 3 12s3.334-8.752 7.796-9.756m5.497 6.049a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L17.586 13H9a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414"
            clipRule="evenodd"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfile;
