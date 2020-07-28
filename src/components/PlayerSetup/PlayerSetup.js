import React from 'react'
import PropTypes from 'prop-types'
import {
    View,
    StyleSheet
} from 'react-native'

import TimeDisplay from '../TimeDisplay'

PlayerSetup.propTypes = {
    color: PropTypes.oneOf(['black', 'white']),
    time: PropTypes.number,
    onChange: PropTypes.func
}

const styles = StyleSheet.create({
    blackPlayerTextModifier: {
        color: 'white'
    },
    whitePlayerTextModifier: {}
})

function PlayerSetup(props) {
    const {
        color = 'white',
        time // in milliseconds
    } = props

    const colorStyle = color === 'black' ? styles.blackPlayerTextModifier : styles.whitePlayerTextModifier

    return (
        <View>
            <TimeDisplay
                style={colorStyle}
                time={time}
            />
        </View>
    )
}

export default PlayerSetup
