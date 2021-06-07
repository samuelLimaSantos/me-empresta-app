import React from "react";
import { View, Text } from "react-native"

const RegisterUser = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{ color: '#9A5CD1', fontFamily: 'Roboto_900Black', fontSize: 32}}>
        Cadastrar usuário
      </Text>
    </View>
  )
};

export { RegisterUser };