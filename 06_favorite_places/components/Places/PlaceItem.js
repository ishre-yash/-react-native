import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PlaceItem({ place, onSelect }) {
    return (
        <Pressable onPress={onSelect}>
            <Image source={{ uri: place.imageUri }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{place.title}</Text>
                <Text style={styles.address}>{place.address}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },

})