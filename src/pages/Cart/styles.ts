import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  containerItens: {
    paddingHorizontal: 10,
  },

  label: {
    color: theme.colors.primary,
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
    borderColor: theme.colors.primary,
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
    color: theme.colors.primary,
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
    color: theme.colors.primary,
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
    paddingHorizontal: 10,
    alignItems: 'flex-end',
    marginBottom: 80
  },

  textTotal: {
    color: '#455A64',
    fontSize: 30,
    fontWeight: 'bold',
  },

  textPriceTotal: {
    color: theme.colors.primary,
    fontSize: 30,
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 'bold'
  },

  containerOptions: {
    alignItems: 'center',
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
    backgroundColor: theme.colors.primary,
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
    color: theme.colors.primary,
    fontSize: 10,
    fontWeight: 'bold'
  },

});

export { styles };