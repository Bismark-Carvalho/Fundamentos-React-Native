import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import estilo from './estilo'



export default ({ num = 0 }) => {

    return (
        <SafeAreaView>
            <Text style={estilo.fontM} >O resultado é:</Text>
            <Text style={estilo.fontG}>{num % 2 === 0 ? "Par" : "Impar"}</Text>
        </SafeAreaView>
    )



}