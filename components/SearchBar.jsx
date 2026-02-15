import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({placeholder, value, onChangeText}) => {
  return (
    <View className='flex-row items-center bg-bg-tertiary rounded-full px-4 py-2 gap-1'>
      <Feather name="search" size={24} color="#a8b5db" />
      <TextInput
        onPress={() => { }}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        className='text-[#a8b5db]'
      />
    </View>
  )
}

export default SearchBar