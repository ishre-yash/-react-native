import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constant/styles';

export default function ManageExpense({ route, navigation }) {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

    const deleteExpenseHandler = () => {
    }

    return (
        <View style={styles.container}>
            {isEditing && <View style={styles.deleteContainer}>
                <IconButton onPress={deleteExpenseHandler} name="trash" size={36} color={GlobalStyles.colors.error500} />
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary500,
        padding: 24,
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center',

    }
})