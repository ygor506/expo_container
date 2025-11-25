import react from "react";
import { Image } from "react-native";

export default function FotoPerfil(){
    return(
        <Image
        source={require('../img/ygor.jpg')}
                style={{widt:100,height:100, borderRadius:50, marginBottom:10}}
        />
    )
}
