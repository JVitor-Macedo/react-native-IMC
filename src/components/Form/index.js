import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList } from "react-native";
import Footer from "../Footer";
import styles from "./style";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Prencha os campos corretamente")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)
    const [imcList, setimcList] = useState([])

    const verificationImc = () => {
        if (imc == null) {
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório!!!")
        }
    }

    const imcCalculator = () => {
        let heightFormat = height.replace(",", ".")
        let totalImc = ((weight / (heightFormat * heightFormat)).toFixed(2))
        setimcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }])
        setImc(totalImc)
    }

    const validationImc = () => {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual:")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
        }
        else {
            verificationImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("preencha o peso e altura")
        }

    }

    return (

        <View style={styles.formContext}>
            {imc == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.erroMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder="Ex. 1.75"
                        keyboardType="numeric"
                        onChangeText={setHeight}
                        value={height}>
                    </TextInput>
                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.erroMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.formInput}
                        placeholder="Ex. 70"
                        keyboardType="numeric"
                        onChangeText={setWeight}
                        value={weight}
                    ></TextInput>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => validationImc()
                        }>
                        <Text>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
                : <View style={styles.boxResultImc}>
                    <Footer messageResultImc={messageImc} messageImc={imc} />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => validationImc()
                        }>
                        <Text>{textButton}</Text>
                    </TouchableOpacity>
                </View>

            }
            <FlatList style={styles.listImc}
                data={imcList.reverse()}
                renderItem={({ item }) => {
                    return (
                        <Text>Resultado IMC = {item.imc}</Text>
                    )
                }}
                keyExtractor={(item) => {item.id}}>

            </FlatList>
        </View>
    )
}