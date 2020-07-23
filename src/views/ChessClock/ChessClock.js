import React, { useState } from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import { StatusBar } from 'expo-status-bar'

import PlayerSetup from '../../components/PlayerSetup'

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    blackContainer: {
        backgroundColor: 'black',
        minHeight: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteContainer: {
        backgroundColor: 'white',
        minHeight: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

function ChessClock() {
    const [isPlaying] = useState(false)
    const [blackTime, setBlackTime] = useState(0)
    const [whiteTime, setWhiteTime] = useState(0)

    const handleBlackTimeChange = time => setBlackTime(time)
    const handleWhiteTimeChange = time => setWhiteTime(time)

    return (
        <View style={styles.root}>
            <StatusBar
                style="light"
                animated
                hideTransitionAnimation="slide"
                hidden={isPlaying}
            />
            <View style={styles.blackContainer}>
                { !isPlaying ? (
                    <PlayerSetup
                        color="black"
                        time={blackTime}
                        onChange={handleBlackTimeChange}
                    />
                ) : (
                    <View />
                )}
            </View>
            <View style={styles.whiteContainer}>
                { !isPlaying ? (
                    <PlayerSetup
                        time={whiteTime}
                        onChange={handleWhiteTimeChange}
                    />
                ) : (
                    <View />
                )}
            </View>
        </View>
    )
}

export default ChessClock
