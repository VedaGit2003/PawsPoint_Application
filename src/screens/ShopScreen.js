import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Backend_URL } from '../utils/Urls';
import { MagnifyingGlassIcon, MicrophoneIcon, UserCircleIcon } from 'react-native-heroicons/solid';
import { HomeIcon } from 'react-native-heroicons/outline';

const ShopScreen = () => {
  const [products, setProducts] = useState([]);
  const navigation=useNavigation()

  // Function to fetch products from the API
  const getProduct = async () => {
    try {
      const response = await axios.get(Backend_URL + 'api/v1/products');
      const { data } = response.data; // Extract the 'data' array
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        console.error('API "data" property is not an array:', data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Fetch products when the component is mounted
  useEffect(() => {
    getProduct();
  }, [products]);

  return (
    <View className='h-full bg-black'>
      <View className=' w-full bg-orange-500 mb-2 rounded-b-3xl p-2'>
       {/* Navbar  */}
       <View className='flex flex-row justify-between items-center my-3'>
          <View className='flex flex-row gap-4 justify-center items-center'>
            <HomeIcon size={30} color={'white'} />
            <View>
              <Text className='font-bold text-xl text-white'>Home</Text>
              <Text className='font-light text-white/65'>441/A,Nilachal North,Birati...</Text>
            </View>
          </View>
          <UserCircleIcon size={30} color={'white'} />
        </View>
      {/* search bar  */}
      <View className='w-full bg-white rounded-md p-2 flex flex-row justify-between items-center my-3'>
          <TextInput placeholder='Search Here...' className='text-xl font-semibold text-gray-500 w-[75%]'></TextInput>
          <View className='flex flex-row gap-4'>
            <MagnifyingGlassIcon size={25} color={'black'} />
            <MicrophoneIcon size={25} color={'black'} />
          </View>
        </View>
        {/* search bar end  */}
        <View className='w-full'>
           <Image source={require('../Images/shop_banner.png')} style={{width:'100%',height:200}} />
        </View>
      </View>
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}
    >
      {products.map((product) => (
        <TouchableOpacity key={product._id} onPress={()=>navigation.navigate('singleProduct',{productId:product._id})}
        className="w-[48%] bg-white rounded-lg mb-4 shadow-md overflow-hidden"
        >
        <View
          className="w-full"
        >
          {/* Product Image */}
          <Image
            source={{ uri: product.product_Images[0] }}
            className="w-full h-36"
            resizeMode="cover"
          />

          {/* Product Name */}
          <Text className="text-lg font-semibold text-gray-800 mt-2 px-3">
            {product.name}
          </Text>

          {/* Product Price */}
          <Text className="text-sm font-medium text-gray-500 mb-3 px-3">
            ${product.price.toFixed(2)}
          </Text>
        </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </View>
  );
};

export default ShopScreen;