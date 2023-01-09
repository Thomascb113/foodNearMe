import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Icon from 'react-native-vector-icons/FontAwesome';

import FoodStack from "../stacks/FoodStack"
import AboutStack from "../stacks/AboutStack"

export default function FoodTabs() {

    const AppTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'transparent'
        },
    };
    return (
        <Tab.Navigator
            theme={AppTheme}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                    ? 'user-cirlce'
                    : 'user-circle-o';
                } else if (route.name === 'Chat') {
                    iconName = focused ? 'comment' : 'comment-o';
                } else if (route.name === 'Food') {
                    iconName = focused ? 'lemon' : 'lemon-o';
                } else if (route.name === 'Settings') {
                    iconName = focused ? 'gear' : 'gear-o';
                }

                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#8C04DB',
                tabBarInactiveTintColor: '#2EAAFA',
                tabBarStyle: {
                    borderRadius: 50,
                    width: "95%",
                    alignSelf: "center"
                },
            })}
            >
            <Tab.Screen 
                name="Home" 
                component={AboutStack}
                options={{
                    headerShown: false, 
                    headerStyle: {
                        backgroundColor: "tranparent"
                    } 
                }}  
            />
            <Tab.Screen 
                name="Chat" 
                component={AboutStack}
                options={{
                    headerShown: false, 
                    headerStyle: {
                        backgroundColor: "tranparent"
                    } 
                }} 
            />
            <Tab.Screen 
                name="Food" 
                component={FoodStack} 
                options={{
                    headerShown: false, 
                    headerStyle: {
                        backgroundColor: "tranparent"
                    } 
                }} 
            />
            <Tab.Screen 
                name="Settings" 
                component={AboutStack}
                options={{
                    headerShown: false, 
                    headerStyle: {
                        backgroundColor: "tranparent"
                    } 
                }} 
            />
        </Tab.Navigator>
    );
}