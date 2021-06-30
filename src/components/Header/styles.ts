import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: 'center',
    position: 'absolute',
    marginTop: '10%',
    paddingTop: 10,
    paddingBottom: 10,
    left: 0,
    right: 0,
  },

  containerHeader: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  titlePage: {
    alignItems: 'center',
    flexDirection: 'row'
  },

  title: {
    fontSize: 22,
    color: theme.colors.primary,
    fontFamily: theme.fonts.bold
  },

  divisor: {
    marginLeft: 5,
    color: '#DBDBDB',
    fontSize: 40,
    marginRight: 5,
  },

  subtitle: {
    fontSize: 22,
    color: '#DBDBDB',
    fontFamily: theme.fonts.bold
  },

  containerOptionsHeader: {
    height: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },

  buttonIcons: {
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 8
  },
});

export { styles };