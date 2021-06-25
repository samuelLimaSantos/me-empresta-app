import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles';

/* Bibliotecas de icones */
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native";

const MenuSideBar = () => {

    const navigation = useNavigation();

    const [home, setHome] = useState('#fff')
    const [search, setSearch] = useState('#fff')
    const [add, setAdd] = useState('#FDE46E')
    const [category, setCategory] = useState('#fff')
    const [profile, setProfile] = useState('#fff')
    const [activeTextHome, setActiveTextHome] = useState(false);
    const [activeTextSearch, setActiveTextSearch] = useState(false);
    const [activeTextCategory, setActiveTextCategory] = useState(false);
    const [activeTextProfile, setActiveTextProfile] = useState(false);

    return (
        <View style={styles.container}>

            <View style={styles.containerOptions}>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Home"),
                                setHome('#FDE46E'),
                                setSearch('#fff'),
                                setAdd('#fff'),
                                setCategory('#fff'),
                                setProfile('#fff'),
                                setActiveTextHome(true),
                                setActiveTextSearch(false),
                                setActiveTextCategory(false),
                                setActiveTextProfile(false)
                        }}
                        style={styles.boxOptions}>
                        <Entypo name="home" size={24} color={home} />
                        {activeTextHome != true &&
                            <Text style={styles.optionsDeactive}>
                                Início
                            </Text>
                        }

                        {activeTextHome != false &&
                            <Text style={styles.optionsActive}>
                                Início
                            </Text>
                        }

                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.boxOptions}
                        onPress={() => {
                            setHome('#fff'),
                                setSearch('#FDE46E'),
                                setAdd('#fff'),
                                setCategory('#fff'),
                                setProfile('#fff'),
                                setActiveTextHome(false),
                                setActiveTextSearch(true),
                                setActiveTextCategory(false),
                                setActiveTextProfile(false)
                        }}>
                        <FontAwesome name="search" size={24} color={search} />
                        {activeTextSearch != true &&
                            <Text style={styles.optionsDeactive}>
                                Buscar
                            </Text>
                        }
                        {activeTextSearch != false &&
                            <Text style={styles.optionsActive}>
                                Buscar
                            </Text>
                        }
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={() => { navigation.navigate("CreateOffer") }} style={styles.boxOptionsAdd}>
                        <Ionicons name="add-circle" size={72} color={add} />
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Category"),
                                setHome('#fff'),
                                setSearch('#fff'),
                                setAdd('#fff'),
                                setCategory('#FDE46E'),
                                setProfile('#fff'),
                                setActiveTextHome(false),
                                setActiveTextSearch(false),
                                setActiveTextCategory(true),
                                setActiveTextProfile(false)
                        }}
                        style={styles.boxOptions}>
                        <AntDesign name="appstore1" size={24} color={category} />
                        {activeTextCategory != true &&
                            <Text style={styles.optionsDeactive}>
                                Categorias
                            </Text>
                        }

                        {activeTextCategory != false &&
                            <Text style={styles.optionsActive}>
                                Categorias
                            </Text>
                        }
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Profile"),
                                setHome('#fff'),
                                setSearch('#fff'),
                                setAdd('#fff'),
                                setCategory('#fff'),
                                setProfile('#FDE46E'),
                                setActiveTextHome(false),
                                setActiveTextSearch(false),
                                setActiveTextCategory(false),
                                setActiveTextProfile(true)
                        }}
                        style={styles.boxOptions}>
                        <FontAwesome name="user" size={24} color={profile} />
                        {activeTextProfile != true &&
                            <Text style={styles.optionsDeactive}>
                                Perfil
                            </Text>
                        }
                        {activeTextProfile != false &&
                            <Text style={styles.optionsActive}>
                                Perfil
                            </Text>
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export { MenuSideBar };
