import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpenseOutput from '../components/ExpenseOutput'

export default function AllExpense() {
    return (
        <ExpenseOutput expensesPeriod="Total Expenses" />
    )
}

const styles = StyleSheet.create({})