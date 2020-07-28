import React, { useState } from 'react'
import {
    StyleSheet,
    View
} from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { CHESS_TIMES } from '../../constants'
import GameSetup from '../../components/GameSetup/GameSetup'

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})

function ChessClock() {
    const [isPlaying] = useState(false)
    const [blackTime, setBlackTime] = useState(CHESS_TIMES.classical)
    const [whiteTime, setWhiteTime] = useState(CHESS_TIMES.classical)

    return (
        <View style={styles.root}>
            <StatusBar
                style="light"
                animated
                hideTransitionAnimation="slide"
                hidden={isPlaying}
            />
            { !isPlaying && (
                <GameSetup
                    blackTime={blackTime}
                    whiteTime={whiteTime}
                    setBlackTime={setBlackTime}
                    setWhiteTime={setWhiteTime}
                />
            )}
            {}
        </View>
    )
}

export default ChessClock
