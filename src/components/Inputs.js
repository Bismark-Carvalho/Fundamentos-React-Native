import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import estilo from './estilo'


export default props => {
    const [teste, setTeste] = useState("teste")
    return <View>
        <Text style={estilo.fontG}>Componente Controlado</Text>
        <TextInput
            placeholder='Digite algo'
            placeholderTextColor="#FFF"
            onChangeText={(nome => setTeste(nome))} style={estilo.fontG} />
        <Text style={estilo.fontG}>#############</Text>
        <Text style={estilo.fontG}>Componente Não Controlado</Text>
        <TextInput
            placeholder='Digite Algo'
            placeholderTextColor="#FFF"
            style={estilo.fontG}
        />
    </View>

}