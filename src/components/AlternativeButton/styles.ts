import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: "60%",
    backgroundColor: "#fff",
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    borderStyle:"solid",
    borderColor: "#9347F6",
    borderWidth: 2

  },
  textButton: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 20,
    color: "#9347F6",
    marginVertical: 8
  }
});

export { styles };