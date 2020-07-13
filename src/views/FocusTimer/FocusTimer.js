import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { StatusBar } from 'expo-status-bar'

import palette from '../../theme/palette'

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 20,
        paddingTop: 30,
        backgroundColor: '#10366E'
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    startButtonModifier: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 20,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 1
    },
    startButtonText: {
        ...palette.button,
        fontSize: 15
    }
})

function FocusTimer() {
    const [isFocusing, setFocusing] = useState(false)

    const toggleFocusing = () => setFocusing(!isFocusing)

    const toggleLabel = isFocusing ? 'stop timer' : 'start timer'

    return (
        <View style={styles.root}>
            <StatusBar
                style="light"
                animated
                hideTransitionAnimation="slide"
                hidden={isFocusing}
            />
            <Text>
                hi asjdfasdf
            </Text>
            <View style={styles.bottom}>
                <TouchableOpacity
                    style={styles.startButtonModifier}
                    onPress={toggleFocusing}
                >
                    <Text style={styles.startButtonText}>
                        { toggleLabel }
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FocusTimer
