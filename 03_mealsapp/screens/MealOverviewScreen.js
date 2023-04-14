import { useLayoutEffect } from 'react'

import { MEALS } from '../data/dummy-data'
import MealList from '../components/MealList'

export default function MealOverviewScreen({ navigation, route }) {
    const { categoryId } = route.params

    const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params.title
        })
    }, [navigation])

    return (
        <MealList displayedMeals={displayedMeals} />
    )
}

