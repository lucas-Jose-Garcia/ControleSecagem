import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import AddReleases from '../pages/AddReleases';
import AddCollaborator from '../pages/AddCollaborator';
import Finalization from '../pages/Finalization';



const { Screen, Navigator} = createDrawerNavigator();

export function DrawerRoutes(){
    return (
        <Navigator>
            <Screen 
                name='Home'
                options={{
                    title: 'Controle Secagem',
                    headerStyle: {
                        backgroundColor: '#04976a',
                      },
                    headerTintColor: '#FFF',
                }}
                
                component={Home}
            />
            <Screen 
                name='AddReleases'
                options={{
                    title: 'Efetuar Lançamento'
                }}
                component={AddReleases}
            />
            <Screen 
                name='AddCollaborator'
                options={{
                    title: 'Cadastrar Funcionário'
                }}
                component={AddCollaborator}
            />
            <Screen 
                name='Finalization'
                options={{
                    title: 'Finalizar Semana'
                }}
                component={Finalization}
            />
        </Navigator>
    )
}