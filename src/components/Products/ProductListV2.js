import React from 'react'
import { FlatList, Text, View } from 'react-native'
import estilo from '../estilo'
import product from './product'


export default props => {
    return (
        <View>
            <Text style={estilo.fontG} >
                Lista de Produtos v2:
        </Text>
            <FlatList
                data={product}
                keyExtractor={i => `${i.id}`}
                renderItem={({ item: p }) => {
                    return <Text style={estilo.fontM}>
                        {p.id}) {p.name}
                    </Text>
                }}

            />

        </View>
    )

}