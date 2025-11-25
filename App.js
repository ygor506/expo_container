import React from "react";
import { ScrollView } from "react-native";
import Titulo from "./componentes/Titulo";
import Saudacao from "./componentes/Saudacao";
import FotoPerfil from "./componentes/FotoPerfil";
import CartaoUsuario from "./componentes/CartaoUsuario";
//import FotoPerfil from "./componentes/FotoPerfil";
//import CartaoUsuario from "./componentes/CartaoUsuario";

export default function App(){
  return<ScrollView>
      <Titulo />
      <Saudacao nome='Ygor' />
      <FotoPerfil />

      <CartaoUsuario 
      nome='joão  '
      descricao='Programador mobile'
      img='perfil04'
      />

      <CartaoUsuario 
      nome='Maria '
      descricao='Programador mobile'
      img='perfil02'
      />


      <CartaoUsuario 
      nome='pedro'
      descricao='Programador mobile'
      img='perfil03'
      />


            <CartaoUsuario 
      nome='jeovana'
      descricao='Programador mobile'
      img='perfil02'
      />



            <CartaoUsuario 
      nome='gabriela'
      descricao='Programador mobile'
      img='perfil01'
      />

  </ScrollView>
   

  
}