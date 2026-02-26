import { Alert, TouchableOpacity } from 'react-native'
import { useApp } from '../context/AppContext';
import { FontAwesome } from '@expo/vector-icons';

const BookmarkButton = ({ movie }) => {
    const { toggleBookmark, isBookmarked } = useApp();

    const handlePress = () => {
        toggleBookmark(movie);
        Alert.alert(
            isBookmarked(movie.id) ? "Removed from bookmarks" : "Added to bookmarks",
            movie.title
        );
    };
    return (
        <TouchableOpacity
            onPress={handlePress}
            className="p-3 bg-black/50 rounded-full absolute top-3 right-3 z-10"
        >
            <FontAwesome
                name={isBookmarked(movie.id) ? "bookmark" : "bookmark-o"}
                size={26}
                color={isBookmarked(movie.id) ? "#FFD700" : "white"}
            />
        </TouchableOpacity>
    )
}

export default BookmarkButton