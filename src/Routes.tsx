import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from './pages/Welcome';
import { Login } from './pages/Login';
import { SimpleButton } from './components/SimpleButton';
import { RegisterUser } from './pages/RegisterUser';


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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { Routes };