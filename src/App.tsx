import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Routes } from './Routes';
import { 
  useFonts,
  Roboto_400Regular, 
  Roboto_700Bold, 
  Roboto_900Black
} from "@expo-google-fonts/roboto";
import { InitialLoading } from './components/InitialLoading';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black
  });

  if (!fontsLoaded) {
    return <InitialLoading />;
  }

  return (
    <>
      <StatusBar translucent style='dark' />
      <Routes />
    </>
  );
}

