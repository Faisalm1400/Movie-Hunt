import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [bookmarks, setBookmarks] = useState([]);



    const isBookmarked = (id) => {
        return bookmarks.some(movie => movie.id === id);
    };

    const toggleBookmark = (movie) => {
        setBookmarks((prev) => {
            const exists = prev.find(m => m.id === movie.id);

            if (exists) {
                return prev.filter(m => m.id !== movie.id)
            }

            return [...prev, movie];
        })
    };



    const value = {
        bookmarks,
        isBookmarked,
        toggleBookmark,
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}


export const useApp = () => {
    const context = useContext(AppContext)
    if (context === undefined) {
        throw new Error('Must be inside the provider');
    }

    return context;
}