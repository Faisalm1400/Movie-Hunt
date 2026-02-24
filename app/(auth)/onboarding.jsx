import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const OnBoarding = () => {
  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")

  return (
    <SafeAreaView edges={["top", "bottom"]} className="bg-bg-primary flex-1">
      <View>
        <View className=''>
          <Text className='text-white font-bold text-2xl capitalize'>Complete your profile</Text>
          <Text className='text-gray-300 text-sm'>Add your information to get started</Text>
        </View>

        {/* Form */}
        <View className='items-center w-full'>
          <TouchableOpacity className='mb-8 relative'>
            <View className='w-32 h-32 bg-bg-tertiary rounded-full justify-center items-center border-2 border-border'>
              <Text className='text-5xl text-[#fefe]'>+</Text>
            </View>
            <View className='absolute bottom-0 right-0 bg-accent px-3 py-2 rounded-2xl'>
              <Text className='text-xs font-semibold text-white'>Edit</Text>
            </View>
          </TouchableOpacity>

          <TextInput
            className='bg-[#f5f5f5] rounded-2xl p-4 mb-4 w-full border border-[#e0e0e0]'
            placeholder='Full Name'
            placeholderTextColor={"#999"}
            value={name}
            onChangeText={setName}
            autoCapitalize='words'
          />

          <TextInput
            className='bg-[#f5f5f5] rounded-2xl p-4 mb-4 w-full border border-[#e0e0e0]'
            placeholder='Username'
            placeholderTextColor={"#999"}
            value={userName}
            onChangeText={setUserName}
            autoCapitalize='none'
            autoComplete='username'
          />


        </View>
      </View>
    </SafeAreaView>
  )
}

export default OnBoarding