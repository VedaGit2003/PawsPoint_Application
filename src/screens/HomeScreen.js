import React, { useCallback } from 'react'
import { View, Text, ScrollView, TextInput, Image, StatusBar, ImageBackground, TouchableOpacity, Alert, BackHandler } from 'react-native'
import { BellIcon,  HomeIcon, UserCircleIcon } from 'react-native-heroicons/outline'
import { MagnifyingGlassIcon, MicrophoneIcon,HeartIcon} from 'react-native-heroicons/solid'
import { RotateInUpRight } from 'react-native-reanimated'
import { LinearGradient } from 'react-native-svg'
import { useFocusEffect, useNavigation } from '@react-navigation/native'



const HomeScreen = () => {
  const navigator=useNavigation()

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
  return (
    <View className="h-full w-screen bg-black">
      <StatusBar style='light' />
      <ScrollView contentContainerStyle={{ paddingLeft: 10, paddingRight: 10 }}>

        {/* Navbar  */}
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
        {/* Navbar end  */}
        {/* Search bar  */}
        <View className='w-full bg-white rounded-md p-2 flex flex-row justify-between items-center my-3'>
          <TextInput placeholder='Search Here...' className='text-xl font-semibold text-gray-500 w-[75%]'></TextInput>
          <View className='flex flex-row gap-4'>
            <MagnifyingGlassIcon size={25} color={'black'} />
            <MicrophoneIcon size={25} color={'black'} />
          </View>
        </View>
        {/* Banner  */}
        <View className=' rounded-3xl my-3'>
          <Image source={{ uri: 'https://supertails.com/cdn/shop/files/Main_sale_gen_mob-min_468df311-04d3-483e-a6f6-9f8c21fe691d.png?v=1733338288https://supertails.com/cdn/shop/files/Main_sale_gen_mob-min_468df311-04d3-483e-a6f6-9f8c21fe691d.png?v=1733338288' }}
            style={{ width: '100%', height: '130', borderRadius: 10 }}
          ></Image>
        </View>

        {/* Message  */}
        <View className='my-3'>
          <Text className='text-4xl text-amber-400 font-extrabold'>Services..</Text>
        </View>

        {/* Services  */}
        <View className='flex flex-col gap-2 my-3'>
          <View className='flex flex-row h-64 gap-3'>
            {/* // Per Food  */}
            <View className='w-[48%] h-[100%] bg-white/40   rounded-lg flex flex-col items-center justify-between'>
              <View className='flex justify-center items-center pt-5'>
              <Text className='text-2xl text-orange-400 font-extrabold'>Pet Foods</Text>
              <Text className='text-sm text-white'>Find your best choice</Text>
              <Text className='text-sm text-black bg-yellow-400 px-2 mt-4 rounded-full'>Live now</Text>
              
              </View>
              <Image source={require('../Images/dogfood.png')} 
              style={{height:'100',width:'100'}}></Image>
            </View>

            
            <View className='w-[48%] h-[100%] flex flex-col gap-1'>
              {/* Medical support  */}
              
              <ImageBackground  source={require('../Images/Doctor_background.png')} className='w-[100%] h-[50%] p-3' >
              <TouchableOpacity className='w-full h-full' onPress={()=>navigator.navigate('Vet')}>
              <Text className='text-2xl font-extrabold text-blue-500'>Medical Support</Text>
              <Text className='text-sm text-gray-600'>find your vet for your pet..</Text>
              </TouchableOpacity>
              </ImageBackground>
              
              {/* Pet Accesories */}
              <TouchableOpacity className='w-[100%] h-[50%] bg-white rounded-lg justify-center overflow-hidden'
              onPress={()=>navigator.navigate('Shop')}>
                <View className='flex p-2' >
                <Text className='w-full text-center font-extrabold text-xl mt-2'>Pet Accessories</Text>
                <Text className='absolute font-bold text-sm top-12 left-14 px-5 rounded-full bg-orange-400 text-white' >Creazy Deals</Text>
                </View>
                <Image source={require('../Images/DogToy.png')} style={{height:'100',width:'100'}} />
              </TouchableOpacity>
            </View>

          </View>
          <View className='flex flex-row h-52 gap-3'>
            <View className='w-[48%] h-[80%] bg-orange-500 rounded-lg flex justify-between'>
            <Image source={require('../Images/flash.png')} style={{height:'100',width:'100'}} />
            <Text className='absolute font-bold text-sm top-8 left-24 px-5 py-2 rounded-full bg-amber-400 text-black' >18 min</Text>
            <View className='flex p-2' >
                <Text className='w-full text-center font-extrabold text-white text-xl'>Flash Door Delivery</Text>
                </View>
            </View>
            <View className='w-[48%] h-full bg-white/90 rounded-lg flex justify-between'>
            <View className='flex p-2' >
                <Text className='w-full text-center font-extrabold text-xl mt-2'>Buy or Adapt Pets</Text>
                <Text className='w-full text-center text-gray-400 font-extrabold text-xl'>All over India</Text>
                <Text className='absolute font-bold text-sm top-20 left-14 px-5 rounded-full bg-green-400 text-white' >Lowest Price</Text>
                </View>
                <Image source={require('../Images/Pets.png')} style={{height:'100',width:'100',left:60}} />
            </View>
          </View>
        </View>


        {/* Copy Right  */}
        <View className='flex flex-col mb-4'>
         <Text className='text-5xl font-extrabold text-white/40'>Crafted with <HeartIcon size={34} color={'red'}></HeartIcon> </Text>
         <Text className='text-5xl font-extrabold text-white/40'>@ Kolkata</Text>
        </View>


      </ScrollView>
    </View>
  )
}

export default HomeScreen