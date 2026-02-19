import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import MovieCard from '@/components/MovieCard';
import { Link } from 'expo-router';

const Saved = () => {

  const savedMovies = [];

  const hasSaved = savedMovies.length > 0;


  return (
    <View className='flex-1 bg-bg-primary'>
      <View className="px-6 pt-12 pb-4">
        <Text className='text-white text-3xl font-bold'>Saved Movies</Text>
        <Text className='text-text-secondary mt-2
        '>{hasSaved ? `${savedMovies.length} saved` : "Your watchlist is empty"}</Text>
      </View>

      {
        !hasSaved ? (
          <View className="flex-1 justify-center items-center px-10">
            <View className="bg-bg-tertiary rounded-full p-8 mb-6">
              <Feather name="bookmark" size={48} color="#9CA3AF" />
            </View>
            <Text className='text-white text-xl font-semibold text-center mb-3'>No saved movies yet</Text>
            <Text className='text-gray-400 text-base text-center leading-6'>
              Add movies to your watchlist by tapping the bookmark icon on any movie card
            </Text>
            <TouchableOpacity className='bg-accent mt-8 px-8 py-4 rounded-full'>
              <Link href={'/'}>
                <Text className='text-white font-medium text-lg'>Browse Movies</Text>
              </Link>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={savedMovies}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{ paddingHorizontal: 10, gap: 12 }}
            contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}
            renderItem={({ item }) => (
              <MovieCard {...item} />
            )}
            showsVerticalScrollIndicator={false}
          />
        )
      }

    </View>
  )
}

export default Saved