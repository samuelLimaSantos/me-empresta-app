import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from '../pages/Welcome';
import { Login } from '../pages/Login';
import { RegisterUser } from '../pages/RegisterUser';

const AuthRoutes = () => {
  const Auth = createStackNavigator();

  return (
    <NavigationContainer>
          <Auth.Navigator initialRouteName="Welcome" screenOptions={{
            headerShown: false,
          }}>
            <Auth.Screen name="Welcome" component={Welcome} />
            <Auth.Screen name="Login" component={Login} />
            <Auth.Screen name="RegisterUser" component={RegisterUser} />
          </Auth.Navigator>
    </NavigationContainer>
  )
}

export { AuthRoutes };