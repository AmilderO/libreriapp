import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import InicioScreen from "./src/screen/InicioScreen";
import DetalleScreen from "./src/screen/DetalleScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Inicio"
                screenOptions={
                    {
                        headerTintColor: 'white',
                        headerStyle: {backgroundColor: 'green'}
                    }
                }>
                <Stack.Screen
                    name="Inicio"
                    component={ InicioScreen }
                />
                <Stack.Screen
                    name="Detalles"
                    options={ {
                        title: 'Detallito',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 20
                        }
                    } }
                    component={ DetalleScreen }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
