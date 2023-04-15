import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PlaceItem from './PlaceItem'
import { Colors } from '../../constants/colors'

export default function PlacesList({ places }) {

    if (!places || places.length === 0) {
        return (
            <View style={styles.fallback}>
                <Text style={styles.fallbackText}>No places found. Maybe start adding some?</Text>
            </View>
        )
    }



    return (
        <FlatList
            data={places}
            renderItem={({ item }) => <PlaceItem place={item} onSelect={() => { }} />}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    fallback: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
    ,
    fallbackText: {
        fontSize: 18,
        color: Colors.accent500
    }
})