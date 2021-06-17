import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { MenuSideBar } from "../../components/MenuSideBar";
import { SimpleInput } from "../../components/SimpleInput";
import astronautaLogin from "../../../assets/astronauta-login.png";

const Home = () => {

  const navigation = useNavigation();
  const [search, setSearch] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SafeAreaView>

        {search !== true &&
          <SafeAreaView>
            <View style={styles.containerSearch}>
              <SimpleInput
                placeholder="Procurar"
                keyboardType="default"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
              />
            </View>
          </SafeAreaView>
        }

        <ScrollView style={styles.containerProdutosSearch}>
          <Text style={styles.titleContainer}>Novos itens</Text>
          <View style={styles.productContainer}>

            <TouchableOpacity>
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

            <TouchableOpacity>
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
        </ScrollView>

      </SafeAreaView>
      <MenuSideBar />
    </SafeAreaView>
  )
}

export { Home };