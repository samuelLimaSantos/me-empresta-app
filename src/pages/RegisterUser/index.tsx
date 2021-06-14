import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../RegisterUser/styles";
import { SimpleInput } from "../../components/SimpleInput";
import { SimpleButton } from "../../components/SimpleButton";
import imageStepOne from '../../../assets/cadastro-step1.png';
import imageStepTwo from '../../../assets/cadastro-step2.png';
import confirmRegister from '../../../assets/confirmed.png';

import { useNavigation } from "@react-navigation/native";


const RegisterUser = () => {

  const navigation = useNavigation();

  const [nextStep, setNextStep] = useState(false);
  const [finishRegister, setFinishRegister] = useState(false);


  return (

    <ScrollView>
      <SafeAreaView style={styles.container}>

        {nextStep !== true &&
          <>
            <Image source={imageStepOne} style={styles.imageStep} />

            <Text style={styles.title}>Criar conta</Text>
            <Text style={styles.subTitle}>Preencha os campos e tenha acesso a plataforma</Text>

            <View style={styles.containerForm}>
              <SimpleInput
                placeholder="Nome"
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
              />
              <SimpleInput
                placeholder="E-mail"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
              />
              <SimpleInput
                placeholder="Cidade"
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
              />
              <SimpleInput
                placeholder="Estado"
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
              />

              <View style={styles.containerButton}>
                <SimpleButton click={() => {
                  setNextStep(true)
                }} title="Avançar" />

                <TouchableOpacity onPress={() => { navigation.navigate("Login"); }} style={styles.containerFakeButton}>
                  <Text style={styles.fakeButtonText}>Já possue conta? Conecte-se</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        }

        {nextStep !== false && finishRegister === false &&
          <>
            <Image source={imageStepTwo} style={styles.imageStep} />

            <Text style={styles.title}>Dados cadatrais</Text>
            <Text style={styles.subTitle}>Preencha os campos com os seus dados</Text>

            <View style={styles.containerForm}>
              <SimpleInput
                placeholder="CPF"
                keyboardType="numeric"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
              />
              <SimpleInput
                placeholder="Telefone"
                keyboardType="numeric"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
              />
              <SimpleInput
                placeholder="Senha"
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
              />
              <SimpleInput
                placeholder="Confirmar senha"
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
              />

              <View style={styles.containerButton}>
                <SimpleButton click={() => {
                  setFinishRegister(true)
                }} title="Finalizar cadastro" />
              </View>

              <TouchableOpacity onPress={() => { setNextStep(false) }} style={styles.containerFakeButton}>
                <Text style={styles.fakeButtonText}>Voltar</Text>
              </TouchableOpacity>
            </View>
          </>
        }

        {finishRegister === true &&
          <>
            <Image source={confirmRegister} style={styles.imageStep} />

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

              <View style={styles.containerButton}>
                <SimpleButton click={() => {
                  setFinishRegister(true)
                }} title="Concluir cadastro" />

                <TouchableOpacity onPress={() => { setNextStep(false); setFinishRegister(false) }} style={styles.containerFakeButton}>
                  <Text style={styles.fakeButtonText}>Editar informações</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        }

      </SafeAreaView>
    </ScrollView>
  )
};

export { RegisterUser };