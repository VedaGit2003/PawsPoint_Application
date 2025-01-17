import { View, Text, ScrollView, Image, Alert, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../Shared/Navbar'
import SearchBar from '../Shared/SearchBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'
import { Backend_URL } from '../utils/Urls'


const FoodScreen = () => {
const [products,setProducts]=useState([])
const [loading,setLoading]=useState(true)
const [pagination,setPagination]=useState(null)

const fetchProducts=async()=>{
  try{
    const response = await axios.get(Backend_URL + 'api/v1/products',{
      params:{
        page: 1,
        category: "Food",
        sort: "-price",
      }
    })
    setProducts(response.data.data)
    setLoading(false)

    // console.log(response.data.data)
  }catch(error){
    Alert.alert("There was an error while getting products")
    console.log(error)
  }
}
useEffect(()=>{
  fetchProducts()
},[])

  return (
    <View className='w-full h-full bg-black p-2'>
      <Navbar />
      <SearchBar />
      <SafeAreaView className='w-full h-full  flex flex-row py-4'>
        <ScrollView showsVerticalScrollIndicator={false} className='w-[25%] bg-gray-500  p-1 px-2'>
          <View className='w-full h-32  my-2 p-2 bg-white rounded-md'>
            <Image source={{ uri: 'https://plus.unsplash.com/premium_vector-1731673632543-1298fa4fd66a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGtpZG5leXxlbnwwfHwwfHx8MA%3D%3D' }}
              style={{ width: '100%', height: '80%', borderRadius: 50, borderColor: 'gray', borderWidth: 1 }} />
            <Text className='text-center'>Liver</Text>
          </View>
          <View className='w-full h-32  my-2 p-2 bg-white rounded-md'>
            <Image source={{ uri: 'https://plus.unsplash.com/premium_vector-1731673632543-1298fa4fd66a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGtpZG5leXxlbnwwfHwwfHx8MA%3D%3D' }}
              style={{ width: '100%', height: '80%', borderRadius: 50, borderColor: 'gray', borderWidth: 1 }} />
            <Text className='text-center'>Liver</Text>
          </View>
          <View className='w-full h-32  my-2 p-2 bg-white rounded-md'>
            <Image source={{ uri: 'https://plus.unsplash.com/premium_vector-1731673632543-1298fa4fd66a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGtpZG5leXxlbnwwfHwwfHx8MA%3D%3D' }}
              style={{ width: '100%', height: '80%', borderRadius: 50, borderColor: 'gray', borderWidth: 1 }} />
            <Text className='text-center'>Liver</Text>
          </View>
          <View className='w-full h-32  my-2 p-2 bg-white rounded-md'>
            <Image source={{ uri: 'https://plus.unsplash.com/premium_vector-1731673632543-1298fa4fd66a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGtpZG5leXxlbnwwfHwwfHx8MA%3D%3D' }}
              style={{ width: '100%', height: '80%', borderRadius: 50, borderColor: 'gray', borderWidth: 1 }} />
            <Text className='text-center'>Liver</Text>
          </View>
          <View className='w-full h-32  my-2 p-2 bg-white rounded-md'>
            <Image source={{ uri: 'https://plus.unsplash.com/premium_vector-1731673632543-1298fa4fd66a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGtpZG5leXxlbnwwfHwwfHx8MA%3D%3D' }}
              style={{ width: '100%', height: '80%', borderRadius: 50, borderColor: 'gray', borderWidth: 1 }} />
            <Text className='text-center'>Liver</Text>
          </View>
          <View className='w-full h-32  my-2 p-2 bg-white rounded-md'>
            <Image source={{ uri: 'https://plus.unsplash.com/premium_vector-1731673632543-1298fa4fd66a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGtpZG5leXxlbnwwfHwwfHx8MA%3D%3D' }}
              style={{ width: '100%', height: '80%', borderRadius: 50, borderColor: 'gray', borderWidth: 1 }} />
            <Text className='text-center'>Liver</Text>
          </View>
          <View className='w-full h-32  my-2 p-2 bg-white rounded-md'>
            <Image source={{ uri: 'https://plus.unsplash.com/premium_vector-1731673632543-1298fa4fd66a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGtpZG5leXxlbnwwfHwwfHx8MA%3D%3D' }}
              style={{ width: '100%', height: '80%', borderRadius: 50, borderColor: 'gray', borderWidth: 1 }} />
            <Text className='text-center'>Liver</Text>
          </View>
          <View className='w-full h-32  my-2 p-2 bg-white rounded-md'>
            <Image source={{ uri: 'https://plus.unsplash.com/premium_vector-1731673632543-1298fa4fd66a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGtpZG5leXxlbnwwfHwwfHx8MA%3D%3D' }}
              style={{ width: '100%', height: '80%', borderRadius: 50, borderColor: 'gray', borderWidth: 1 }} />
            <Text className='text-center'>Liver</Text>
          </View>
          <View className='w-full h-32  my-2 p-2 bg-white rounded-md'>
            <Image source={{ uri: 'https://plus.unsplash.com/premium_vector-1731673632543-1298fa4fd66a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGtpZG5leXxlbnwwfHwwfHx8MA%3D%3D' }}
              style={{ width: '100%', height: '80%', borderRadius: 50, borderColor: 'gray', borderWidth: 1 }} />
            <Text className='text-center'>Liver</Text>
          </View>
        </ScrollView>
        <View className="bg-slate-800 w-[75%] p-1 px-2 py-2 pb-48">
    {loading ? (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    ) : (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          flexDirection: 'row',
          flexGrow: 1,
        }}
      >
        {products.map((product, index) => (
          <TouchableOpacity key={product._id} className="w-[49%] bg-slate-50 my-1">
            <View className="w-full">
              {/* Product Image */}
              <Image
                source={{ uri: product.product_Images[0] }}
                style={{ height: 90 }}
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
    )}
  </View>
      </SafeAreaView>
    </View>
  )
}

export default FoodScreen