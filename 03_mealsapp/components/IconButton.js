import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function IconButton({ icon, color, onPress }) {
    return (
        <Pressable onPress={onPress}
            style={({ pressed }) => [
                {
                    opacity: pressed ? 0.5 : 1
                }
            ]}

            android_ripple={{
                color: 'red',
                borderless: true,
                radius: 10,
            }}

        >
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
    )
}

const styles = StyleSheet.create({

})