import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { theme } from "../../global/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  containerProdutos: {
    width: '100%',
    marginBottom: 60,

  },

  limiteContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap:"wrap"
  },

  product: {
    marginBottom: 10
  },

  titleContainer: {
    fontSize: 24,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    marginLeft: 14,
    marginTop: 24,
    marginBottom: 32,
  },

  produto: {
    backgroundColor: '#fff',
    width: 170,
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
    backgroundColor:  theme.colors.primary,
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
    color: theme.colors.text
  },

  categoryProduto: {
    backgroundColor: 'yellow',
    color: theme.colors.text,
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
    color: theme.colors.primary,
    fontWeight:'bold',
  },

  tempoProduto: {
    fontSize: 10,
    color: theme.colors.primary,
    fontWeight:'700',
  },

  buttonMore: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: theme.colors.primary,
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
    color: theme.colors.primary
  }
});

export { styles };