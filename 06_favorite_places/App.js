import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from './screens/AllPlaces';
import AddPlaces from './screens/AddPlaces';
import IconButton from './components/ui/IconButton';
import { Colors } from './constants/colors';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer
      >
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary500,
          },
          headerTintColor: Colors.gray700,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          contentStyle: {
            backgroundColor: Colors.gray700,
          },
        }}>
          <Stack.Screen name="Your Favorite Places" component={AllPlaces}

            options={({ navigation }) => ({
              title: 'All Places',
              headerRight: ({ tintColor }) => (
                <IconButton name="add" size={30} color={tintColor} onPress={() => navigation.navigate('AddPlaces')} />
              ),
            })}
          />
          <Stack.Screen name="AddPlaces" component={AddPlaces} options={{
            title: 'Add New Places',
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}
