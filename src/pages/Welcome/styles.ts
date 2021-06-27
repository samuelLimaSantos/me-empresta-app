import { StyleSheet } from "react-native";
import { theme } from '../../global/styles';
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
    fontFamily: theme.fonts.black,
    fontSize: 32,
    color: theme.colors.primary,
  },
  textBrandPartTwo: {
    fontFamily: theme.fonts.black,
    fontSize: 32,
    color: theme.colors.primary,
    marginLeft: 32,
    marginTop: -15,
  },
  welcomeMessageContainer: {
    marginHorizontal: '10%',
    marginVertical: 56
  },
  welcomeMessageTitle: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 24,
    color: theme.colors.primary
  },
  welcomeMessageText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: theme.colors.text
  }
});

export { styles };