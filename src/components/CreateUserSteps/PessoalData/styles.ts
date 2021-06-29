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

  containerPicker: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16
  },

  input: {
    width: '100%',
    padding: 10,
    paddingLeft: 20,
    backgroundColor: theme.colors.inputBackground,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
    color: theme.colors.text,
    fontFamily: theme.fonts.regular
  }

});

export { styles };