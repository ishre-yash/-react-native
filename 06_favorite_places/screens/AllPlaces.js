import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PlacesList from '../components/Places/PlacesList'

export default function AllPlaces() {
    const places = [
        {
            id: 'p1',
            title: 'Empire State Building',
            imageUri: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            address: '20 W 34th St, New York, NY 10001, United States',
            lat: 40.7484405,
            lng: -73.9878584
        },
    ]
    return (
        <PlacesList places={places} />
    )
}

const styles = StyleSheet.create({})