import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text, View } from 'react-native';


const TabIcon = ({ focused, icon: IconComponent, title }) => {
    return (
        <View className='items-center py-2'>
            <IconComponent name={title} size={24} color={focused ? 'white' : '#A0A0A0'} />
            <Text className={`${focused ? 'text-white' : 'text-[#A0A0A0]'} capitalize w-full`}>{title}</Text>
        </View>
    )
}

const _Layout = () => {

    const isAuth = false; // later from Firebase/AuthContext

    if (!isAuth) {
        return <Redirect href="(auth)" />;
    }

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#010102',
                    borderTopColor: '#1A1A1A',
                    borderTopWidth: 1,
                    height: 60,
                    paddingBottom: 8,
                },
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={Entypo}
                            title="home"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    title: 'Search',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={Feather}
                            title="search"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name='saved'
                options={{
                    title: 'Saved',
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <TabIcon focused={focused} icon={FontAwesome} title={"bookmark"} />;
                        }
                        return <TabIcon focused={focused} icon={Feather} title={"bookmark"} />;
                    }
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={Feather} title={"user"} />
                    )
                }}
            />
        </Tabs>
    )
}

export default _Layout