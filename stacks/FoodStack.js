import React, { useState, useEffect, useRef } from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from "react-navigation";

import FoodLanding from "../screens/foodLanding"
import SearchRecipes from "../screens/searchRecipes"

const Stack = createStackNavigator();
const AppContainer = createAppContainer(Stack);

export default function FoodStack(){
	

	return(
			<Stack.Navigator>
				<Stack.Screen name="Food Landing" options={{headerShown: false}} component={FoodLanding} />
				<Stack.Screen name="Search Recipes" options={{headerShown: false}} component={SearchRecipes} />
			</Stack.Navigator>
	)
}