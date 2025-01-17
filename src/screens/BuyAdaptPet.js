import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Navbar from '../Shared/Navbar';
import { StatusBar } from 'expo-status-bar';

const BuyAdaptPet = () => {
  const categories = ['Dogs', 'Cats', 'Birds', 'Rabbits', 'Fish', 'Reptiles'];

  return (
    <ScrollView className="bg-gray-100 px-0.5">
       <StatusBar barStyle={'light-content'}  />
       <View className="w-full h-96 mb-2">
  <Image
    source={{
      uri: 'https://media.istockphoto.com/id/1397843652/photo/shot-of-a-young-family-sitting-on-the-living-room-floor-with-their-dog.webp?a=1&b=1&s=612x612&w=0&k=20&c=G9i-90P2tqgykCztC0oyn8OcB2PSXcWaGqa1zSL8GQc=',
    }}
    style={{
      width: '100%',
      height: '100%',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    }}
    resizeMode="cover" // Ensures the image covers the full container height and width
  />
</View>
      {/* Header */}
      <View className="bg-blue-600 p-4">
        <Text className="text-white text-xl font-bold text-center">Welcome to Pet World!</Text>
        <Text className="text-white text-sm text-center">Find your furry, feathery, or scaly friend today!</Text>
      </View>

      {/* Categories Section */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="py-4">
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            className="mx-2 bg-blue-500 p-4 rounded-lg shadow-md"
          >
            <Text className="text-white font-bold text-center">{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Message */}
      <View className="bg-yellow-200 py-4 px-6 my-4 rounded-md mx-4 shadow-md">
        <Text className="text-yellow-800 text-center font-medium">
          "Pets are not just animals, they're family. Find your new best friend today!"
        </Text>
      </View>

      {/* Buy & Adapt Options */}
      <View className="flex flex-row justify-around mt-4">
        <TouchableOpacity className="bg-green-500 p-6 rounded-lg w-[40%] shadow-lg">
          <Text className="text-white text-lg font-bold text-center">Buy</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-orange-500 p-6 rounded-lg w-[40%] shadow-lg">
          <Text className="text-white text-lg font-bold text-center">Adapt</Text>
        </TouchableOpacity>
      </View>

      {/* Another Message */}
      <View className="bg-blue-200 py-4 px-6 my-6 rounded-md mx-4 shadow-md">
        <Text className="text-blue-800 text-center font-medium">
          "Adopt a pet, save a life, and add unconditional love to your home."
        </Text>
      </View>
    </ScrollView>
  );
};

export default BuyAdaptPet;
