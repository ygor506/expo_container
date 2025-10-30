import react from "react";
import { image, useWindowDimensions } from "react-native";

export default function fotoPerfil(){
    return(
        <image
        source={require('../img/base.png')}
        style={useWindowDimensions}
    )
}