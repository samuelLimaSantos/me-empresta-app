import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from '../pages/Home';
import { CreateOffer } from '../pages/CreateOffer';
import { Cart } from '../pages/Cart';
import { Profile } from '../pages/Profile';


const AppRoutes = () => {
  const App = createStackNavigator();

  return (
    <NavigationContainer>
          <App.Navigator initialRouteName="Welcome" screenOptions={{
            headerShown: false,
          }}>
            <App.Screen name="Home" component={Home} />
            <App.Screen name="CreateOffer" component={CreateOffer} />
            <App.Screen name="Cart" component={Cart} />
            <App.Screen name="Profile" component={Profile} />

          </App.Navigator>

    </NavigationContainer>
  )
}

export { AppRoutes };