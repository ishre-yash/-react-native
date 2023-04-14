import { Text, View } from 'react-native'
import React from 'react'
import MealList from '../components/MealList'
import { FavoritesContext } from '../store/favorites-context'
import { MEALS } from '../data/dummy-data'
import { Ionicons } from '@expo/vector-icons';


export default function FavoritesScreen() {

    const favoriteMealContext = React.useContext(FavoritesContext)

    const displayedMeals = MEALS.filter((meal) => favoriteMealContext.favorites.some((favMeal) => favMeal === meal.id))

    if (displayedMeals.length === 0) return (
        <View style={{ backgroundColor: "#0f172a", height: "100%" }}>

            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Ionicons name="ios-sad" size={100} color="white" />
                <Text style={{ color: "white", fontSize: 20 }}>No favorite meals found. Start adding some!</Text>
            </View>
        </View>
    )


    return (
        <View style={{ backgroundColor: "#0f172a", height: "100%" }}>
            <MealList displayedMeals={displayedMeals} />
        </View>
    )
}