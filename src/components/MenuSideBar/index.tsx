import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles';

import homeIcon from '../../../assets/icons/home-icon.png';
import searchIcon from '../../../assets/icons/search-icon.png';
import categoryIcon from '../../../assets/icons/category-icon.png';
import profileIcon from '../../../assets/icons/profile-icon.png';
import { useNavigation } from "@react-navigation/native";

const MenuSideBar = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.containerOptions}>
                <View>
                    <TouchableOpacity onPress={() => { navigation.navigate("Home") }} style={styles.boxOptions}>
                        <Image source={homeIcon} style={styles.icons} />
                        <Text style={styles.optionsActive}>
                            Início
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.boxOptions}>
                        <Image source={searchIcon} style={styles.icons} />
                        <Text style={styles.optionsDeactive}>
                            Buscar
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={() => { navigation.navigate("CreateOffer") }} style={styles.boxOptionsAdd}>
                        <Text style={styles.optionsDeactiveAdd}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={() => { navigation.navigate("Category") }} style={styles.boxOptions}>
                        <Image source={categoryIcon} style={styles.icons} />
                        <Text style={styles.optionsDeactive}>
                            Categorias
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={() => { navigation.navigate("Profile") }} style={styles.boxOptions}>
                        <Image source={profileIcon} style={styles.icons} />
                        <Text style={styles.optionsDeactive}>
                            Perfil
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export { MenuSideBar };
