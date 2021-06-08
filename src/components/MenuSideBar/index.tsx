import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles';

type MenuSideBar = {
    title: string;
  }

const MenuSideBar = ( {title}: MenuSideBar) => {
    return (
        <View style={styles.container}>
            <Text>
                {title}
            </Text>
        </View>
    )
}

export {MenuSideBar};
