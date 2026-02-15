import Entypo from '@expo/vector-icons/Entypo'
import { Link } from 'expo-router'
import { View, Text, TouchableOpacity, Image } from 'react-native'

const MovieCard = ({ id, poster_path, title, vote_average, release_date, }) => {
    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className='w-[30%]'>
                <Image
                    source={{
                        uri: poster_path ?
                            `https://image.tmdb.org/t/p/w500${poster_path}`
                            : 'https://placehold.co/600x400/1a1a1a/ffffff.png'
                    }}
                    className='w-full h-52 rounded-lg'
                    resizeMode='cover'
                />

                <Text className='text-sm font-bold text-white mt-2' numberOfLines={1}>{title}</Text>

                <View className='flex-row items-center justify-start gap-x-1'>
                    <Entypo name="star" size={16} color="#FFD700" />
                    <Text className='text-xs text-white font-bold uppercase'>{Math.round(vote_average / 2)}</Text>
                </View>

                <View className='flex-row items-center justify-between'>
                    <Text className='text-xs text-text-secondary font-medium mt-1'>{release_date?.split('-')[0]}</Text>
                    {/* <Text className='text-xs font-medium text-text-secondary uppercase'>MOVIE</Text> */}
                </View>
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard