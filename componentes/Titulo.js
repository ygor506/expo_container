import react from "react";
import { Text } from "react-native";


export default function Titulo(){
    return(
        <Text style={{fontSize:24, fontWeight:'bold', marginBottom:10}}>
            Bem-Vindo ao React Native!
        </Text>
    );
}