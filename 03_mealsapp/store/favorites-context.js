import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
    favorites: [],
    addFavorite: (mealId) => { },
    removeFavorite: (mealId) => { },
    isFavorite: (mealId) => { },
});

export default function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    const addFavoriteHandler = (mealId) => {
        setUserFavorites((currentFavorites) => {
            return currentFavorites.concat(mealId);
        });
    };

    const removeFavoriteHandler = (mealId) => {
        setUserFavorites((currentFavorites) => {
            return currentFavorites.filter((meal) => meal !== mealId);
        });
    };

    const isFavoriteHandler = (mealId) => {
        return userFavorites.some((meal) => meal === mealId);
    };

    const context = {
        favorites: userFavorites,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isFavorite: isFavoriteHandler,
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}