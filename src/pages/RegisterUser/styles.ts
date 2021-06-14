import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center'
  },

  imageStep: {
    width: '50%',
    height: 200,
    marginTop: 20
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#9A5CD1',
  },

  subTitle: {
    color: '#9A5CD1',
  },

  containerForm: {
    width: '70%',
    marginTop: 20
  },

  containerConfirmeInfo: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 10,
  },

  containerInfo: {
    paddingTop: 15
  },

  nameField: {
    fontSize: 16,
    fontWeight: '700',
    color: '#9A5CD1',
  },

  resInput: {
    fontSize: 16,
    color: '#9D7EB8',
  },

  containerButton: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },


  containerFakeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  fakeButtonText: {
    fontSize: 16,
    color: '#9A5CD1'
  }
});

export { styles };