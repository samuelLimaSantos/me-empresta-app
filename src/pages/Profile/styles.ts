import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { theme } from '../../global/styles';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center',
  },

  containerItens: {
    width: 385,
    height: 670,
    marginTop: 85,
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center"
  },

  label: {
    color: '#5C2A9D',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10
  },

  containerList: {
    alignItems: 'center',
    marginTop: 10
  },

  productImage: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#5C2A9D',
    borderRadius: 4,
  },


  containerDetailProductCart: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between'
  },

  boxNameDelivery: {
    width: 114,
    marginLeft: 10,
  },

  textProduct: {
    color: '#5C2A9D',
    fontSize: 14,
    marginLeft: 5,
    fontWeight: 'bold'
  },

  textDelivery: {
    color: '#455A64',
    fontSize: 12,
    marginLeft: 5,
    fontWeight: 'bold'
  },

  textDays: {
    color: '#455A64',
    fontSize: 12,
    marginLeft: 5,
    marginRight: 10,
    fontWeight: 'bold'
  },

  textPrice: {
    color: '#5C2A9D',
    fontSize: 14,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold'
  },

  iconTrash: {
    marginLeft: 10,
    marginRight: 10
  },

  boxTotal: {
    alignItems: 'center',
    marginBottom: 80
  },

  textTotal: {
    color: '#455A64',
    fontSize: 32,
    fontWeight: 'bold'
  },

  textPriceTotal: {
    color: '#5C2A9D',
    fontSize: 32,
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 'bold'
  },

  containerOptions: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 40,
    width: '100%'
  },

  boxCheckbox: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 58
  },

  fakeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5C2A9D',
    borderRadius: 4,
    padding: 10,
    marginLeft: 10,
    marginRight: 10
  },

  textButton: {
    color: '#fff',
    fontSize: 10,
  },

  fakeButtonAlternative: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDE46E',
    borderRadius: 4,
    padding: 10,
    marginLeft: 10,
    marginRight: 10
  },

  textButtonAlternative: {
    color: '#5C2A9D',
    fontSize: 10,
    fontWeight: 'bold'
  },

});

export { styles };