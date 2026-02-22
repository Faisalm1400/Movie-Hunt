import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import { useRouter } from 'expo-router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
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
            <View className='px-5 py-20'>
                <View className='items-center px-8 py-12'>
                    <Text className="text-white font-bold text-4xl">MovieHunt</Text>
                    <Text className='text-gray-400 text-lg mt-2'>Sign in to continue</Text>
                </View>
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

                    {/* Forgot Password */}
                    <TouchableOpacity className='self-end'>
                        <Text className='text-accent'>Forgot Password?</Text>
                    </TouchableOpacity>

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

                    <View className="flex-row justify-center mt-8">
                        <Text className="text-gray-400">Don't have an account?</Text>
                        <TouchableOpacity onPress={() => router.push('/signup')}>
                            <Text className="text-accent font-medium">Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login