import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpense';
import RecentExpense from './screens/RecentExpense';
import AllExpense from './screens/AllExpense';
import { GlobalStyles } from './constant/styles';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/UI/IconButton';
import ExpensesContextProvider from './store/expenses-context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>

        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: GlobalStyles.colors.primary500,
              },
              headerTintColor: 'white',
            }}
          >
            <Stack.Screen name="Recent" component={MyTabs} options={
              {
                headerShown: false
              }
            } />
            <Stack.Screen name="ManageExpense" component={ManageExpense} options={{
              presentation: 'modal',
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>

    </>

  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={
      ({ navigation }) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: 'white',
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => <IconButton onPress={() => { navigation.navigate('ManageExpense'); }} name="add" size={24} color={tintColor} />


      })}>
      <Tab.Screen name="RecentExpense" component={RecentExpense}
        options={{
          title: 'Recent Expense',
          tabBarLabel: 'Recent Expense',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="AllExpense" component={AllExpense}
        options={{
          title: 'All Expense',
          tabBarLabel: 'All Expense',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calculator" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


