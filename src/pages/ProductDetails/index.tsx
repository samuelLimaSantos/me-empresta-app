import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { SafeAreaView, ScrollView, Text, Image, View } from 'react-native';
import { Header } from '../../components/Header';
import { SimpleButton } from '../../components/SimpleButton';
import { ProductProps } from '../Home';
import { styles } from './styles';


export const ProductDetails = () => {

  const route = useRoute();
  const  { product }  = route.params as any;

  const { 
    description,
    photo_id, 
    price, 
    quantity_days, 
    title,
    city,
    delivery_point,
    delivery_way,
    uf
  } = product as ProductProps;

  const navigation = useNavigation();

  const goToCart = useCallback(() => {
    navigation.navigate("Cart", {product});
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Header title1="Detalhes do produto" title2="" />
        <View>
          <View>
            <Image
              style={styles.image} 
              source={{ uri: `https://upload-meempresta.s3.amazonaws.com/${photo_id}` }}
            />
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.blockContent}>
              <Text style={styles.title}> 
                {title}  
              </Text>
            </View>

            <View style={styles.blockContent}>
              <Text style={styles.text}>
                {description}  
              </Text>
            </View>

            <View style={styles.blockContent}>
              <Text style={styles.text}>
                 Entrega: {delivery_way !== 'presential' ? 'Correios': 'Presencial'}
              </Text>

                {delivery_way === 'presential' && (
                  <View>
                    <Text style={styles.text}>
                      Ponto de entrega: {delivery_point}
                    </Text>

                    <Text style={styles.text}>
                      Cidade: {city}
                    </Text>

                    <Text style={styles.text}>
                      Estado: {uf}
                    </Text>
                  </View>
                )}
            </View>

            <View style={styles.blockContentPrice}>
              <Text style={styles.textDays}>
                Alugue por {quantity_days} dias 
              </Text>
              <Text style={styles.textPrice}>
                R${price.replace('.', ',')}
              </Text>
            </View>
            
            <View style={styles.buttonContainer}>
              <SimpleButton title="Pegar emprestado" click={goToCart}/>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}