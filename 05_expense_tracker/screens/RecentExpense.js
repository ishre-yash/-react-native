import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpenseOutput from '../components/ExpenseOutput'

export default function RecentExpense() {
    return (
        <ExpenseOutput expensesPeriod="Last 7 Days Expenses" />
    )
}

const styles = StyleSheet.create({})