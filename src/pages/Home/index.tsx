import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { MenuSideBar } from "../../components/MenuSideBar";
import { SimpleInput } from "../../components/SimpleInput";
import astronautaLogin from "../../../assets/astronauta-login.png";
import { useAuth } from "../../hooks/auth";

const Home = () => {

  const navigation = useNavigation();
  const [search, setSearch] = useState(false);
  const { signOut } = useAuth();


  return (
    <SafeAreaView style={styles.container}>
      <Header title1="Home" title2="Feed" />
      <TouchableOpacity onPress={signOut}>
        <Text style={{ fontSize: 30, fontWeight: 'bold'}}>
          SAIR
        </Text>
      </TouchableOpacity>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.containerProdutos}>

          <Text style={styles.titleContainer}>Novos itens</Text>

          <View style={styles.limiteContainer}>
            <TouchableOpacity activeOpacity={0.7} style={styles.product}>
              <View style={styles.produto}>
                <ImageBackground style={styles.imageProduct} source={astronautaLogin}>
                  <View style={styles.boxNota}>
                    <Text style={styles.Nota}>7.0</Text>
                  </View>
                </ImageBackground>

                <Text style={styles.titleProduto}>Monitor Odyssey</Text>
                <Text style={styles.categoryProduto}>Eletrônico</Text>

                <View style={styles.valueProduto}>
                  <Text style={styles.precoProduto}> R$ 2000,00</Text>
                  <Text style={styles.tempoProduto}> por 10 dias</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity  activeOpacity={0.7} style={styles.product}>
              <View style={styles.produto}>
                <ImageBackground style={styles.imageProduct} source={astronautaLogin}>
                  <View style={styles.boxNota}>
                    <Text style={styles.Nota}>7.0</Text>
                  </View>
                </ImageBackground>

                <Text style={styles.titleProduto}>Monitor Odyssey</Text>
                <Text style={styles.categoryProduto}>Eletrônico</Text>

                <View style={styles.valueProduto}>
                  <Text style={styles.precoProduto}> R$ 2000,00</Text>
                  <Text style={styles.tempoProduto}> por 10 dias</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.limiteContainer}>

            <TouchableOpacity  activeOpacity={0.7} style={styles.product}>
              <View style={styles.produto}>
                <ImageBackground style={styles.imageProduct} source={astronautaLogin}>
                  <View style={styles.boxNota}>
                    <Text style={styles.Nota}>7.0</Text>
                  </View>
                </ImageBackground>

                <Text style={styles.titleProduto}>Monitor Odyssey</Text>
                <Text style={styles.categoryProduto}>Eletrônico</Text>

                <View style={styles.valueProduto}>
                  <Text style={styles.precoProduto}> R$ 2000,00</Text>
                  <Text style={styles.tempoProduto}> por 10 dias</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.product}>
              <View style={styles.produto}>
                <ImageBackground style={styles.imageProduct} source={astronautaLogin}>
                  <View style={styles.boxNota}>
                    <Text style={styles.Nota}>7.0</Text>
                  </View>
                </ImageBackground>

                <Text style={styles.titleProduto}>Monitor LG 29WK600</Text>
                <Text style={styles.categoryProduto}>Eletrônico</Text>

                <View style={styles.valueProduto}>
                  <Text style={styles.precoProduto}> R$ 1000,00</Text>
                  <Text style={styles.tempoProduto}> por 20 dias</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity activeOpacity={0.7} style={styles.buttonMore}>
            <Text style={styles.textButtonMore}>Mostrar mais</Text>
          </TouchableOpacity>

          {/* Outros */}
          <Text style={styles.titleContainer}>Mais procurados</Text>

          <View style={styles.limiteContainer}>
            <TouchableOpacity activeOpacity={0.7} style={styles.product}>
              <View style={styles.produto}>
                <ImageBackground style={styles.imageProduct} source={astronautaLogin}>
                  <View style={styles.boxNota}>
                    <Text style={styles.Nota}>7.0</Text>
                  </View>
                </ImageBackground>

                <Text style={styles.titleProduto}>Monitor Odyssey</Text>
                <Text style={styles.categoryProduto}>Eletrônico</Text>

                <View style={styles.valueProduto}>
                  <Text style={styles.precoProduto}> R$ 2000,00</Text>
                  <Text style={styles.tempoProduto}> por 10 dias</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.product}>
              <View style={styles.produto}>
                <ImageBackground style={styles.imageProduct} source={astronautaLogin}>
                  <View style={styles.boxNota}>
                    <Text style={styles.Nota}>7.0</Text>
                  </View>
                </ImageBackground>

                <Text style={styles.titleProduto}>Monitor Odyssey</Text>
                <Text style={styles.categoryProduto}>Eletrônico</Text>

                <View style={styles.valueProduto}>
                  <Text style={styles.precoProduto}> R$ 2000,00</Text>
                  <Text style={styles.tempoProduto}> por 10 dias</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>


          <View style={styles.limiteContainer}>
            <TouchableOpacity activeOpacity={0.7} style={styles.product}>
              <View style={styles.produto}>
                <ImageBackground style={styles.imageProduct} source={astronautaLogin}>
                  <View style={styles.boxNota}>
                    <Text style={styles.Nota}>7.0</Text>
                  </View>
                </ImageBackground>

                <Text style={styles.titleProduto}>Monitor Odyssey</Text>
                <Text style={styles.categoryProduto}>Eletrônico</Text>

                <View style={styles.valueProduto}>
                  <Text style={styles.precoProduto}> R$ 2000,00</Text>
                  <Text style={styles.tempoProduto}> por 10 dias</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={styles.product}>
              <View style={styles.produto}>
                <ImageBackground style={styles.imageProduct} source={astronautaLogin}>
                  <View style={styles.boxNota}>
                    <Text style={styles.Nota}>7.0</Text>
                  </View>
                </ImageBackground>

                <Text style={styles.titleProduto}>Monitor Odyssey</Text>
                <Text style={styles.categoryProduto}>Eletrônico</Text>

                <View style={styles.valueProduto}>
                  <Text style={styles.precoProduto}> R$ 2000,00</Text>
                  <Text style={styles.tempoProduto}> por 10 dias</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity activeOpacity={0.7} style={styles.buttonMore}>
            <Text style={styles.textButtonMore}>Mostrar mais</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>

      <MenuSideBar />
    </SafeAreaView>
  )
}

export { Home };