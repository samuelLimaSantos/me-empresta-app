import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { api } from '../../services/api';
import { Loading } from "../../components/Loading";
interface ProductProps {
  id: string;
  photo_id: string;
  title: string;
  description: string;
  price: string;
  quantity_days: number;
}

const Home = () => {

  const navigation = useNavigation();
  const [search, setSearch] = useState(false);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    api.get(`/product`).then(response => {
      setProducts(response.data);
      setIsLoading(false);
    });
  }, []);



  return (
    <>
    <SafeAreaView style={styles.container}>
      <Header title1="Home" title2="Feed" hasSearch/>
      
      <SafeAreaView>
        <ScrollView  style={styles.containerProdutos}>

          <Text style={styles.titleContainer}>Novos itens</Text>

          <View style={styles.limiteContainer}>
            {products.map(product => (
              <TouchableOpacity activeOpacity={0.7} style={styles.product} key={product.id}>
                <View style={styles.produto}>
                  <ImageBackground style={styles.imageProduct} source={{
                    uri: `https://upload-meempresta.s3.amazonaws.com/${product.photo_id}`
                  }}>
                    <View style={styles.boxNota}>
                      <Text style={styles.Nota}>7.0</Text>
                    </View>
                  </ImageBackground>

                  <Text style={styles.titleProduto}>{product.title}</Text>
                  {/* <Text style={styles.categoryProduto}>Eletrônico</Text> */}

                  <View style={styles.valueProduto}>
                    <Text style={styles.precoProduto}>R${product.price.replace('.', ',')}</Text>
                    <Text style={styles.tempoProduto}> por {product.quantity_days} dias</Text>
                  </View>
                </View>
              </TouchableOpacity>

            ))}

          </View>

          
        </ScrollView>
      </SafeAreaView>
      
    </SafeAreaView>
    {isLoading && <Loading />}
    </>
  )
}

export { Home };