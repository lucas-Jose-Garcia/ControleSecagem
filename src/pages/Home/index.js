import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../../style/styles';

export default function Home() { 
    return (
        <View style={styles.container}>
        <Text>Home Controle de Secagem</Text>
        <StatusBar style="auto" />
        </View>
    )
}