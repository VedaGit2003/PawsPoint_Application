import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon, MicrophoneIcon } from 'react-native-heroicons/solid'

const SearchBar = ({placeholder}) => {
  return (
    <View className='w-full bg-white rounded-md p-2 flex flex-row justify-between items-center my-3'>
    <TextInput placeholder={placeholder || 'Search Here...'} className='text-xl font-semibold text-gray-500 w-[75%]'></TextInput>
    <View className='flex flex-row gap-4'>
      <MagnifyingGlassIcon size={25} color={'black'} />
      <MicrophoneIcon size={25} color={'black'} />
    </View>
  </View>
  )
}

export default SearchBar