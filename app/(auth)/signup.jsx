import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { signUp } = useAuth();


  useEffect(()=>{
    router.push('/(auth)/onboarding')
  },[])

  const handleSignUp = async () => {
    setError('');

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert('Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      Alert.alert("Password must be at least 6 characters.")
      return
    }

    if (password !== confirmPassword) {
      Alert.alert("Password and Confirm Password must be the same.")
      return
    }

    if (!/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)) {
      Alert.alert('Please enter a valid email');
      return;
    }

    setLoading(true);

    try {
      await signUp(email, password)
    } catch (error) {
      console.log(error)
      Alert.alert("Error", "Failed to sign up.");
    } finally {
      Alert.alert("Success")
      setLoading(false)
    }



    // setTimeout(() => {
    //   setLoading(false);

    //   // on success

    //   router.replace('/(tabs)');

    //   // On failure:
    //   // setError('Invalid credentials');
    // }, 1500)
  }

  return (
    <SafeAreaView edges={["top", "bottom"]} className="bg-bg-primary flex-1">
      <View className='px-5 py-12'>
        <View className='items-center px-8 mb-5'>
          <Text className="text-white text-4xl font-bold">Join MovieHunt</Text>
          <Text className="text-gray-400 text-lg mt-2">Create your account</Text>
        </View>

        {/* Form */}
        <View className='gap-6'>

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
            <Text className='text-gray-300 mb-2 font-medium'>Confirm Password</Text>
            <View className="flex-row items-center bg-bg-tertiary rounded-xl px-4 py-4 border border-border focus-within:border-accent">
              <Feather name="lock" size={20} color="#9CA3AF" />
              <TextInput
                className='flex-1 ml-3 text-white text-base'
                placeholder='********'
                placeholderTextColor="#6B7280"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
                autoCapitalize='none'
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                <Feather
                  name={showConfirmPassword ? 'eye' : 'eye-off'}
                  size={20}
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={handleSignUp}
            disabled={loading}
            className={`bg-accent rounded-xl py-4 items-center mt-6 ${loading ? 'opacity-70' : ''}`}
          >
            {loading ? (
              <ActivityIndicator color="white" size="small" />
            ) : (
              <Text className="text-white text-lg font-semibold">Sign Up</Text>
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