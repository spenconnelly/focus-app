import React from 'react'
import { registerRootComponent } from 'expo'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import FocusTimer from '../views/FocusTimer'

const { Navigator, Screen } = createStackNavigator()

export function App() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="Timer"
                    component={FocusTimer}
                    options={{
                        headerShown: false
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}

export default registerRootComponent(App)
