import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerRoutes} from './drawer.routes';

export function Routes() {
    return (
        // Esse é o certo
        <NavigationContainer>
                <DrawerRoutes />
        </NavigationContainer>
    )
}