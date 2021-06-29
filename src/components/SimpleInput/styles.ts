import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

const styles = StyleSheet.create({
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


