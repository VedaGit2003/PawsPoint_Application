import React from 'react';
import { View, Text, TextInput } from 'react-native';

const TextInputComponent = ({ title, theme, placeHolder, type, required, value, setValue }) => {
  const isLightTheme = theme === 'light';

  return (
    <View className={`flex flex-col w-full justify-center  mb-2 ${isLightTheme ? 'bg-white' : 'bg-gray-900'}`}>
      <Text
        className={`text-xl font-semibold relative top-0.5 ml-2 px-1 self-start ${isLightTheme ? 'text-black bg-gray-200' : 'text-amber-400 bg-black'}`}
      >
        {title}:
      </Text>
      <TextInput
        placeholder={placeHolder}
        value={value}
        onChangeText={(text) => setValue(text)}
        className={`px-2.5 py-2 font-bold  w-full text-xs border-2 rounded-md  ${isLightTheme ? 'bg-gray-100 text-black border-gray-400 placeholder-gray-500' : 'bg-white text-black border-gray-700 placeholder-gray-500'}`}
        placeholderTextColor={isLightTheme ? '#a1a1a1' : '#c9c7c1'}
        keyboardType={type === 'number' ? 'numeric' : 'default'}
        secureTextEntry={type === 'password'}
        required={required}
      />
    </View>
  );
};

export default TextInputComponent;