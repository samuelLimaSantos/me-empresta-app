import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { MenuSideBar } from "../../components/MenuSideBar";

import astronautaLogin from "../../assets/astronauta-login.png";

import { Ionicons } from '@expo/vector-icons';
import CheckBox from '@react-native-community/checkbox';


const Cart = () => {

  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Header title1="Carrinho" title2="Compras" />
      <SafeAreaView style={styles.containerItens}>
        <Text style={styles.label}>Total de itens no carrinho: 3</Text>
        <ScrollView showsVerticalScrollIndicator={false} >
          <SafeAreaView style={styles.containerList}>
            <SafeAreaView style={styles.containerDetailProductCart}>
              <View>
                <Image source={astronautaLogin} style={styles.productImage} />
              </View>

              <View style={styles.boxNameDelivery}>
                <Text style={styles.textProduct}>Samsung S10+</Text>
                <Text style={styles.textDelivery}>Entrega presencial</Text>
              </View>

              <Text style={styles.textDays}>20 dias</Text>

              <Text style={styles.textPrice}>{`R$ 20,00`}</Text>

              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />

              <Ionicons name="trash-outline" size={24} color="red" style={styles.iconTrash} />
            </SafeAreaView>

            <SafeAreaView style={styles.containerDetailProductCart}>
              <View>
                <Image source={astronautaLogin} style={styles.productImage} />
              </View>

              <View style={styles.boxNameDelivery}>
                <Text style={styles.textProduct}>Samsung S10+</Text>
                <Text style={styles.textDelivery}>Entrega presencial</Text>
              </View>

              <Text style={styles.textDays}>20 dias</Text>

              <Text style={styles.textPrice}>{`R$ 20,00`}</Text>

              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />

              <Ionicons name="trash-outline" size={24} color="red" style={styles.iconTrash} />
            </SafeAreaView>

            <SafeAreaView style={styles.containerDetailProductCart}>
              <View>
                <Image source={astronautaLogin} style={styles.productImage} />
              </View>

              <View style={styles.boxNameDelivery}>
                <Text style={styles.textProduct}>Samsung S10+</Text>
                <Text style={styles.textDelivery}>Entrega presencial</Text>
              </View>

              <Text style={styles.textDays}>20 dias</Text>

              <Text style={styles.textPrice}>{`R$ 20,00`}</Text>

              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />

              <Ionicons name="trash-outline" size={24} color="red" style={styles.iconTrash} />
            </SafeAreaView>



          </SafeAreaView>
        </ScrollView>
        <SafeAreaView style={styles.boxTotal}>
          <Text style={styles.textTotal}>Total</Text>
          <Text style={styles.textPriceTotal}>{`R$ 1650,00`}</Text>

          <SafeAreaView style={styles.containerOptions} >
            <View style={styles.boxCheckbox}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
              <Text>Tudo</Text>
            </View>

            <TouchableOpacity style={styles.fakeButton}>
              <Text style={styles.textButton}>Continuar comprando</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.fakeButtonAlternative}>
              <Text style={styles.textButtonAlternative}>Finalizar compra</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </SafeAreaView>


      </SafeAreaView>

    </SafeAreaView>
  )
}

export { Cart };