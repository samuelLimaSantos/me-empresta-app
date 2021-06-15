import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },

  containerSearch: {
    backgroundColor: '#fff',
    marginTop: 85,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 50,
    paddingRight: 50
  },

  containerProdutos: {
    backgroundColor: '#000',
    width: 385,
    height: 700,
    marginTop:85,
    marginLeft: 10,
    marginRight: 10
  },

  containerProdutosSearch: {
    width: 400,
    height: 700,
  },

  productContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },

  titleContainer: {
    fontSize: 32,
    fontWeight: '700',
    color: '#4B00EB',
    marginLeft: 14,
    marginTop: 10,
    marginBottom: 6,


  },

  produto: {
    backgroundColor: '#fff',
    width: 180,
    height: 260,
    alignItems: 'center',
    marginLeft: 20
  },

  imageProduct: {
    width: 180,
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
  }


});

export { styles };