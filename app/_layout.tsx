import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import DescriptionPage from './taxon-description';
import KeysPage from './generate-key';
import IndexPage from './index';
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { Text } from 'react-native';

// Initialize drawer and stack
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Main layout with drawer
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Montserrat': require('@/assets/fonts/Montserrat.ttf'),
    'Montserrat-Italic': require('@/assets/fonts/Montserrat Italic.ttf'),
  });

  const router = useRouter();

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // Return a loading state while the font is loading
  }

  return (
    <Drawer.Navigator
      initialRouteName="index"
      screenOptions={{
        drawerLabelStyle: {
          fontFamily: 'Montserrat',
          fontWeight: '600'
        },
        headerTitleStyle: {
          fontFamily: 'Montserrat', 
          fontWeight: '600'
        }
      }}
      
    >
      <Drawer.Screen name="index" component={SearchStack} options={{ title: "Search", }} />
      <Drawer.Screen name="taxon-description" component={TaxonDescriptionStack} options={{ title: "Taxon Description" }} />
      <Drawer.Screen name="generate-key" component={GenerateKeyStack} options={{ title: "Generate Key" }} />
    </Drawer.Navigator>
  );
}

// Stack for Search screen (index)
function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" component={IndexPage} />
    </Stack.Navigator>
  );
}

// Stack for Taxon Description screen
function TaxonDescriptionStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="taxon-description" component={DescriptionPage} />
    </Stack.Navigator>
  );
}

// Stack for Generate Key screen
function GenerateKeyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="generate-key" component={KeysPage} />
    </Stack.Navigator>
  );
}
