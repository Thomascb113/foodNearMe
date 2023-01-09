import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from "react-navigation";

import FoodLanding from "../screens/foodLanding"
import SearchRecipes from "../screens/searchRecipes"
import ViewRecipe from "../screens/viewRecipe"

const Stack = createStackNavigator();
const AppContainer = createAppContainer(Stack);

export default function FoodStack(props){
	
	const API_KEY = '33b212341ed64ffbbe70c625af7fad27'

	return(
			<Stack.Navigator>
				<Stack.Screen 
					name="Food Landing" 
					options={{
						headerShown: false, 
						headerStyle: {
							backgroundColor: "transparent"
						},
						headerTintColor: "transparent"
					}} 
					component={FoodLanding} 
				/>
				<Stack.Screen 
					name="Search Recipes" 
					options={{
						headerShown: false,
						headerStyle: {
							backgroundColor: "transparent"
						},
						headerTintColor: "transparent"
					}} 
					component={SearchRecipes} 
				/>
				<Stack.Screen 
					name="View Recipe" 
					options={{
						headerShown: false,
						headerStyle: {
							backgroundColor: "transparent"
						},
						headerTintColor: "transparent"
					}} 
					component={ViewRecipe} 
				/>
			</Stack.Navigator>
	)
}