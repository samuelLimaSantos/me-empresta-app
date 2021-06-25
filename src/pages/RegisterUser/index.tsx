import React from "react";
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const RegisterUser = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', paddingTop: 40 }}>
    
      <Text style={{ color: '#9A5CD1', fontFamily: 'Roboto_900Black', fontSize: 32 }}>
        Cadastrar usuário
      </Text>
    </SafeAreaView>
  )
};

export { RegisterUser };