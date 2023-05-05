import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../../style/styles';

export default function AddCollaborator() {
    return (
        <View style={styles.container}>
        <Text>Adicionar Funcionário</Text>
        <StatusBar style="auto" />
        </View>
    )
}