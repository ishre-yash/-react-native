import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../constant/styles'
import { getFormattedDate } from '../util/date'
import { useNavigation } from '@react-navigation/native'

export default function ExpenseItem({ item }) {
    const navigation = useNavigation()
    const expensePressHandler = () => {
        navigation.navigate('ManageExpense', { expenseId: item.id })
    }
    return (
        <Pressable
            onPress={expensePressHandler}
            style={({ pressed }) => [
                {
                    opacity: pressed ? 0.75 : 1
                }
            ]}
            android_ripple={true}

        >
            <View style={styles.expenseItem}>
                <View >
                    <Text style={[styles.textBase, styles.description]}>{item.description}</Text>
                    <Text style={styles.textBase}>{getFormattedDate(item.date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.primary500,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.4,

    },
    textBase: {
        color: GlobalStyles.colors.primary50,
    }
    ,
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: '20%'
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
    },
})