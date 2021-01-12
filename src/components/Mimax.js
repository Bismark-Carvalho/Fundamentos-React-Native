import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default (props) => {
    return (
        <Text style={Estilo.fontG}>O valor {props.max} é maior que o valor {props.min} e a soma dos dois é {props.min + props.max}</Text>
    )
}