import React from 'react' 
import {Text, StyleSheet} from 'react-native'

export const AppBold = props => (
    <Text style={{...styles.default, ...props.style}} >{props.children}</Text>
)

const styles = StyleSheet.create({
    default: {
        fontFamily: 'ssp-bold'
    }
})