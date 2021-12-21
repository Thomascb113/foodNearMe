import React, { useState, useEffect, useRef } from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AboutLanding from "../screens/aboutLanding"

export default function AboutStack(){
	
	const Stack = createStackNavigator();

	return(
		<Stack.Navigator>
			<Stack.Screen name="Food Landing" options={{headerShown: false}} component={AboutLanding} />
		</Stack.Navigator>
	)
}