import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, Image, TouchableOpacity, Platform, SafeAreaView } from "react-native";
import { SimpleButton } from "../../components/SimpleButton";
import astronautaLogin from "../../../assets/astronauta-login.png";
import { styles } from "./styles";
import { SimpleInput } from "../../components/SimpleInput";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Login = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1}}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>

        <View style={styles.signInContainer}>
          <Text style={styles.signText}>
            Sign
          </Text>
          <Text style={styles.inText}>
            In
          </Text>
        </View>

        <View style={styles.notHaveAccountContainer}>
          <Text style={styles.notHaveAccountContainerTextOne}>
            Não tem uma conta?
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("RegisterUser")}>
            <Text style={styles.notHaveAccountContainerTextTwo}>
              Cadastre-se
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <SimpleInput
            placeholder="E-mail"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
          />
          <SimpleInput
            placeholder="Senha"
            secureTextEntry
            returnKeyType="send"
          />
        </View>

        <View style={styles.containerButton}>
          <SimpleButton click={() => {
            navigation.navigate('Home')
          }} title="Login" />
        </View>
      </KeyboardAvoidingView>

      <Image source={astronautaLogin} style={styles.image} />
    </SafeAreaView>
  )
}

export { Login };