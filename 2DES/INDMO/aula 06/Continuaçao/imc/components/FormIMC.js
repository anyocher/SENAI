import {View,StyleSheet,Text,TextInput,TouchableOpacity} from 'react-native';
import React from 'react';
import MaskInput from 'react-native-mask-input';
 
export default function FormIMC() {
    const [peso,setPeso] = React.userState('');
    const [altura,setAltura] = React.userState('');
    const [imc,setImc] = React.userState('');

    const CalImc = () => {
        const numberPeso = Number(peso);
        const numberAltura = Number(altura);
        setImc((numberPeso / (numberAltura ** 2)).toFixed(2));
    }
    return (
    <>
        <View style={StyleSheet.container}> 
        <View.style={styles.container}>
        <Text> Calculadora de IMC </Text>

        <MaskInput
            mask={[/\d/, /\d/, /\d/, '-', /\d/]}
        style={styles.textInput}
        onChageText={(masked, unmasked) =>  setPeso(masked)}
        valuer={peso}
        placeholder="Digite sua altura
        "
        keyboardType="numeric"
        </>
            

}

