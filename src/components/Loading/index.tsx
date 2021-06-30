import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { theme } from '../../global/styles';
import { styles } from './styles';

export const Loading = () => {
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator size="large" color={theme
        .colors.primary}/>
    </View>
  )
}
