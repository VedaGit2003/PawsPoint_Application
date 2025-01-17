import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { HomeIcon, UserCircleIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

const Navbar = () => {
    const navigator=useNavigation()
  return (
    <View className='flex flex-row justify-between items-center my-3'>
    <View className='flex flex-row gap-4 justify-center items-center'>
      <HomeIcon size={30} color={'white'} />
      <View>
        <Text className='font-bold text-xl text-white'>Home</Text>
        <Text className='font-light text-white/65'>441/A,Nilachal North,Birati...</Text>
      </View>
    </View>
    <TouchableOpacity onPress={()=>navigator.navigate('userProfile')}>
    <UserCircleIcon size={30} color={'white'} />
    </TouchableOpacity>
    
  </View>
  )
}

export default Navbar