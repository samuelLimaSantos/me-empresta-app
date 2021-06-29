import React, { useCallback } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import astronauta from "../../assets/astronauta-welcome.png";
import { SimpleButton } from "../../components/SimpleButton";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  const handleGoToLogin = useCallback(() => {
    navigation.navigate("Login");
  }, [])

  return (
    <View style={styles.container} >
      <View style={{ alignItems: 'center' }}>
        <Image source={astronauta} style={styles.image} />
        <View style={styles.containerTextBrand}>
          <Text style={styles.textBrandPartOne}>
            ME
          </Text>
          <Text style={styles.textBrandPartTwo}>
            EMPRESTA
          </Text>
        </View>
      </View>
      <View style={styles.welcomeMessageContainer}>
        <Text style={styles.welcomeMessageTitle}>
          Bem vindo
        </Text>
        <Text
          style={styles.welcomeMessageText}
        >
          Chegou um novo jeito de ter uma renda extra emprestando.
        </Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <SimpleButton click={handleGoToLogin} title="Conheça" />
      </View>
    </View>
  )
}

export { Welcome };