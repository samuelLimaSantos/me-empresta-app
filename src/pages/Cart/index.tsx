import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { MenuSideBar } from "../../components/MenuSideBar";
import { SimpleInput } from "../../components/SimpleInput";
import astronautaLogin from "../../../assets/astronauta-login.png";

const Cart = () => {

  const navigation = useNavigation();
  const [search, setSearch] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header title1="Carrinho" title2="Compras" />
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.containerProdutos}>


        </ScrollView>
      </SafeAreaView>

      <MenuSideBar />
    </SafeAreaView>
  )
}

export { Cart };