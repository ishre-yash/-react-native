import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoryScreen from './screens/CategoryScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverviewScreen from './screens/MealOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/favorites-context';


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>

        <NavigationContainer>
          <Stack.Navigator screenOptions={
            {
              headerStyle: {
                backgroundColor: '#020617',
              },
              headerTintColor: '#f1f5f9',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 24,
              },
              contentStyle: {
                backgroundColor: '#0f172a',
              }
            }
          } >
            <Stack.Screen name="MealCategory" component={MyTabs} options={
              {
                title: 'Meal Categories',
              }
            } />
            <Stack.Screen name="MealOverview" component={MealOverviewScreen}
            // options={
            //   ({ route }) => {
            //     const { title } = route.params
            //     return {
            //       title: title,
            //     }
            //   }
            // }
            />
            <Stack.Screen name="MealDetails" component={MealDetailsScreen}
            // options={
            //   {
            //     headerRight: () => (
            //       <Text style={{ color: '#f1f5f9', fontSize: 18, marginRight: 16 }}>Save</Text>
            //     )
            //   }
            // }
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>

    </>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={
      {

        headerShown: false,
        tabBarActiveTintColor: '#f1f5f9',
        tabBarInactiveTintColor: '#334155',
        tabBarActiveBackgroundColor: '#020617',
        tabBarInactiveBackgroundColor: '#020617',
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: '#020617',
          borderTopColor: '#020617',
        },
      }
    }>
      <Tab.Screen name="Home" component={CategoryScreen}
        options={
          {
            title: 'Categories',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-restaurant" size={size} color={color} />
            ),
          }
        }

      />
      <Tab.Screen name="Favorites" component={FavoritesScreen}
        options={
          {
            title: 'Favorites',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-heart" size={size} color={color} />
            ),
          }
        }
      />
    </Tab.Navigator>
  );
}
