import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


export default function IconButton({ name, size, color, onPress }) {
    return (
        <Pressable onPress={onPress}
            style={({ pressed }) => [
                {
                    opacity: pressed ? 0.75 : 1
                }
            ]}
            android_ripple={{
                color: 'white',
                borderless: true,
                radius: 30
            }}
        >
            <View style={styles.button}>
                <Ionicons name={name} size={size} color={color} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 24,
        padding: 6,
        margin: 8,
    }
})