import React, { Component } from 'react'
import {
    INCREASE_NUMBER,
    DECREASE_NUMBER,
} from '../action/actions.js'
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native'
import styles from './styles.js'
import { connect } from 'react-redux'
class ButtonCpn extends Component {
    onIncrease()
    {
        this.props.dispatch({type:INCREASE_NUMBER})
    }
    onDecrease()
    {
        this.props.dispatch({type:DECREASE_NUMBER})
    }
    render() {
        return (
            <View style={styles.containerViewTwo}>
                <TouchableOpacity style={styles.button} onPress={this.onIncrease.bind(this)}>
                    <Text style={styles.textButton}>+</Text>


                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.onDecrease.bind(this)}>
                    <Text style={styles.textButton}>-</Text>

                </TouchableOpacity>
            </View>


        );

    }
}
export default connect()(ButtonCpn);