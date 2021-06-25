import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  containerProdutos: {
    width: 385,
    height: 670,
    marginTop: 85,
    marginBottom: 50
  },

});

export { styles };