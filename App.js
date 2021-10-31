import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer } from'@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './Home';
import { Platform } from 'react-native';
import { useFonts } from 'expo-font';
// import {  Inter_900Black } from '@expo-google-fonts/inter';
// import AppLoading from 'expo';
import AppLoading from 'expo-app-loading';
import Header from './Header';
import Footer from './Footer';
import { navigationRef } from './RootNavigation';

//define route
const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    // 'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
  })

  if(!fontsLoaded) {
    return <AppLoading/>;
  }
  else{
    return (
      <NavigationContainer
        style={{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight:0}}
        ref={ navigationRef }
      >
      {/*header is part of the screen*/}
        <Stack.Navigator 
          initialRouteName="Globomantics"
          headerMode="screen" 
        >
        {/*//route*/}
        
          <Stack.Screen  
            name="Globomantics"
            components={Homepage}
            options={{
              header: ()=> <Header headerDisplay="Globomantics" />
            }} 
          />
          
        </Stack.Navigator>
        <Footer/>
      </NavigationContainer>
    );
  }

  
}


// expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
