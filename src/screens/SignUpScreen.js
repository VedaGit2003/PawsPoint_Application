import { View, Text, StatusBar, TouchableOpacity, Alert, BackHandler } from 'react-native'
import React, { useCallback, useState } from 'react'
import TextInputComponent from '../Shared/TextInputComponent'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Backend_URL } from '../utils/Urls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const SignUpScreen = () => {
 const [name,setName]=useState('')
 const [email,setEmail]=useState('')
 const [password,setPassword]=useState('')
 const [confirmPassword,setConfirmPassword]=useState('')

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
 
      //  return () => backHandler.remove(); // Cleanup when leaving the screen
     }, [])
   );

 const handleSignUp=async()=>{
  try{
    // check if password is matched with confirm password 
    if (password!==confirmPassword){
     alert('Password does not match with confirm password')
     return
    }
    //set user role
    const userRole='consumer';

    // set the data which was passed from frontend to backend 
    const data={
      user_Name: name,
      email: email,
      password: password,
      user_Role: userRole,
    }

    //call the api
    const response = await axios.post(`${Backend_URL}api/v1/users/auth/sign-up`, data);
    if (response && response.data?.statusCode===201){
        const token=response.data.data?.token
        await AsyncStorage.setItem('token',token)
        navigation.navigate('Tabs')
    }
    else{
      alert('Sign up failed',response.data?.errors)
    }
  }catch(error){
    alert("There is an error occured while signup")
    console.log(error)
  }
 }

  return (
    <View className='h-full w-full gap-2 bg-black'>
        <StatusBar style='light' />
    <View className='flex justify-center items-center pt-10 px-5'>
      <TextInputComponent title={"Enter your name"} theme={'dark'} placeHolder={"Full name"}
      type={'text'} required={"required"} value={name} setValue={setName}
      />
     <TextInputComponent title={"Enter your email"} theme={'dark'} placeHolder={"example@gmail.com"}
      type={'text'} required={"required"} value={email} setValue={setEmail}
      />
 <TextInputComponent title={"Enter your password"} theme={'dark'} placeHolder={"minimum 8 character"}
      type={'password'} required={"required"} value={password} setValue={setPassword}
      />
 <TextInputComponent title={"Enter your password again"} theme={'dark'} placeHolder={"Confirm your password"}
      type={'password'} required={"required"} value={confirmPassword} setValue={setConfirmPassword}
      />
      
    </View>
    <TouchableOpacity className='w-full p-3' onPress={handleSignUp}>
    <View className='bg-green-400 p-5 rounded-full'>
        <Text className='text-center text-white text-2xl font-bold'>Sign Up</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity className='w-full px-3' onPress={()=>navigation.navigate('logIn')}>
    <View className='bg-gray-400 p-5 rounded-full'>
        <Text className='text-center text-white text-2xl font-bold'>Login</Text>
    </View>
    </TouchableOpacity>
    </View>
  )
}

export default SignUpScreen