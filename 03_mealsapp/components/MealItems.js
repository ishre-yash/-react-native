import { StyleSheet, Pressable, Text, View, Image } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

export default function MealItems({ id, title, imageUrl, complexity, duration, affordability }) {
    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate('MealDetails', { mealId: id, title: title })
    }
    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{
                    color: 'rgba(0,0,0,0.2)',
                    borderless: false,
                }}
                style={({ pressed }) => pressed ? styles.buttonPressed : null}
                onPress={onPress}
            >
                <View >
                    <Image style={styles.image} source={{ uri: imageUrl }} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{duration}m</Text>
                    <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                </View>
            </Pressable >
        </View >
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        borderRadius: 12,
        elevation: 6,
        shadowColor: '#475569',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 8,
        shadowOpacity: 0.25,
        backgroundColor: '#1e293b',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },

    buttonPressed: {
        opacity: 0.75,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
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
    }
})