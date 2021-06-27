import { StyleSheet } from "react-native";
import { theme } from '../../global/styles';
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    paddingHorizontal: 32
  },
  signInContainer: {
    marginTop: 24,
    marginBottom: 18
  },
  signText: {
    fontFamily: theme.fonts.black,
    fontSize: 32,
    color: theme.colors.primary,
  },
  inText: {
    fontFamily: theme.fonts.black,
    fontSize: 32,
    color: theme.colors.primary,
    marginLeft: 58,
    marginTop: -15,
  },
  notHaveAccountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40
  },
  notHaveAccountContainerTextOne: {
    color: theme.colors.text,
    fontFamily: theme.fonts.bold
  },
  notHaveAccountContainerTextTwo: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.regular
  },
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    zIndex: 99999
  },
  image: {
    width: '100%',
    resizeMode: "cover",
    zIndex: -999999,
    height: 350,
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
  }
});

export { styles };