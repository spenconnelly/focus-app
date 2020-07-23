import React from 'react'
import PropTypes from 'prop-types'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

PlayerSetup.propTypes = {
    color: PropTypes.oneOf(['black', 'white']),
    time: PropTypes.number,
    onChange: PropTypes.func
}

const styles = StyleSheet.create({
    blackPlayerTextModifier: {
        color: 'white'
    },
    whitePlayerTextModifier: {

    }
})

function PlayerSetup(props) {
    const {
        color = 'white',
        time // in ms
    } = props

    const colorStyle = color === 'black' ? styles.blackPlayerTextModifier : styles.whitePlayerTextModifier

    return (
        <View>
            <Text style={colorStyle}>{ time }</Text>
        </View>
    )
}

export default PlayerSetup
