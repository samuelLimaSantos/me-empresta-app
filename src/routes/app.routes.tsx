import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pages/Home';
import { CreateOffer } from '../pages/CreateOffer';
import { Cart } from '../pages/Cart';
import { Profile } from '../pages/Profile';
import { Requests } from '../pages/Requests';
import { Ionicons } from '@expo/vector-icons'; 
import { theme } from '../global/styles';
import { ProductDetails } from '../pages/ProductDetails';

type IconNames = 'home' | 'home-outline' | 'add-circle'| 'add-circle-outline' |
 'cart' | 'cart-outline' | 'man' | 'man-outline' | 'archive' | 'archive-outline';


const TabNavigation = () => {
  const App = createBottomTabNavigator();

  return (
          <App.Navigator initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName: IconNames = 'home';

              switch(route.name) {
                case 'Home':
                  iconName = focused
                    ? 'home'
                    : 'home-outline';
                  break;
                case 'CreateOffer':
                  iconName = focused ? 'add-circle' : 'add-circle-outline';
                  break;
                case 'Cart':
                  iconName = focused ? 'cart' : 'cart-outline';
                  break;
                case 'Profile':
                  iconName = focused ? 'man' : 'man-outline';
                  break;
                case 'Requests':
                  iconName = focused ? 'archive' : 'archive-outline';
                  break;
              }

              return <Ionicons name={iconName} color={theme.colors.primary}size={26}/>;
            },
          })}
          
          tabBarOptions={{
            labelStyle: { color: theme.colors.primary },
            activeTintColor: theme.colors.primary,
            style: { height: 55, backgroundColor: '#fefefe'},
          }}>
            <App.Screen name="Home" component={Home} options={{
              tabBarLabel: 'Início',
            }}/>
            <App.Screen name="Requests" component={Requests} options={{
              tabBarLabel: 'Meus pedidos'
            }} />
            <App.Screen name="CreateOffer" component={CreateOffer} options={{
              tabBarLabel: 'Novo produto',
            }}/>
            <App.Screen name="Cart" component={Cart} options={{
              tabBarLabel: 'Carrinho'
            }}/>
            <App.Screen name="Profile" component={Profile} options={{
              tabBarLabel: 'Perfil'
            }}/>
          </App.Navigator>

          
  )
}

const AppRoutes = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}

export { AppRoutes };