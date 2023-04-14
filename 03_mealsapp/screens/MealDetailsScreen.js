import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { MEALS } from '../data/dummy-data'
import IconButton from '../components/IconButton'
import { FavoritesContext } from '../store/favorites-context'

export default function MealDetailsScreen({ navigation, route }) {
    const { mealId } = route.params

    const favoriteMealContext = React.useContext(FavoritesContext)

    const isFavorite = favoriteMealContext.isFavorite(mealId)



    const onPress = () => {
        if (isFavorite) {
            favoriteMealContext.removeFavorite(mealId)
        } else {
            favoriteMealContext.addFavorite(mealId)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params.title,
            headerRight: () => (<>
                <IconButton icon={isFavorite ? "ios-heart" : "ios-heart-outline"} color={"red"} onPress={onPress} />
            </>
            )
        })
    }, [navigation, onPress])

    const MealDetails = MEALS.find((meal) => meal.id === mealId)

    return (
        <ScrollView style={{ marginBottom: 32 }}>
            <Image style={styles.image} source={{ uri: MealDetails.imageUrl }} />
            <Text style={styles.title}>{MealDetails.title}</Text>
            <View style={styles.details}>
                <Text style={styles.detailItem}>{MealDetails.duration}m</Text>
                <Text style={styles.detailItem}>{MealDetails.complexity.toUpperCase()}</Text>
                <Text style={styles.detailItem}>{MealDetails.affordability.toUpperCase()}</Text>
            </View>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <View style={styles.subTitleContainer}>
                        <Text style={styles.subTitle}>
                            Ingredients
                        </Text>
                    </View>
                    <List data={MealDetails.ingredients} />
                    <View style={styles.subTitleContainer}>
                        <Text style={styles.subTitle}>
                            Steps
                        </Text>
                    </View>
                    <List data={MealDetails.steps} />
                </View>
            </View>

        </ScrollView >
    )
}

const List = ({ data }) => {
    return data.map((item, i) => {
        return (
            <View key={i} style={styles.listItems}>
                <Text style={styles.itemText}>
                    {item}
                </Text>
            </View>
        )
    })
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: '#f1f5f9'
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 8,
        fontSize: 14,
        color: '#cbd5e1'
    },
    subTitleContainer: {
        padding: 6,
        borderBottomColor: '#94a3b8',
        borderBottomWidth: 1,
        marginHorizontal: 12,
        marginVertical: 4,
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: '#e2e8f0',
    },
    listOuterContainer: {
        alignItems: 'center',

    },

    listContainer: {
        width: '90%',

    },
    listItems: {
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: "#334155"
    }
    ,
    itemText: {
        color: '#cbd5e1',
        fontSize: 16,
    }

})