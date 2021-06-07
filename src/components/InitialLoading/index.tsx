import React, { useEffect } from "react";
import { View, Image } from "react-native";
import logo from "../../../assets/logo.png";
import { styles } from "./styles";

const InitialLoading = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
    </View>
  )
};

export { InitialLoading };