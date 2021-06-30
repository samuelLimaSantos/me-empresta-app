import React, { useState, useCallback } from "react";
import { View, ScrollView, ActivityIndicator, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { SimpleButton } from "../../components/SimpleButton";
import { useNavigation } from "@react-navigation/native";
import { PessoalData } from "../../components/CreateUserSteps/PessoalData";
import { Credentials } from "../../components/CreateUserSteps/Credentials";
import { Review } from "../../components/CreateUserSteps/Review";
import { SimpleButtonWithoutBackground } from "../../components/SimpleButtonWithoutBackground";
import { api } from '../../services/api';
import { theme } from "../../global/styles";
import { styles } from "./styles";
import * as Yup from 'yup';
import { Loading } from "../../components/Loading";

enum Steps {
  pessoalData = 0,
  credentials = 1,
  review = 2
}

const RegisterUser = () => {

  const navigation = useNavigation();
  
  const [ loading, setLoading ] = useState(false);
  /* Variaveis de estado - Step#1 */
  const [image, setImage] = useState<string>("");
  const [ name, setName ] = useState("");
  const [ cpf, setCpf ] = useState("");
  const [ whatsapp, setWhatsapp ] = useState("");

  /* Variaveis de estado - Step#2 */
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const [ step, setStep ] = useState(Steps.pessoalData);


  const showSteps = useCallback((step: Steps) => {
    switch(step) {
      case Steps.pessoalData:
        return <PessoalData 
                  image={image} 
                  setImage={setImage}
                  setName={setName}
                  cpf={cpf}
                  setCpf={setCpf}
                  whatsapp={whatsapp}
                  setWhatsapp={setWhatsapp}
                />;
      case Steps.credentials:
        return <Credentials setEmail={setEmail} setPassword={setPassword}/>;
      case Steps.review:
        return <Review />;
      default:
        return <PessoalData 
                image={image} 
                setImage={setImage}
                setName={setName}
                cpf={cpf}
                setCpf={setCpf}
                whatsapp={whatsapp}
                setWhatsapp={setWhatsapp}
              />;
    }
  }, [step, image, setImage, cpf, whatsapp]);

  const handleSubmitData = useCallback(
    async () => {
      setLoading(true);

      const cpfUnmask = cpf.split('.').join('').split('-').join('');
      const whatsappUnmask = whatsapp.replace('(', '').replace(')', '').replace(' ', '').replace('-', '');

      const data = new FormData();
      data.append('name', name);
      data.append('cpf', cpfUnmask);
      data.append('whatsapp', whatsappUnmask);
      data.append('email', email);
      data.append('password', password);
      
      data.append('photo', {
        name: `image_.jpg`,
        type: 'image/jpg',
        uri: image,
      } as any);
      
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um E-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
          name: Yup.string().required('Nome obrigatório'),
          whatsapp: Yup.string().min(9, "Telefone inválido").required("Whatsapp obrigatório"),
          cpf: Yup.string().min(11, "CPF inválido").required("CPF obrigatório"),
        });
  
        await schema.validate({ email, password, name, cpf: cpfUnmask, whatsapp: whatsappUnmask }, {
          abortEarly: false,
        });


        await api.post('/user', data);
        setLoading(false);
        navigation.navigate("Login");
      } catch (error) {
        setLoading(false);
        if (error instanceof Yup.ValidationError) {
          const errorMessage = error.inner.reduce((acc, current) => {
            return `${acc} ${current.message}`
          }, '');
  
          return Alert.alert('Erro na autenticação', errorMessage);
        }
  
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer o login, cheque as credenciais',
        );
      }

    },
    [name, cpf, whatsapp, email, password, image, navigation],
  );


  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>

          {showSteps(step)}

            { step !== Steps.credentials && (
              <View style={styles.containerButton}>

                <SimpleButton 
                  click={() => {
                    setStep(step + 1);
                  }} 
                  title="Avançar" 
                />
              </View>
            )}

            { step !== Steps.pessoalData && (
                <SimpleButtonWithoutBackground 
                  title="Voltar" 
                  onPress={() => setStep(step - 1)}
                />
            )}

            { step === Steps.credentials && (
                <View style={styles.containerButton}>

                <SimpleButton 
                  click={handleSubmitData} 
                  title="Cadastrar" 
                />
              </View>
            )}

          <View style={styles.containerButton}>
            <SimpleButtonWithoutBackground 
              title="Já possui conta? Conecte-se" 
              onPress={() => { navigation.navigate("Login"); }} 
            />
          </View>
          
        </SafeAreaView>
      </ScrollView>

      {loading && (
        <Loading />
      )}
    </>
  )
};

export { RegisterUser };