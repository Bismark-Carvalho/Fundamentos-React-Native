import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'


export default props => {
    return (
        <View>
            <Text style={Estilo.fontG}>{props.titulo}</Text>
            <Text style={Estilo.fontM} >{props.subtitulo}</Text>
        </View>
    )
}





