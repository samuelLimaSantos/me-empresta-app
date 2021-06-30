import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { MenuSideBar } from "../../components/MenuSideBar";

import astronautaLogin from "../../../assets/astronauta-login.png";

import { Ionicons } from '@expo/vector-icons';
import CheckBox from '@react-native-community/checkbox';


const Profile = () => {

  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Header title1="Perfil" title2="Usuário" />
      <SafeAreaView style={styles.containerItens}>

      </SafeAreaView>

      {/* <MenuSideBar /> */}
    </SafeAreaView>
  )
}

export { Profile };