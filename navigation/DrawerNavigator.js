import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";;
import BottomTabNavigator from "./BottomTabNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component ={BottomTabNavigator} options={{ headerShown : false}}/>
            <Drawer.Screen name = "Profile" component = {Profile}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;