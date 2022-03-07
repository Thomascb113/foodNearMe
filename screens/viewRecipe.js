import React, { useState, useEffect, useRef } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Animated,
  TouchableOpacity,
  TextInput,
  KeyBoardAvoidingView,
  Image
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

// https://api.spoonacular.com/recipes/{id}/information

export default function ViewRecipe(props){
  console.log("PROPS: ",props)
  const [key, setKey] = useState(props.route.params.api_key)


  async function getRecipeInformation(){
    console.log("HEREEEE")
    try{
      let req = await fetch(`https://api.spoonacular.com/recipes/${props.route.params.item.id}/information?includeNutrition=true&apiKey=${key}`, {
        headers: {
          "Content-Type": "application/json"
        }
      })

      let response = await req.json()
      console.log("HERE: ", response)
    }
    catch(e){
      console.log(e)
    }
  }

  useEffect(() =>{
    getRecipeInformation()
    return
  },[])

  return(
    <View style={styles.appScreen}>
      <Text style={{color: "#000"}}>This is where the recipe info goes</Text>
    </View>
  )
}


const styles= StyleSheet.create({
  appScreen: {
    flex: 1,
    backgroundColor: "#fff",
    height: "92%",
    width: "100%"
  },
})