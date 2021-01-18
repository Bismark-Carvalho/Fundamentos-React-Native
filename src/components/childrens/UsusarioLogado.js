import React from 'react'
import { Text, View } from 'react-native'
import estilo from '../estilo'
import If from './If'


export default props => {
    const usuario = props.usuario || {}
    return <View>

        <If test={usuario && usuario.nome && usuario.email}>
            <Text style={estilo.fontG} >
                Usuario Logado:
                        </Text>
            <Text style={estilo.fontG}>
                {usuario.nome} - {usuario.email}
            </Text>
        </If>

    </View>

}