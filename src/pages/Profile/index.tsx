import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { SimpleButton } from "../../components/SimpleButton";
import { useAuth } from "../../hooks/auth";


const Profile = () => {

  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [count, setCount] = useState(0);
  const { signOut } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <Header title1="Perfil" title2="Usuário" />
      <SafeAreaView style={styles.containerItens}>

        <View style={{ backgroundColor: "#5C2A9D", width: 200, height: 200, marginBottom: 10, borderRadius: 200}}></View>

        <Text style={{ fontSize: 26, marginBottom: 4, fontWeight: 'bold', color: '#5C2A9D'}}>Amanda Teste</Text>
        <Text style={{ fontSize: 16, marginBottom: 20, fontWeight: 'bold', color: '#5C2A9D'}}>Recife - PE</Text>


            <SimpleButton 
              click={signOut}
              title="Sair"
              />
      </SafeAreaView>

      {/* <MenuSideBar /> */}
    </SafeAreaView>
  )
}

export { Profile };