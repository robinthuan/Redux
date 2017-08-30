import React, { Component } from 'react'
import {
    View,
} from 'react-native'
import ButtonCpn from '../component/buttonCpn.js'
import TitleCpn from '../component/titleCpn.js'
export default class App extends Component {
    render() {
        return (
            <View>
                <TitleCpn />
                <ButtonCpn />
            </View>


        );}



}
