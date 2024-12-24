import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Backend_URL } from '../utils/Urls';
import { ShoppingCartIcon } from 'react-native-heroicons/solid';

const SingleProduct = ({ route }) => {
    const { productId } = route.params;
    
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchProduct = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${Backend_URL}api/v1/products/p/${productId}`);
            setProduct(response.data.data); 
        } catch (error) {
            alert("Error fetching the product");
            console.error("Error fetching product:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (productId) {
            fetchProduct();
        }
    }, [productId]);

    return (
        <View className="flex-1  bg-black">
            {isLoading ? (
                <Text className="text-lg text-center">Loading...</Text>
            ) : product ? (
                <View className="h-full flex p-5 bg-black">
                    <Image
                        source={{ uri: product.product_Images[0] }}
                        style={{width:'100%',height:300,borderBottomLeftRadius:20,borderBottomRightRadius:20}}
                    />
                    <Text className="text-4xl font-bold my-3 text-amber-400 p-3">{product.name}</Text>
                    <View className='mb-3 p-3 bg-green-400 rounded-full'>
                    <Text className="text-3xl font-extrabold text-black ">Price: Rs. {product.price}</Text>
                    </View>
                   <View className='flex flex-col h-fit  bg-amber-400 p-3 rounded-lg my-4'>
                   <Text className="text-md font-bold text-gray-800 mb-2">Brand: {product.brand}</Text>
                    <Text className="text-md font-bold text-gray-800 mb-2">Category: {product.category}</Text>
                    <Text className="text-md font-bold text-gray-600 mb-4">Description: {product.description}</Text>
                   </View>
                   <View className='flex flex-col items-center h-fit my-3 bg-orange-400 p-3 rounded-full '>
                   <Text className="text-4xl font-bold text-white mb-2 text-center">Buy Now</Text>
                   </View>
                   <View className='flex flex-col items-center h-fit my-0.5 bg-orange-400 p-3 rounded-full '>
<ShoppingCartIcon size={40} color={'white'} />
                   </View>           
                </View>
            ) : (
                <Text className="text-lg text-red-500 text-center">Product not found.</Text>
            )}
        </View>
    );
};

export default SingleProduct;



