import React from "react";
import { Text, Image, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { SimpleButton } from "../../components/SimpleButton";
import successRegister from "../../../assets/success-register.png"

import { useNavigation } from "@react-navigation/native";


const RegisterSuccess = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={successRegister} style={styles.imageStep} />
      <Text style={styles.title}>Conta criada com sucesso!</Text>
      <Text style={styles.subTitle}>Bem vindo ao mundo dos alugáveis.</Text>

      <SimpleButton click={() => {
        navigation.navigate('Login')
      }} title="Entrar no app" />
    </SafeAreaView>
  )
};

export { RegisterSuccess };