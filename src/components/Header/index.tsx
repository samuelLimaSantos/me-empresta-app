import React from 'react'
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, StatusBar } from 'react-native'
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../global/styles';

interface IHeaderProps {
    title1: string;
    title2: string;
    hasSearch?: boolean;
}

const Header = ({ title1, title2, hasSearch }: IHeaderProps) => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} translucent />


            <View style={styles.containerHeader}>

                <View style={styles.titlePage}>
                    <Text style={styles.title}>{title1}</Text>
                    <Text style={styles.divisor}>•</Text>
                    <Text style={styles.subtitle}>{title2}</Text>
                </View>
                
                {hasSearch && (
                     <View style={styles.containerOptionsHeader}>
                        <TextInput placeholder="pesquisar" style={{ width: 90, height: 40}}/>
                        <TouchableOpacity activeOpacity={0.4} style={styles.buttonIcons}>
                            <Ionicons name="filter-outline" size={26} color={theme.colors.primary} />
                        </TouchableOpacity>
                    </View> 
                )}
            </View>
        </SafeAreaView>
    )
}

export { Header };
