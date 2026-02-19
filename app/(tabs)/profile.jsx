import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const Profile = () => {
  const bookmarkCount = 0;
  const watchedCount = 0;
  const avgRating = 0;

  return (
    <View className="flex-1 bg-bg-primary py-12 px-5 items-center">
      {/* Avatar & Name */}
      <View className="items-center mb-8">
        <View className="bg-pink-500/80 w-28 h-28 rounded-full items-center justify-center border-4 border-pink-600/40 shadow-lg">
          <Feather name="user" size={50} color="white" />
        </View>
        <Text className="text-white text-2xl font-bold mt-4">Faisal Rahman</Text>
        <Text className="text-gray-400 text-base mt-1">@Faisal_1400</Text>
      </View>

      {/* Stats Cards */}
      <View className="w-full flex-row justify-between gap-4 mb-8">
        <TouchableOpacity className="bg-bg-tertiary flex-1 items-center py-5 px-3 rounded-2xl shadow-sm border border-border active:opacity-80">
          <Feather name="bookmark" size={28} color="#FBBF24" />
          <Text className="text-white text-2xl font-bold mt-3">{bookmarkCount}</Text>
          <Text className="text-gray-400 text-sm">Bookmark</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-bg-tertiary flex-1 items-center py-5 px-3 rounded-2xl shadow-sm border border-border active:opacity-80">
          <Feather name="eye" size={28} color="#22C55E" />
          <Text className="text-white text-2xl font-bold mt-3">{watchedCount}</Text>
          <Text className="text-gray-400 text-sm">Watched</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-bg-tertiary flex-1 items-center py-5 px-3 rounded-2xl shadow-sm border border-border active:opacity-80">
          <Feather name="star" size={28} color="#3B82F6" />
          <Text className="text-white text-2xl font-bold mt-3">
            {avgRating}
          </Text>
          <Text className="text-gray-400 text-sm">Avg Rating</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Activity */}
      <View className="w-full bg-bg-tertiary rounded-2xl p-5 border border-border">
        <Text className="text-white text-lg font-semibold mb-4">Recent Activity</Text>

        <View className="gap-4">
          <View className="flex-row items-center justify-between py-3 border-b border-divider">
            <View className="flex-row items-center gap-3">
              <Feather name="bookmark" size={20} color="#FBBF24" />
              <Text className="text-white">Added "Dune: Part Two" to Bookmark</Text>
            </View>
            <Text className="text-gray-500 text-sm">2d ago</Text>
          </View>

          <View className="flex-row items-center justify-between py-3">
            <View className="flex-row items-center gap-3">
              <Feather name="star" size={20} color="#3B82F6" />
              <Text className="text-white">Rated "Oppenheimer" 9/10</Text>
            </View>
            <Text className="text-gray-500 text-sm">1w ago</Text>
          </View>
        </View>
      </View>

      {/* Logout / Settings */}
      <TouchableOpacity className="mt-auto mb-8 bg-red-600/90 w-full py-4 rounded-xl items-center shadow-md">
        <Text className="text-white text-lg font-semibold">Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;