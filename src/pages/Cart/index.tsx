import React, { useEffect, useState } from "react";
import { View,
  Text, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, SafeAreaView, Linking } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { MenuSideBar } from "../../components/MenuSideBar";
import { ProductProps } from "../Home";

import astronautaLogin from "../../assets/astronauta-login.png";

import { Ionicons } from '@expo/vector-icons';
import CheckBox from '@react-native-community/checkbox';
import { SimpleButton } from "../../components/SimpleButton";


const Cart = () => {

  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  var products = {} as ProductProps;
  const route = useRoute();
  if (route.params) {
    const  { product }  = route.params as any;
    if (product) {
      products = product as ProductProps;
    
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <Header title1="Carrinho" title2="Compras" />
      <SafeAreaView style={styles.containerItens}>
        <Text style={styles.label}>Total de itens no carrinho: {products.title ? 1 : 0} </Text>
        {products.title ? (
          <>
            <ScrollView >
              <SafeAreaView style={styles.containerList}>
                <SafeAreaView style={styles.containerDetailProductCart}>
                  <View>
                    <Image source={{
                      uri: `https://upload-meempresta.s3.amazonaws.com/${products.photo_id}`
                    }} style={styles.productImage} />
                  </View>

                  <View style={styles.boxNameDelivery}>
                    <Text style={styles.textProduct}>{products.title}</Text>
                    <Text style={styles.textDelivery}>{products.delivery_way === 'presential' ? 'Entrega presencial' : 'Entrega por correios'}</Text>
                  </View>

                  <Text style={styles.textDays}>{products.quantity_days} dias</Text>

                  <Text style={styles.textPrice}>R${products.price.replace('.', ',')}</Text>

                  

                  <Ionicons name="trash-outline" size={24} color="red" style={styles.iconTrash} />
                </SafeAreaView>

              </SafeAreaView>
            </ScrollView>
            <SafeAreaView style={styles.boxTotal}>
              <Text style={styles.textTotal}>Total</Text>
              <Text style={styles.textPriceTotal}>R${products.price.replace('.', ',')}</Text>
              <SafeAreaView style={styles.containerOptions} >
                <SimpleButton 
                  title="Finalizar compra" 
                  click={()=>Linking.openURL(`whatsapp://send?text=Olá Rebeca, gostaria de marcar para pegar o produto ${products.title}&phone=55818505-8518`)}/>
              </SafeAreaView>
            </SafeAreaView>
          </>
        ) : (
          <View>
            <Text>
              Não tem nenhum item no seu carrinho
            </Text>
          </View>
        )}


      </SafeAreaView>

    </SafeAreaView>
  )
}

export { Cart };