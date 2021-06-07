import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

interface SimpleInputProps extends TextInputProps {
  placeholder: string
}

const SimpleInput = ({placeholder, ...rest}: SimpleInputProps) => {
  return (
    <TextInput placeholder={placeholder} style={styles.input} {...rest}/>
  )
};

export { SimpleInput };