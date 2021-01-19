import React from 'react';
import { Text } from 'react-native';
import Estilo from './estilo'


export default function Comp0() {
    return <Text style={Estilo.fontM}>Comp #0</Text>
}

function Comp1() {
    return <Text style={Estilo.fontM}>Comp #1</Text>
}
function Comp2() {
    return <Text style={Estilo.fontM}>Comp #2</Text>
}
function Comp3() {
    return <Text style={Estilo.fontM}>Comp #3</Text>
}

export { Comp1, Comp2 };