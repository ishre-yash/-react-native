import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constant/styles';
import Button from '../components/UI/Button';
import { ExpensesContext } from '../store/expenses-context';

export default function ManageExpense({ route, navigation }) {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    const expensesCtx = useContext(ExpensesContext);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])

    const deleteExpenseHandler = () => {
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack();

    }

    const cancelHandler = () => {
        navigation.goBack();
    }

    const confermHandler = () => {
        if (isEditing) {
            expensesCtx.updateExpense(
                editedExpenseId,
                {
                    description: 'Test!!!!',
                    amount: 29.99,
                    date: new Date('2022-05-20'),
                }
            );
        } else {
            expensesCtx.addExpense({
                description: 'Test',
                amount: 19.99,
                date: new Date('2022-05-19'),
            });
        }
        navigation.goBack();

    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button onPress={cancelHandler}
                    mode="flat"
                    style={styles.button}
                >
                    Cancel
                </Button>
                <Button onPress={confermHandler}
                    style={styles.button}
                >
                    {isEditing ? 'Update' : 'Add'}
                </Button>
            </View>

            {
                isEditing && <View style={styles.deleteContainer}>
                    <IconButton onPress={deleteExpenseHandler} name="trash" size={36} color={GlobalStyles.colors.error500} />
                </View>
            }
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary700,
        padding: 24,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center',

    }
})