import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function IconButton({ name, size, color, onPress }) {
    return (
        <Pressable style={
            ({ pressed }) => [{ opacity: pressed ? 0.75 : 1 }, styles.button]} onPress={onPress} android_ripple={true}>
            <Ionicons name={name} size={size} color={color} onPress={onPress} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }

})