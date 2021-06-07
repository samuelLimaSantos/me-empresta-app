import { StyleSheet } from "react-native";
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
    fontFamily: 'Roboto_900Black',
    fontSize: 32,
    color: '#9A5CD1',
  },
  inText: {
    fontFamily: 'Roboto_900Black',
    fontSize: 32,
    color: '#9A5CD1',
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
    color: 'rgba(11, 35, 56, 76)',
    fontFamily: 'Roboto_700Bold'
  },
  notHaveAccountContainerTextTwo: {
    color: '#9A5CD1',
    fontFamily: 'Roboto_400Regular'
  },
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  image: {
    width: '100%',
    resizeMode: "cover",
    zIndex: -999999,
    height: 350
    
  }
});

export { styles };