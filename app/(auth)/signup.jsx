import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import { useRouter } from 'expo-router';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields');
      return;
    }

    if (!/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      // on success

      router.replace('/(tabs)');

      // On failure:
      // setError('Invalid credentials');
    }, 1500)
  }

  return (
    <SafeAreaView className="bg-bg-primary flex-1">
      <View className='px-5 py-12'>
        <View className='items-center px-8 mb-5'>
          <Text className="text-white text-4xl font-bold">Join MovieHunt</Text>
          <Text className="text-gray-400 text-lg mt-2">Create your account</Text>
        </View>

        {/* Form */}
        <View className='gap-6'>
          {/* Name */}
          <View>
            <Text className='text-gray-300 mb-2 font-medium'>Full Name</Text>
            <View className="flex-row items-center bg-bg-tertiary rounded-xl px-4 py-4 border border-border focus-within:border-accent">
              <Feather name="user" size={20} color="#9CA3AF" />
              <TextInput
                className='flex-1 ml-3 text-white text-base'
                placeholder='Jhon Doe'
                placeholderTextColor="#6B7280"
                value={name}
                onChangeText={setName}
                autoCapitalize='words'
              />
            </View>
          </View>

          {/* Email */}
          <View>
            <Text className='text-gray-300 mb-2 font-medium'>Email</Text>
            <View className="flex-row items-center bg-bg-tertiary rounded-xl px-4 py-4 border border-border focus-within:border-accent">
              <Feather name="mail" size={20} color="#9CA3AF" />
              <TextInput
                className='flex-1 ml-3 text-white text-base'
                placeholder='your@email.com'
                placeholderTextColor="#6B7280"
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
              />
            </View>
          </View>

          {/* Password */}
          <View>
            <Text className='text-gray-300 mb-2 font-medium'>Password</Text>
            <View className="flex-row items-center bg-bg-tertiary rounded-xl px-4 py-4 border border-border focus-within:border-accent">
              <Feather name="lock" size={20} color="#9CA3AF" />
              <TextInput
                className='flex-1 ml-3 text-white text-base'
                placeholder='********'
                placeholderTextColor="#6B7280"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize='none'
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Feather
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={20}
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Confirm Password */}
          <View>
            <Text className='text-gray-300 mb-2 font-medium'>Password</Text>
            <View className="flex-row items-center bg-bg-tertiary rounded-xl px-4 py-4 border border-border focus-within:border-accent">
              <Feather name="lock" size={20} color="#9CA3AF" />
              <TextInput
                className='flex-1 ml-3 text-white text-base'
                placeholder='********'
                placeholderTextColor="#6B7280"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!confirmPassword}
                autoCapitalize='none'
              />
              <TouchableOpacity onPress={() => setConfirmPassword(!confirmPassword)}>
                <Feather
                  name={confirmPassword ? 'eye' : 'eye-off'}
                  size={20}
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Error */}
          {error ? (
            <Text className="text-red-500 text-center mt-2">{error}</Text>
          ) : null}

          <TouchableOpacity
            onPress={handleLogin}
            disabled={loading}
            className={`bg-accent rounded-xl py-4 items-center mt-6 ${loading ? 'opacity-70' : ''}`}
          >
            {loading ? (
              <ActivityIndicator color="white" size="small" />
            ) : (
              <Text className="text-white text-lg font-semibold">Sign In</Text>
            )}
          </TouchableOpacity>


          {/* Login Link */}
          <View className="flex-row justify-center mt-8 gap-1">
            <Text className="text-gray-400">Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push('/login')}>
              <Text className="text-accent font-medium">Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Signup