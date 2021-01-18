import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quadrado from './Quadrado'


export default props => {
    return (
        <View style={style.FlexV2} >
            <Quadrado color='#F0F' />
            <Quadrado color='#F00' />
            <Quadrado color='#0F0' />
            <Quadrado color='#00F' />
            <Quadrado color='#FF0' />
        </View>
    )

}


const style = StyleSheet.create({
    FlexV2: {
        width: '100%',
        backgroundColor: '#000',
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center'

    }
})