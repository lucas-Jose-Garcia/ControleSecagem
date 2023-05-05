import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../../style/styles';

export default function Finalization() {
    return (
        <View style={styles.container}>
        <Text>Finalizar Semana</Text>
        <StatusBar style="auto" />
        </View>
    )
}