import React from 'react'
import PropTypes from 'prop-types'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import {
    useFonts,
    Orbitron_500Medium,
} from '@expo-google-fonts/orbitron'

import { formatMilliseconds } from '../../utils'

TimeDisplay.propTypes = {
    style: PropTypes.object,
    time: PropTypes.number // in milliseconds
}

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'row'
    },
    primaryTextModifier: {
        fontFamily: 'Orbitron_500Medium',
        fontSize: 80
    },
    milliTextModifier: {
        fontFamily: 'Orbitron_500Medium',
        fontSize: 20
    },
})

function TimeDisplay({ style, time }) {
    const [fontsLoaded] = useFonts({ Orbitron_500Medium })

    const [minutes, seconds, milliseconds] = formatMilliseconds(time)
    const formattedTime = `${minutes}:${seconds}`

    return (
        <View style={styles.root}>
            { fontsLoaded && (
                <>
                    <Text style={{...style, ...styles.primaryTextModifier}}>
                        { formattedTime }
                    </Text>
                    <Text style={{...style, ...styles.milliTextModifier}}>
                        { milliseconds }
                    </Text>
                </>
            )}
        </View>
    )
}

export default TimeDisplay
