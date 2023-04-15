import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import ExpenseList from './ExpenseList'
import { GlobalStyles } from '../constant/styles';


export default function ExpenseOutput({ expenses, expensesPeriod, fallBackText }) {
    let content = <Text style={styles.infoText}>{fallBackText}</Text>;

    if (expenses.length > 0) {
        content = <ExpenseList expenses={expenses} />
    }
    return (
        <View style={styles.container}>
            <ExpenseSummary periodName={expensesPeriod} expenses={expenses} />
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 4,
        backgroundColor: GlobalStyles.colors.primary700,

    },
    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 16

    }
})