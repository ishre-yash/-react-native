import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpenseItem from './ExpenseItem'

export default function ExpenseList({ expenses }) {

    const renderExpenseItem = (itemData) => {

        return (
            <ExpenseItem item={itemData.item} />
        )
    }
    return (
        <FlatList
            data={expenses}
            renderItem={renderExpenseItem}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({})