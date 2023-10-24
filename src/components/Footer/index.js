import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";


export default function Footer(props) {


    const onShare = async () => {
        const result = await Share.share({
            message: "Meu IMC é: " + props.messageImc
        })
    }

    return (
        <View style={styles.box}>

            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.resultImc}>{props.messageImc}</Text>
            <View style={styles.shareBox}>
                        <TouchableOpacity style={styles.share} onPress={() => onShare()}>
                            <Text style={styles.textShare}>Compartilhar</Text>
                        </TouchableOpacity>
            </View>
        </View>
    )
}