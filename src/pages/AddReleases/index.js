import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../../style/styles';

export default function AddReleases() {
    return (
        <View style={styles.container}>
        <Text>Adicionar Lançamento</Text>
        <StatusBar style="auto" />
        </View>
    )
}