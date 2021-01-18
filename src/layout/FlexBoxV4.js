import React from 'react'
import { StyleSheet, View } from 'react-native'



export default props => {
    return (
        <View style={style.FlexV4} >
            <View style={style.v0}></View>
            <View style={style.v1}></View>
            <View style={style.v2}></View>
        </View>
    )

}


const style = StyleSheet.create({
    FlexV4: {
        height: 350,
        width: 100,
        backgroundColor: '#000',
        flexGrow: 1
    },
    v0: {
        backgroundColor: '#36c9a7',
        height: 0

    },
    v1: {
        backgroundColor: '#ff801a',
        flex: 9
    },
    v2: {
        backgroundColor: '#dd22c1',
        flex: 1
    }
})