import React from 'react'
import { Button } from 'react-native'


export default props => {
    return (
        <Button title='Excecutar' onPress={() => { console.warn("Apertou o botao") }} />
    )

}