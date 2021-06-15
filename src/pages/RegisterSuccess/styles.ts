import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center'
  },

  imageStep: {
    width: '40%',
    height: 170,
    marginTop: 100
  },

  title: {
    marginTop: 30,
    fontSize: 28,
    fontWeight: '700',
    color: '#9A5CD1',
  },

  subTitle: {
    color: '#9A5CD1',
    marginBottom: 50,
  },
});

export { styles };