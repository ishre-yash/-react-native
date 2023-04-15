import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpenseOutput from '../components/ExpenseOutput'
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';

export default function RecentExpense() {
    const expensesCtx = useContext(ExpensesContext);

    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return (expense.date >= date7DaysAgo) && (expense.date <= today);
    });


    return (
        <ExpenseOutput expenses={recentExpenses} expensesPeriod="Last 7 Days Expenses" fallBackText={"No Recent Expenses found !!"} />
    )
}

const styles = StyleSheet.create({})