import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { View, Image } from 'react-native';
import { theme } from '../../global/styles';
import { styles } from './styles';

type Props = {
  changePhoto: () => void;
  uri?: string | undefined;
}

export const PickerPhoto = ({ changePhoto, uri }: Props) => {



  return (
    <View style={styles.container}>

      {
        uri ? (
          <>
            <Image source={{ uri }} style={styles.image}/>
            <Feather 
              name="edit" 
              size={24} 
              color={theme.colors.primary}
              style={styles.editButton} 
              onPress={changePhoto}
            />
          </>
        ) : (
          <MaterialIcons 
            name="add-a-photo" 
            size={40} 
            color={theme.colors.primary} 
            onPress={changePhoto}
          />
        )}

      
    </View>
  )
}