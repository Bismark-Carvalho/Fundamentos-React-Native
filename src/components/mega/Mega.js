import React, { Component } from 'react'
import { Text, TextInput } from 'react-native'
import Estilo from '../basics/estilo'



export default class Mega extends Component {

    state = {
        qntNumero: this.props.qntNumero,
        numeros: []
    }

    alteraQntNumero(qnt) {
        this.setState({ qntNumero: +qnt })
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <Text style={Estilo.fontG} >
                    Gerador Mega-Sena
                {this.state.qntNumero}
                </Text>
                <TextInput
                    style={{ borderBottomWidth: 1 }}
                    keyboardType={'numeric'}
                    focusable={true}
                    placeholder="Quantidade de Numero"
                    value={this.state.qntNumero}
                    onChangeText={text => this.alteraQntNumero(text)}
                />
            </>
        )
    }
}