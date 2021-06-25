import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from './pages/Welcome';
import { Login } from './pages/Login';
import { RegisterUser } from './pages/RegisterUser';
import { RegisterSuccess } from './pages/RegisterSuccess';
import { Home } from './pages/Home';
import { CreateOffer } from './pages/CreateOffer';
import { Cart } from './pages/Cart';
import { Profile } from './pages/Profile';



const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RegisterUser" component={RegisterUser} />
        <Stack.Screen name="RegisterSuccess" component={RegisterSuccess} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateOffer" component={CreateOffer} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Profile" component={Profile} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { Routes };