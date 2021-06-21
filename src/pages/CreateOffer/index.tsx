import React, { useState } from "react";
import { Text, Image, TouchableOpacity, SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { MenuSideBar } from "../../components/MenuSideBar";
import { SimpleButton } from "../../components/SimpleButton";
import { SimpleInput } from "../../components/SimpleInput";
import offerImage from "../../../assets/store-message.png";
import stepImage from "../../../assets/create-image.png";
import iconCamera from "../../../assets/icons/camera-icon.png";
import iconArrowDown from "../../../assets/icons/arrow-down-icon.png";
import iconArrowUp from "../../../assets/icons/arrow-up-icon.png";





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
                            <Image source={iconCamera} />
                        </TouchableOpacity>

                        <SafeAreaView style={styles.containerInput}>
                            <SimpleInput placeholder="Nome do item" />

                            {showCategory === false &&
                                <TouchableOpacity activeOpacity={0.7} style={styles.selectButton} onPress={() => { setShowCategory(true) }}>
                                    <Text style={styles.textSelectButton}> Selecione uma categoria</Text>
                                    <Image source={iconArrowDown} />
                                </TouchableOpacity>
                            }

                            {showCategory === true &&

                                <TouchableOpacity activeOpacity={0.7} style={styles.selectButton} onPress={() => { setShowCategory(false) }}>
                                    <Text style={styles.textSelectButton}> Selecione uma categoria</Text>
                                    <Image source={iconArrowUp} />
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
                                <SafeAreaView>
                                    <SimpleInput placeholder="R$ 20,00" />
                                </SafeAreaView>

                                <View>
                                    <SimpleInput placeholder="Tempo de aluguel" />
                                </View>

                            </SafeAreaView>

                            <SafeAreaView style={styles.containerEntrega}>
                                <SimpleButton title="Domiciliar" click={() => { setCreatOffer(true) }} />

                                <SimpleButton title="Presencial" click={() => { setCreatOffer(true) }} />

                            </SafeAreaView>


                            <SimpleButton title="Concluir" click={() => { setNextStep(true) }} />

                            <SimpleButton title="Voltar" click={() => { setNextStep(false) }} />


                        </SafeAreaView>




                    </>
                }
            </ScrollView>

            <MenuSideBar />
        </SafeAreaView>
    )
}
export { CreateOffer };