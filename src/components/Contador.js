import React, { useState } from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import Estilo from './estilo'

export default props => {

    const [numero, setNumero] = useState(props.numeroInicial)
    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)
    let desabilitarButton = false
    if (numero <= 0) {
        console.warn("numero não pode ser me negativo")
        desabilitarButton = true
    }
    return (
        <React.Fragment>
            <Text style={Estilo.fontG} >{numero}</Text>
            <View style={style.Button}>
                <Button title='Incrementar' onPress={inc} color='#219407' />
                <Button title='Decrementar' onPress={dec} color='#94071A' disabled={desabilitarButton} />
            </View>
        </React.Fragment>
    )
}

const style = StyleSheet.create({
    Button: {
        flexDirection: 'row',
    }
})




