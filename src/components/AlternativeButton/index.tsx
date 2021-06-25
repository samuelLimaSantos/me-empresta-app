import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type SimpleButtonProps = {
  click: () => void,
  title: string;
}

const AlternativeButton = ({click, title}: SimpleButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={click}>
      <Text style={styles.textButton}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export { AlternativeButton };