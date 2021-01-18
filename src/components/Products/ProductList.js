import React from 'react'
import { Text, View } from 'react-native'
import estilo from '../estilo'
import product from './product'


export default props => {
    return (
        <View>
            <Text style={estilo.fontG} >
                Lista de Produtos:
        </Text>
            <Text style={estilo.fontG} >
                {product.map(p => {
                    return <Text key={p.id} > [{p.id}] {p.name} tem  preço R$ {p.price} </Text>
                })}
            </Text>
        </View>
    )

}