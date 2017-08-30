import React, { Component } from 'react'
import {
    View,
    Text

} from 'react-native'
import styles from './styles.js'
import { connect } from 'react-redux'
class TitleCpn extends Component {
    render() {
        return (
            <View style={styles.containerViewOne}>
                <Text style={styles.title}>IN-DE NUMBER</Text>
                <Text style={styles.number}>{this.props.myValue}</Text>
            </View>
        )
    }

}
function mapStateToProps(state)
{
    return{ myValue:state.value}
}
export default connect(mapStateToProps)(TitleCpn)
