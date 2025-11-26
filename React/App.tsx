import React from 'react';
import { StatusBar } from 'react-native';
import AppNavigator from "./src/navigation/Navigation";
import { Home } from "./src/screens/Home";
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
    // return <Home />;
    return <AppNavigator />;
}