import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import * as SecureStore from 'expo-secure-store';


const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl,supabaseAnonKey,{
    auth:{
        storage:{
            getItem: async (key)=>await SecureStore.getItemAsync(key),
            setItem: async (key, value)=>await SecureStore.setItemAsync(key,value),
            removeItem: async (key)=>await SecureStore.deleteItemAsync(key),
        },
        autoRefreshToken: false,
        persistSession:true,
        detectSessionInUrl:false,
    }
});

