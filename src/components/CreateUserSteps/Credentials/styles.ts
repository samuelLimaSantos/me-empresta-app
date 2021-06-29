import { StyleSheet } from "react-native";
import { theme } from "../../../global/styles";

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
  },

  subTitle: {
    color: theme.colors.primary,
  },

  containerForm: {
    marginTop: 20,
  },

  containerInput: {
    flexDirection: "row",
    alignItems: "center"
  },


  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center'
  }

});

export { styles };