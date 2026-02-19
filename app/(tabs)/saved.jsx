import { View, Text } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const Saved = () => {
  return (
    <View className='flex-1 bg-bg-primary px-10'>
      <View className='justify-center items-center flex-1 flex-col gap-5 rounded-full '>
        <Feather name="bookmark" size={24} color="#fff" />
        <Text className='text-gray-500 text-base'>Save</Text>
      </View>
    </View>
  )
}

export default Saved