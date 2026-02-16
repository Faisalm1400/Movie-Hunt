import { View, Text, FlatList, TextInput, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import MovieCard from '@/components/MovieCard'
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';
import SearchBar from '@/components/SearchBar';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: movies, loading, error, refetch, reset } = useFetch(() => fetchMovies({ query: searchQuery }), false)


  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchQuery.trim().length > 0) {
        await refetch();
      } else {
        reset()
      }
    }, 500);

    return () => clearTimeout(timer);

  }, [searchQuery]);

  // console.log(movies)


  return (
    <View className='flex-1 bg-bg-secondary'>

      <Text className='text-2xl font-bold text-white px-5 mt-5'>Search</Text>

      <View className="px-5 my-4">
        <SearchBar
          placeholder="Search movies..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {!loading && !error && searchQuery.trim().length > 0 && (
        <Text className='text-white text-xl font-bold px-5 mb-2'>
          Search Results for{' '}
          <Text className='text-amber-300'>{searchQuery}</Text>
        </Text>
      )}
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'space-between', // better spacing
          gap: 16,
          marginVertical: 8,
        }}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingBottom: 100,
        }}
        ListEmptyComponent={
          !loading && !error ? (
            <View className='mt-10 px-5'>
              <Text className='text-center text-gray-500'>
                {searchQuery.trim() ? 'No movies found' : 'Search for a movie'}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  )
}

export default Search