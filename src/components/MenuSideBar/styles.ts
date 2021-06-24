import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: '7%',
    backgroundColor: "#0400BE",
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    position: 'absolute', 
    left: 0, 
    right: 0, 
    bottom: 0
  },

  containerOptions: {
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  icons: {
    width: 25,
    height: 25,
  },

  optionsActive: {
    color: '#FDE46E',
    fontWeight: 'bold',
    fontSize: 10,
  },

  optionsDeactive: {
    color: '#fff',
    fontSize: 10
  },

  optionsDeactiveAdd: {
    color: '#0400BE',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40
  },

  boxOptions: {
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },

  boxOptionsAdd: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    height: 58,
    borderRadius: 50,
  },


});

export { styles };