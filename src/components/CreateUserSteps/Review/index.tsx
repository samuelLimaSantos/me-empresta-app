import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';

export const Review = () => {
  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      {/* <Image source={confirmRegister} style={styles.imageStep} /> */}

      <Text style={styles.title}>Confirmar dados</Text>
      <Text style={styles.subTitle}>Verifique se esta tudo corretamente antes de concluir</Text>

      <View style={styles.containerConfirmeInfo}>

        {/* Review */}
        <View style={styles.containerInfo}>
          <Text style={styles.nameField}>Nome</Text>
          <Text style={styles.resInput}>Samuel Tanga de Limão Santana</Text>
        </View>

        <View style={styles.containerInfo}>
          <Text style={styles.nameField}>E-mail</Text>
          <Text style={styles.resInput}>Samuel.Tanga@hotmart.com</Text>
        </View>

        <View style={styles.containerInfo}>
          <Text style={styles.nameField}>Cidade</Text>
          <Text style={styles.resInput}>Hellcife</Text>
        </View>

        <View style={styles.containerInfo}>
          <Text style={styles.nameField}>Estado</Text>
          <Text style={styles.resInput}>Tilambuco</Text>
        </View>

        <View style={styles.containerInfo}>
          <Text style={styles.nameField}>CPF</Text>
          <Text style={styles.resInput}>123.456.789</Text>
        </View>

        <View style={styles.containerInfo}>
          <Text style={styles.nameField}>Telefone</Text>
          <Text style={styles.resInput}>81 9 40028922</Text>
        </View>

      </View>
  </SafeAreaView>
  )
}