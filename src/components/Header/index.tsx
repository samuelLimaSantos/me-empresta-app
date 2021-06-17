import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import { styles } from './styles';

import filterIcon from '../../../assets/icons/filter-icon.png';
import favoriteIcon from '../../../assets/icons/favorite-icon.png';
import cartIcon from '../../../assets/icons/cart-icon.png';

const Header = () => {

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.containerHeader}>

                <View style={styles.titlePage}>
                    <Text style={styles.title}>Home</Text>
                    <Text style={styles.divisor}>•</Text>
                    <Text style={styles.subtitle}>Feed</Text>
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
