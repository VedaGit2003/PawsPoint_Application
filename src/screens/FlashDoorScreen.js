import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Navbar from '../Shared/Navbar';


const FlashDoorScreen = () => {
  const categories = ['Snacks', 'Drinks', 'Dairy', 'Bakery', 'Fruits', 'Vegetables'];
  const products = [
    { id: 1, name: 'Apple', price: 1.5, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Frame106723285_1_147dc0ea-4b1d-4359-b31e-057dc4b71e21.png?v=1716390398' },
    { id: 2, name: 'Banana', price: 0.5, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/3_4_92f49d09-c691-4338-8142-a406309eee1e.jpg?v=1713775569' },
    { id: 3, name: 'Milk', price: 2.0, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Frame106722110.png?v=1734519849' },
    { id: 4, name: 'Bread', price: 1.0, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/files/Pawgypets_31.png?v=1732098375' },
    { id: 5, name: 'Eggs', price: 3.0, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/products/Frame1-2022-09-28T125515.223.png?v=1734520507' },
    { id: 6, name: 'Juice', price: 2.5, image: 'https://cdn.shopify.com/s/files/1/0565/8021/0861/products/Frame1-2022-09-28T125515.223.png?v=1734520507' },
  ];

  return (
    <View className="bg-gray-900 h-full">
      {/* Header */}
      <View className="bg-black p-4">
        <Navbar/>
        
      </View>
      <Text className='p-3 bg-yellow-500 text-xl text-white font-semibold'>Delevered in 11 min</Text>

      {/* Categories Section */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="h-60 py-4 bg-gray-800">
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            className="h-50 w-50 bg-white mx-2 px-4 py-2 rounded-lg shadow-sm border border-gray-300"
          >
            <Text className="text-gray-700 font-semibold">{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Banner Section */}
      <View className="my-4 mx-4">
        <Image
          source={{
            uri: 'https://supertails.com/cdn/shop/files/Frame_1405178628_desk-min_eaa5a730-4142-497f-9de4-fa89a19def40.png?v=1735310374',
          }}
          style={{ width: '100%', height: 120, borderRadius: 8 }}
          resizeMode="cover"
        />
      </View>

      {/* Products Section */}
      <ScrollView contentContainerStyle={{ paddingHorizontal: 8 }} showsVerticalScrollIndicator={false}>
        <View className="flex flex-wrap flex-row justify-between">
          {products.map((product) => (
            <View
              key={product.id}
              className="w-[48%] bg-white rounded-lg shadow-md p-4 mb-4 border border-gray-200"
            >
              <Image
                source={{ uri: product.image }}
                style={{ width: '100%', height: 100, borderRadius: 8 }}
                resizeMode="cover"
              />
              <Text className="text-gray-800 text-lg font-bold mt-2">{product.name}</Text>
              <Text className="text-gray-500 text-sm">${product.price.toFixed(2)}</Text>
              <TouchableOpacity className="bg-green-500 mt-2 py-2 rounded-md">
                <Text className="text-white text-center">Add to Cart</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Footer / Sticky Action */}
      <View className="bg-white py-4 px-6 shadow-lg">
        <TouchableOpacity className="bg-orange-500 py-3 rounded-md">
          <Text className="text-white text-lg font-bold text-center">View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FlashDoorScreen;
