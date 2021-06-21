import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native'
import { styles } from './styles';

import filterIcon from '../../../assets/icons/filter-icon.png';
import favoriteIcon from '../../../assets/icons/favorite-icon.png';
import cartIcon from '../../../assets/icons/cart-icon.png';

interface IHeaderProps {
    title1: string;
    title2: string;
}

const Header = ({title1, title2} : IHeaderProps) => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar  barStyle="light-content" backgroundColor="#0400BE" translucent />

            <View style={styles.containerHeader}>

                <View style={styles.titlePage}>
                    <Text style={styles.title}>{title1}</Text>
                    <Text style={styles.divisor}>•</Text>
                    <Text style={styles.subtitle}>{title2}</Text>
                </View>

                <View style={styles.containerOptionsHeader}>
                        <TouchableOpacity style={styles.buttonIcons}>
                            <Image source={filterIcon}  />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonIcons}>
                            <Image source={favoriteIcon} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonIcons}>
                            <Image source={cartIcon} />
                        </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export { Header };
