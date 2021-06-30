import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center'
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#9A5CD1',
  },

  subTitle: {
    color: '#9A5CD1',
  },
  containerButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
});

export { styles };