import { Pressable, StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

export default function CategoryGridTile({ title, onPress }) {
    return (
        <View style={[styles.gridItem]}>
            <Pressable style={({ pressed }) => [styles.buttonStyle, pressed ? styles.buttonPressed : null]}
                android_ripple={{
                    color: 'gray',
                    borderless: false,
                }}
                onPress={onPress}
            >
                <View style={styles.innerContainer} >
                    <Text style={styles.title} >
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
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
    buttonStyle: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },

    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#f1f5f9"
    },
})