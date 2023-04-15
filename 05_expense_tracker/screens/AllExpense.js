import { StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import ExpenseOutput from '../components/ExpenseOutput'
import { ExpensesContext } from '../store/expenses-context';

export default function AllExpense() {
    const expensesCtx = useContext(ExpensesContext);

    return (
        <ExpenseOutput expenses={expensesCtx.expenses} expensesPeriod="Total Expenses" fallBackText="No registered expenses found!" />
    )
}

const styles = StyleSheet.create({})