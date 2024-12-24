import { View, Text, StatusBar, TouchableOpacity, Alert } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import TextInputComponent from '../Shared/TextInputComponent'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Backend_URL } from '../utils/Urls';
import { BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const LoginScreen = () => {

 const [email,setEmail]=useState('')
 const [password,setPassword]=useState('')


 const navigation=useNavigation()

  // Disable the back button only when this screen is in focus
  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        Alert.alert('Hold on!', 'Are you sure you want to exit?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          { text: 'YES', onPress: () => BackHandler.exitApp() },
        ]);
        return true; // Prevents default behavior
      };

      const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

      return () => backHandler.remove(); // Cleanup when leaving the screen
    }, [])
  );

 const handleLogin=async()=>{
  try{
    const trimmedEmail=email.trim()
    // set the data which was passed from frontend to backend 
    const data={
      email: trimmedEmail,
      password: password,
    }

    //call the api
    const response = await axios.post(`${Backend_URL}api/v1/users/login`, data);
    if (response && response.data?.statusCode===200){
        const token=response.data.data?.token
        await AsyncStorage.setItem('token',token)
        console.log(response.data)
           // Navigate directly to the Home tab (or any other tab screen)
           navigation.navigate('Tabs')
    }
    else{
      alert('Login failed',response.data?.data?.errors)
    }
  }catch(error){
    alert("There is an error occured while login")
    console.log(error)
  }
 }

  return (
    <View className='h-full w-full gap-2 bg-black'>
        <StatusBar style='light' />
    <View className='flex justify-center items-center pt-10 px-5'>

     <TextInputComponent title={"Enter your email"} theme={'dark'} placeHolder={"example@gmail.com"}
      type={'text'} required={"required"} value={email} setValue={setEmail}
      />
 <TextInputComponent title={"Enter your password"} theme={'dark'} placeHolder={"minimum 8 character"}
      type={'password'} required={"required"} value={password} setValue={setPassword}
      />

      
    </View>
    <TouchableOpacity className='w-full p-3' onPress={handleLogin}>
    <View className='bg-green-400 p-5 rounded-full'>
        <Text className='text-center text-white text-2xl font-bold'>Login</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity className='w-full px-3' onPress={()=>navigation.navigate('signUp')}>
    <View className='bg-gray-400 p-5 rounded-full'>
        <Text className='text-center text-white text-2xl font-bold'>Sign Up</Text>
    </View>
    </TouchableOpacity>
    </View>
  )
}

export default LoginScreen