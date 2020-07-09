import React from 'react'
import { registerRootComponent } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

function App() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Text>Time to focus taylor</Text>
            </View>
        </NavigationContainer>
    )
}

export default registerRootComponent(App)
