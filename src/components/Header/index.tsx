import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native'
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

interface IHeaderProps {
    title1: string;
    title2: string;
}

const Header = ({ title1, title2 }: IHeaderProps) => {

    const navigation = useNavigation();


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#0400BE" translucent />

            <View style={styles.containerHeader}>

                <View style={styles.titlePage}>
                    <Text style={styles.title}>{title1}</Text>
                    <Text style={styles.divisor}>•</Text>
                    <Text style={styles.subtitle}>{title2}</Text>
                </View>

                <View style={styles.containerOptionsHeader}>
                    <TouchableOpacity activeOpacity={0.4} style={styles.buttonIcons}>
                        <Ionicons name="filter-outline" size={26} color="#9347F6" />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.4} style={styles.buttonIcons}>
                        <MaterialIcons name="favorite" size={26} color="red" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> {navigation.navigate('Cart')}} activeOpacity={0.4} style={styles.buttonIcons}>
                        <Ionicons name="cart-outline" size={26} color="#9347F6" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export { Header };
