import React from 'react';
import { SafeAreaView, StyleSheet } from "react-native";
// import ProductListV2 from './components/Products/ProductListV2';
// import NumeroAleatorio from './components/Aleatorio'
// import UsusarioLogado from './components/childrens/UsusarioLogado';
// import Frag from './components/Fragment'
// import Button from './components/Button'
// import Contador from './components/Contador';
// import Pai from './components/direta/Pai'
// import ParImpar from './components/ParImpar'
// import Inputs from './components/Inputs'
import FlexBoxV4 from './layout/FlexBoxV4'

export default () => {
    return <SafeAreaView style={style.App}>
        {/* <NumeroAleatorio min={10} max={100} />
        <Frag titulo='Cadastro Produto' subtitulo='Tela Cadastro Produto' />
        <Button />
        <Contador numeroInicial={10} />
        <ParImpar num={3} />
        <UsusarioLogado usuario={{ nome: "Gui", email: "gui@gmail.com" }} />
        <UsusarioLogado usuario={{ nome: "Ana", email: "ana@gmail.com" }} />
        <ProductList />
        <ProductListV2 />
        <Inputs />
        <Pai /> */}
        <FlexBoxV4 />
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