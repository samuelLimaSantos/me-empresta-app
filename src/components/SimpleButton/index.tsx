import React from "react";
import { Text } from "react-native";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from "./styles";

type SimpleButtonProps = RectButtonProps & {
  click: () => void,
  title: string;
}

const SimpleButton = ({click, title, ...rest}: SimpleButtonProps) => {
  return (
    <RectButton style={styles.button} onPress={click} {...rest}>
      <Text style={styles.textButton}>
        {title}
      </Text>
    </RectButton>
  )
}

export { SimpleButton };