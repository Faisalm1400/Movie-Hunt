import { ActivityIndicator, FlatList, ScrollView, Text, View } from "react-native";
import useFetch from "@/services/useFetch"
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";

export default function Index() {
  const { data: movies, loading, error } = useFetch(() => fetchMovies({ query: '' }));
  return (
    <View className="bg-bg-darkest flex-1">
      <Text className="text-white text-2xl font-bold p-5">Home</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#E50914" className="mt-20 self-center" />
      ) : error ? (
        <Text className="text-red-500 text-center mt-10 px-5">
          Error: {error?.message || 'Something went wrong'}
        </Text>
      ) : (
        <View className="px-5">
          <Text className="text-white mb-5 font-semibold text-lg">Latest Movies</Text>
          <FlatList
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              paddingHorizontal: 5,
              marginBottom: 10,
            }}
            contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 5 }}
            renderItem={({ item }) => (
              <MovieCard
                {...item}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
}
