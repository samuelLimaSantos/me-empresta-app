import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Inter_100Thin, Inter_400Regular } from "@expo-google-fonts/inter";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },

  containerSearch: {
    backgroundColor: '#fff',
    marginTop: 65,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 50,
    paddingRight: 50
  },

  containerProdutos: {
    width: 385,
    height: 670,
    marginTop: 85,
    marginBottom: 50
  },

  containerProdutosSearch: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: 400,
    height: 600,
  },

  limiteContainer: {
    flexDirection: 'row',
  },

  product: {
    marginBottom: 10
  },

  titleContainer: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4B00EB',
    marginLeft: 14,
    marginTop: 2,
    marginBottom: 6,
  },

  produto: {
    backgroundColor: '#fff',
    width: 180,
    height: 260,
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },

  imageProduct: {
    width: 140,
    height: 150,
    alignItems: 'center',
  },

  boxNota: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4B00EB',
    paddingTop: 10,
    paddingBottom: 10,
    width: 40,
    height: 40,
    borderRadius: 70,
    marginTop: 130
  },

  Nota: {
    color: 'yellow',
    fontWeight: '700',
  }, 

  titleProduto: {
    marginTop: 20,
    fontWeight:'700',
    fontSize: 14,
  },

  categoryProduto: {
    backgroundColor: 'yellow',
    fontWeight:'700',
    fontSize: 12,
    padding: 12,
    paddingTop: 4,
    paddingBottom: 4,
    marginTop: 4,
    borderRadius: 5
  },

  valueProduto: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },

  precoProduto: {
    fontSize: 20,
    color: 'blue',
    fontWeight:'bold',
  },

  tempoProduto: {
    fontSize: 10,
    color: 'blue',
    fontWeight:'700',
  },

  buttonMore: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: '#4B00EB',
    borderRadius: 20,
    width: 140,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    marginLeft: '34%',
    marginRight: '34%',
    marginBottom: 30
  },

  textButtonMore: {
    color: '#4B00EB'
  }
});

export { styles };