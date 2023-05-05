import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pages/Home';
import AddReleases from '../pages/AddReleases';



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
                name='AddReleses'
                options={{
                    title: 'Efetuar Lançamento'
                }}
                component={AddReleases}
            />
        </Navigator>
    )
}