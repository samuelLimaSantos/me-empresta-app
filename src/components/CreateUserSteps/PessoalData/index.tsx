import React, { useCallback, useState } from 'react';
import { View, Text,  KeyboardAvoidingView, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SimpleInput } from '../../SimpleInput';
import { styles } from './styles';
import { PickerPhoto } from '../../PickerPhoto';
import { TextInputMask } from 'react-native-masked-text'


type Props = {
  image: string;
  cpf: string;
  whatsapp: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setCpf: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setWhatsapp: React.Dispatch<React.SetStateAction<string>>;
}

export const PessoalData = ({
  image,
  setImage,
  cpf,
  whatsapp,
  setCpf,
  setName,
  setWhatsapp
}: Props) => {

  const handleSelectImages = useCallback(async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      alert('Eita, precisamos de acesso às suas fotos...');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false
    });

    if (result.cancelled) {
      return;
    }

    const { uri: image } = result;

    setImage(image);
  }, [image]);

  return (
    <KeyboardAvoidingView style={{ paddingHorizontal: 30, flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Text style={styles.title}>Criar conta</Text>
      <Text style={styles.subTitle}>Preencha os seus dados pessoais</Text>

      <View style={styles.containerForm}>

      <View style={styles.containerPicker}>
        <PickerPhoto 
          changePhoto={handleSelectImages}
          uri={image}  
        />

      </View>

        <View style={styles.containerInput}>
          <SimpleInput
            placeholder="Nome"
            keyboardType="default"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onChangeText={setName}
          />

            
        </View>

        <View style={styles.containerInput}>
          <TextInputMask
            type={'cpf'}
            value={cpf}
            onChangeText={text => {
              setCpf(text)
            }}
            style={styles.input}
            placeholder="CPF"
          />


        </View>

      <View style={styles.containerInput}>

          <TextInputMask
            type={'cel-phone'}
            value={whatsapp}
            onChangeText={text => {
              setWhatsapp(text)
            }}
            style={styles.input}
            placeholder="Whatsapp"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}