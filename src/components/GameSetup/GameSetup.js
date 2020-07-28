import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    Button,
    StyleSheet,
    View
} from 'react-native'

import { CHESS_TIMES } from '../../constants'

import PlayerSetup from '../PlayerSetup'

GameSetup.propTypes = {
    blackTime: PropTypes.number,
    whiteTime: PropTypes.number,
    setBlackTime: PropTypes.func,
    setWhiteTime: PropTypes.func,
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    blackContainer: {
        backgroundColor: 'black',
        minHeight: '45%',
        maxHeight: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    controlsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    whiteContainer: {
        backgroundColor: 'white',
        minHeight: '45%',
        maxHeight: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

function GameSetup(props) {
    const {
        blackTime,
        whiteTime,
        setBlackTime,
        setWhiteTime
    } = props

    const [blackChangeLast, setBlackChangeLast] = useState(true)

    const handleBlackTimeChange = time => {
        setBlackTime(time)
        setBlackChangeLast(true)
    }

    const handleWhiteTimeChange = time => {
        setWhiteTime(time)
        setBlackChangeLast(false)
    }

    const setBothTimes = time => {
        setBlackTime(time)
        setWhiteTime(time)
    }

    const syncHandler = () => blackChangeLast ? setWhiteTime(blackTime) : setBlackTime(whiteTime)

    return (
        <View style={styles.root}>
            <View style={styles.blackContainer}>
                <PlayerSetup
                    color="black"
                    time={blackTime}
                    onChange={handleBlackTimeChange}
                />
            </View>
            <View style={styles.controlsContainer}>
                <Button
                    onPress={() => setBothTimes(CHESS_TIMES.bullet)}
                    title="Bullet"
                />
                <Button
                    onPress={() => setBothTimes(CHESS_TIMES.blitz)}
                    title="Blitz"
                />
                <Button
                    onPress={() => setBothTimes(CHESS_TIMES.rapid)}
                    title="Rapid"
                />
                <Button
                    onPress={() => setBothTimes(CHESS_TIMES.classical)}
                    title="Classical"
                />
                <Button
                    onPress={syncHandler}
                    title="Sync"
                />
            </View>
            <View style={styles.whiteContainer}>
                <PlayerSetup
                    time={whiteTime}
                    onChange={handleWhiteTimeChange}
                />
            </View>
        </View>
    )
}

export default GameSetup
