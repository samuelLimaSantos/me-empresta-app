import React, { useState, useCallback } from "react";
import { 
  View,
  Text,
  KeyboardAvoidingView, 
  Image, 
  Platform, 
  SafeAreaView,
  Alert,
} from "react-native";
import { SimpleButton } from "../../components/SimpleButton";
import astronautaLogin from "../../assets/astronauta-login.png";
import { SimpleInput } from "../../components/SimpleInput";
import { useNavigation } from "@react-navigation/native";
import * as Yup from 'yup';
import { useAuth } from '../../hooks/auth';
import { styles } from "./styles";
import { SimpleButtonWithoutBackground } from "../../components/SimpleButtonWithoutBackground";
import { Loading } from "../../components/Loading";

const Login = () => {

  const navigation = useNavigation();

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ loading, setLoading] = useState(false);
  const { signIn, userId  } = useAuth();

  const handleLogin = useCallback( async () => {
    try {
      setLoading(true);

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um E-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate({ email, password }, {
        abortEarly: false,
      });
  
      await signIn({
        email,
        password
      });

      setLoading(false);

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

  }, [email, password, signIn])

  return (
    <>
      <SafeAreaView style={{ flex: 1}}>

        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>

          <View style={styles.signInContainer}>
            <Text style={styles.signText}>
              Sign
            </Text>
            <Text style={styles.inText}>
              In
            </Text>
          </View>

          <View style={styles.notHaveAccountContainer}>
            <Text style={styles.notHaveAccountContainerTextOne}>
              Não tem uma conta?
            </Text>

            <SimpleButtonWithoutBackground 
              onPress={() => navigation.navigate("RegisterUser")} 
              title="Cadastre-se"
            />
          
          </View>

          <View>
            <SimpleInput
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="next"
              onChangeText={setEmail}
              />
            <SimpleInput
              placeholder="Senha"
              secureTextEntry
              returnKeyType="send"
              onChangeText={setPassword}
              />
          </View>

          <View style={styles.containerButton}>
            <SimpleButton 
              click={handleLogin}
              title="Login"
              />
          </View>
        </KeyboardAvoidingView>

        <Image source={astronautaLogin} style={styles.image} />
      </SafeAreaView>
      {loading && <Loading />}
    </>
  )
}

export { Login };