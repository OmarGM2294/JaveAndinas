import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/views/Home';
import ProductsScreen from './src/views/Products';
import ServicesScreen from './src/views/Services';
import AcademicsScreen from './src/views/Academics';
import CorporativesScreen from './src/views/Corporatives';
import HealthScreen from './src/views/Health';
import MedicalDevicesScreen from './src/views/MedicalDevices';
import DetailScreen from './src/views/Detail';
import DiagnosticScreen from './src/views/Diagnostic';
import PlasticsScreen from './src/views/Plastics';
import SmileScreen from './src/views/Smile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Inicio', headerShown: false}}
        />
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{title: 'Productos'}}
        />
        <Stack.Screen
          name="Services"
          component={ServicesScreen}
          options={{title: 'Servicios'}}
        />
        <Stack.Screen
          name="Academics"
          component={AcademicsScreen}
          options={{title: 'Academicos'}}
        />
        <Stack.Screen
          name="Corporatives"
          component={CorporativesScreen}
          options={{title: 'Corporativos'}}
        />
        <Stack.Screen
          name="Health"
          component={HealthScreen}
          options={{title: 'Salud'}}
        />
        <Stack.Screen
          name="MedicalDevices"
          component={MedicalDevicesScreen}
          options={{title: 'Dispositivos Medicos'}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({route}) => ({title: route.params.name})}
        />
        <Stack.Screen
          name="Diagnostic"
          component={DiagnosticScreen}
          options={({route}) => ({title: 'Diagnostico on-line'})}
        />
        <Stack.Screen
          name="Plastics"
          component={PlasticsScreen}
          options={{title: 'Plasticos'}}
        />
        <Stack.Screen
          name="Smile"
          component={SmileScreen}
          options={({route}) => ({title: 'Diagnostico JaveSonrisas'})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
