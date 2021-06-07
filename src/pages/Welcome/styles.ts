import { StyleSheet } from "react-native";
import  Constants  from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#EDF1F6',
    flex: 1,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: 560,
    alignSelf: 'flex-start',
    marginLeft: 15
  },
  containerTextBrand: {
    marginTop: -200
  },
  textBrandPartOne: {
    fontFamily: 'Roboto_900Black',
    fontSize: 32,
    color: '#9A5CD1',
  },
  textBrandPartTwo: {
    fontFamily: 'Roboto_900Black',
    fontSize: 32,
    color: '#9A5CD1',
    marginLeft: 32,
    marginTop: -15,
  },
  welcomeMessageContainer: {
    marginHorizontal: '10%',
    marginVertical: 56
  },
  welcomeMessageTitle: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 20,
    color: '#0B2338'
  },
  welcomeMessageText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: 'rgba(11, 35, 56, 76)'
  }
});

export { styles };