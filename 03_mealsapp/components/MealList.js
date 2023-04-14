import { FlatList, View } from 'react-native'
import React from 'react'
import MealItems from './MealItems'

export default function MealList({ displayedMeals }) {

    const renderMealItems = (itemData) => {
        const MealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            complexity: itemData.item.complexity,
            duration: itemData.item.duration,
            affordability: itemData.item.affordability,
        }
        return <MealItems {...MealItemProps} />
    }
    return (
        <View >
            <FlatList
                data={displayedMeals}
                renderItem={renderMealItems}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
