import { View, Text, ScrollView, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';
import SearchBar from '../Shared/SearchBar';
import axios from 'axios';
import { Backend_URL } from '../utils/Urls';

const VetsList = () => {
    const [vets, setVets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAllVets = async () => {
        setIsLoading(true); // Start loading
        try {
            const response = await axios.get(Backend_URL + 'api/v1/appointments/getallvets');
            const { data } = response.data;
            if (Array.isArray(data)) {
                setVets(data);
            } else {
                console.log("Data is not an array");
            }
        } catch (error) {
            console.error("Error fetching vets: ", error);
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    useEffect(() => {
        getAllVets();
    }, []);

    return (
        <View className="w-full h-full bg-emerald-200">
            {/* Navbar and Search Bar */}
            <View className="w-full px-1 bg-emerald-600">
                <Navbar />
                <SearchBar placeholder="Search your vet..." />
            </View>

            {/* Content Area */}
            <View className="flex-1 p-4">
                {isLoading ? (
                    // Show loading spinner
                    <View className="flex-1 justify-center items-center">
                        <ActivityIndicator size="large" color="#10B981" />
                        <Text className="text-gray-600 mt-2">Loading vets...</Text>
                    </View>
                ) : (
                    // Show the list of vets once loaded
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {vets.map((vet) => (
                            <View
                                key={vet._id}
                                className="flex-row bg-white rounded-lg shadow-md mb-4 p-4"
                                style={{ alignItems: 'center' }}
                            >
                                {/* Left: Profile Image */}
                                <Image
                                    source={{
                                        uri: vet.profile_Image || 'https://plus.unsplash.com/premium_photo-1663133414738-d8e2c14e05ad?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHZldGVyaW5hcnl8ZW58MHx8MHx8fDA%3D',
                                    }}
                                    className="w-16 h-16 rounded-full mr-4"
                                    style={{ resizeMode: 'cover' }}
                                />

                                {/* Right: Vet Details */}
                                <View className="flex-1">
                                    <Text className="text-lg font-bold text-gray-800">
                                        {vet.user_Name}
                                    </Text>
                                    <Text className="text-sm text-gray-600">{vet.user_Role}</Text>
                                    <Text className="text-sm text-gray-500">{vet.vet_Type}</Text>
                                    <Text className="text-sm text-gray-500">
                                        {vet.vet_Description}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                )}
            </View>
        </View>
    );
};

export default VetsList;

