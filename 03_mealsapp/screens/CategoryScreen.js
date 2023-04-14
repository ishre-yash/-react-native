import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

export default function CategoryScreen({ navigation }) {

    const renderCategoryItems = (itemData) => {
        const pressHandler = () => {
            navigation.navigate('MealOverview', { categoryId: itemData.item.id, title: itemData.item.title })
        }
        return <CategoryGridTile title={itemData.item.title} onPress={pressHandler} />
    }
    return (
        <View style={{ backgroundColor: "#0f172a" }}>
            <FlatList
                data={CATEGORIES}
                renderItem={renderCategoryItems}
                keyExtractor={(item) => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}