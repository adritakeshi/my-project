import React, { useState } from "react";
import { Text, TextInput, View, Button, TouchableOpacity } from "react-native";
import styles from "./style";
import ResultIMC from "./ResultIMC/";


export default function Form(){

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageIMC, setMessageIMC] = useState("Preencha o peso e a altura")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2));
}

function ValidationImc(){
    if (weight != null && height != null){
        imcCalculator();
        setHeight(null);
        setWeight(null);
        setMessageIMC("Seu IMC é igual: ");
        setTextButton("Calcular novamente");
        return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageIMC("Preencha o peso e a altura")
}

    return(
        <View style={styles.formContext}>
            
            <View style={styles.form}>

                <Text>Altura</Text>
                <TextInput
                onChangeText={setHeight}
                value={height}
                style={styles.input}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput              
                onChangeText={setWeight} 
                value={weight}
                style={styles.input}
                placeholder="Ex. 75.365"
                keyboardType="numeric"
                />

                <Button 
                title="Calcular IMC"
                color="#ff0043"
                style={styles.buttonCalculator} 
                onPress={()=> ValidationImc()} />

            </View>

            <ResultIMC messageResultIMC={messageIMC} resultIMC={imc} />

        </View>
    );
}

  
