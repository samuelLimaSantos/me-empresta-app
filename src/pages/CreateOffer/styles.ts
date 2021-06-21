import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Inter_100Thin } from "@expo-google-fonts/inter";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center',
  },

  containerMessage: {
    width: 385,
    height: 670,
    marginTop: 150,
    marginBottom: 50,
    alignItems: 'center'
  },

  title: {
    width: 310,
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5C2A9D'
  },

  subtitle: {
    width: 300,
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#5C2A9D',
    marginBottom: 40
  },

  containerForm: {
    width: 385,
    height: 670,
    marginTop: 100,
    marginBottom: 50,
  },

  stepImage: {
    marginTop: 10,
    marginLeft: 126,
    marginRight: 126
  },

  descriptionStep: {
    color:'#5C2A9D',
    fontSize: 14,
    width: 300,
    marginTop: 10,
    marginLeft: 90,
    marginRight: 90,
    fontWeight: 'bold',
  },

  buttonCam: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#5C2A9D',
    borderRadius: 5,
    alignItems: 'center',
    width: 60,
    padding: 20,
    marginTop: 20,
    marginLeft: 160,
    marginRight: 160
  },

  containerInput: {
    width: 300,
    marginLeft: 50,
    marginRight: 50,
    alignItems: 'center'
  },

  selectButton: {
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DBDBDB',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: 8,
  },

  textSelectButton: {
    color: '#7D7D7D',
  },

  containerOptions: {
    marginTop: 10,
    flexDirection: 'row',
    marginLeft: 50,
    marginRight: 50,
  },

  category: {
    backgroundColor: '#5C2A9D',
    borderRadius: 4,
    padding: 10,
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 5,
    marginRight: 5,
    width: 90,
    alignItems: 'center',
    textAlign: 'center'
  },

  textCategory: {
    color: '#fff',
    fontSize: 10
  },

  containerDuo: {
    width: 300,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 50,
    marginRight: 50,
  },

  containerEntrega: {
    width: 200,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginRight: 80,
  }

});

export { styles };