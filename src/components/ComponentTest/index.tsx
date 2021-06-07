import React from "react";
import { View, Text } from "react-native";

interface IComponentTestProps {
  text: string;
  text2?: string;
}

const ComponentTest = (props: IComponentTestProps) => {
  return (
    <View>
      <Text style={{ fontSize: 28 }}>{props.text}</Text>
    </View>
  )
}

export { ComponentTest };