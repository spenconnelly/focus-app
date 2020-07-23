import React from 'react'
import { registerRootComponent } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ChessClock from '../views/ChessClock'

const { Navigator, Screen } = createStackNavigator()

export function App() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="Timer"
                    component={ChessClock}
                    options={{
                        headerShown: false
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}

export default registerRootComponent(App)
