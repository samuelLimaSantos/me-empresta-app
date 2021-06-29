import React from "react";
import { Text } from "react-native";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from "./styles";

type SimpleButtonProps = RectButtonProps & {
  title: string;
}

const SimpleButtonWithoutBackground = ({ title, ...rest}: SimpleButtonProps) => {
  return (
    <RectButton {...rest}>
      <Text style={styles.textButton}>
        {title}
      </Text>
    </RectButton>
  )
}

export { SimpleButtonWithoutBackground };