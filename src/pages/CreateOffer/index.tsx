import React, { useState } from "react";
import { Text, Image, TouchableOpacity, SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { MenuSideBar } from "../../components/MenuSideBar";
import { SimpleButton } from "../../components/SimpleButton";
import { SimpleInput } from "../../components/SimpleInput";
import { AlternativeButton } from "../../components/AlternativeButton";

import offerImage from "../../../assets/store-message.png";
import stepImage from "../../../assets/create-image.png";

import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const CreateOffer = () => {

    const [createOffer, setCreatOffer] = useState(false);
    const [nextStep, setNextStep] = useState(false);
    const [showCategory, setShowCategory] = useState(false);


    return (
        <SafeAreaView style={styles.container}>
            {createOffer === false &&
                <Header title1="Adicinar" title2="Item" />
            }

            {createOffer === false &&
                <SafeAreaView style={styles.containerMessage}>
                    <Image source={offerImage} />
                    <Text style={styles.title}>Você está a poucos passos de começar a ganhar sua renda extra.</Text>
                    <Text style={styles.subtitle}>Comece anuciando itens, aguarde alguém se interessar e receba o cash em sua conta.</Text>

                    <SimpleButton title="Criar oferta" click={() => { setCreatOffer(true) }} />
                </SafeAreaView>
            }

            {createOffer === true &&
                <Header title1="Criar" title2="Oferta" />
            }

            <ScrollView style={styles.containerForm}>
                {/* Step #1 */}

                {createOffer === true && nextStep === false &&
                    <>
                        <Image source={stepImage} style={styles.stepImage} />
                        <Text style={styles.descriptionStep}>Preencha os dados sobre seu produto</Text>

                        <TouchableOpacity activeOpacity={0.7} style={styles.buttonCam}>
                            <FontAwesome name="camera" size={16} color="#5C2A9D" />
                        </TouchableOpacity>

                        <SafeAreaView style={styles.containerInput}>
                            <SimpleInput placeholder="Nome do item" />

                            {showCategory === false &&
                                <TouchableOpacity activeOpacity={0.7} style={styles.selectButton} onPress={() => { setShowCategory(true) }}>
                                    <Text style={styles.textSelectButton}> Selecione uma categoria</Text>
                                    <MaterialIcons name="arrow-drop-down" size={24} color="#5C2A9D" />
                                </TouchableOpacity>
                            }

                            {showCategory === true &&

                                <TouchableOpacity activeOpacity={0.7} style={styles.selectButton} onPress={() => { setShowCategory(false) }}>
                                    <Text style={styles.textSelectButton}> Selecione uma categoria</Text>
                                    <MaterialIcons name="arrow-drop-up" size={24} color="#5C2A9D" />
                                </TouchableOpacity>
                            }
                        </SafeAreaView>


                        {showCategory === true &&
                            <>
                                <SafeAreaView style={styles.containerOptions}>
                                    <TouchableOpacity style={styles.category}>
                                        <Text style={styles.textCategory}>Brinquedos</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.category}>
                                        <Text style={styles.textCategory}>Eletrônicos</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.category}>
                                        <Text style={styles.textCategory}>Eletro Eletrônico</Text>
                                    </TouchableOpacity>
                                </SafeAreaView>

                                <SafeAreaView style={styles.containerOptions}>
                                    <TouchableOpacity style={styles.category}>
                                        <Text style={styles.textCategory}>Esportes</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.category}>
                                        <Text style={styles.textCategory}>Iluminação</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.category}>
                                        <Text style={styles.textCategory}>Ferramentas</Text>
                                    </TouchableOpacity>
                                </SafeAreaView>

                                <SafeAreaView style={styles.containerOptions}>
                                    <TouchableOpacity style={styles.category}>
                                        <Text style={styles.textCategory}>Móvel</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.category}>
                                        <Text style={styles.textCategory}>Áudio {"&"} som</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.category}>
                                        <Text style={styles.textCategory}>Filmagem</Text>
                                    </TouchableOpacity>
                                </SafeAreaView>
                            </>
                        }

                        <SafeAreaView style={styles.containerInput}>

                            <SimpleInput placeholder="Descrição" />

                            <SimpleButton title="Avançar" click={() => { setNextStep(true) }} />

                        </SafeAreaView>
                    </>
                }

                {/* Step #2 */}

                {createOffer === true && nextStep === true &&
                    <>
                        <Image source={stepImage} style={styles.stepImage} />
                        <Text style={styles.descriptionStep}>Esta é a última etapa e a mais importante</Text>

                        <SafeAreaView style={styles.containerInput}>
                            <SimpleInput placeholder="Telefone para contato" />

                            <SafeAreaView style={styles.containerDuo}>
                                <View style={{ width: 144 }}>
                                    <SimpleInput placeholder="Tempo de aluguel" />
                                </View>

                                <View style={{ width: 144 }}>
                                    <SimpleInput placeholder="R$ 20,00" />
                                </View>


                            </SafeAreaView>

                            <SafeAreaView style={styles.containerEntrega}>
                                <SimpleButton title="Domiciliar" click={() => { setCreatOffer(true) }} />

                                <SimpleButton title="Presencial" click={() => { setCreatOffer(true) }} />

                            </SafeAreaView>


                            <SimpleButton title="Concluir" click={() => { setNextStep(true) }} />

                            <AlternativeButton title="Voltar" click={() => { setNextStep(false) }} />


                        </SafeAreaView>




                    </>
                }
            </ScrollView>

            {/* <MenuSideBar /> */}
        </SafeAreaView>
    )
}
export { CreateOffer };