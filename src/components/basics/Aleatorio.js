import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => {
    const { min, max } = props
    const numeroAleatorio = Math.ceil(Math.random() * (max - min) + min)
    return (
        <Text style={Estilo.fontG} >Numero Aleatorios : {numeroAleatorio}</Text>

    )
}