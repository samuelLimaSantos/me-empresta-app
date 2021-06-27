import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Routes } from './src/routes';
import { 
  useFonts,
  Roboto_400Regular, 
  Roboto_700Bold, 
  Roboto_900Black
} from "@expo-google-fonts/roboto";
import AppLoading from 'expo-app-loading';
import { AppProvider } from './src/hooks';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppProvider>
      <StatusBar translucent style='dark' />
      <Routes />
    </AppProvider>
  );
}

