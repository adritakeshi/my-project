import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ResultIMC(props){
    return(
        <View style={styles.resultContext}>
            <Text style={styles.textResult}>{props.messageResultIMC}</Text>
            <Text style={styles.textResult}>{props.resultIMC}</Text>
        </View>
    );
}