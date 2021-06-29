import React from 'react';
import { View, Text, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { SimpleInput } from '../../SimpleInput';
import { styles } from './styles';
import credentialsImage from '../../../assets/credentialsImage.png';

type Props = {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export const Credentials = ({ setEmail, setPassword }: Props) => {
  return (
    <KeyboardAvoidingView style={{ paddingHorizontal: 30, flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Text style={styles.title}>Criar conta</Text>
      <Text style={styles.subTitle}>Preencha as credenciais de acesso</Text>

      <View style={styles.containerForm}>

      </View>

        <Image source={credentialsImage} style={styles.image}/>


        <View style={styles.containerInput}>

          <SimpleInput
            placeholder="E-mail"
            keyboardType="email-address"
            autoCorrect={false}
            returnKeyType="next"
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </View>

      <View style={styles.containerInput}>

        <SimpleInput
            placeholder="Senha"
            autoCorrect={false}
            returnKeyType="next"
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>
    </KeyboardAvoidingView>
  )
}
