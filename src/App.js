import React from 'react';
import { SafeAreaView, StyleSheet } from "react-native";
import NumeroAleatorio from './components/Aleatorio'
import Frag from './components/Fragment'
import Button from './components/Button'
import Contador from './components/Contador';


export default () => {
    return <SafeAreaView style={style.App}>
        <NumeroAleatorio min={10} max={100} />
        <Frag titulo='Cadastro Produto' subtitulo='Tela Cadastro Produto' />
        <Button />
        <Contador numeroInicial={10} />
    </SafeAreaView>
}


const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        backgroundColor: '#233',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})