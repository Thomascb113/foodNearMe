import React, { useState, useEffect, useRef } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
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
  Image,
  ScrollView,
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

// https://api.spoonacular.com/recipes/{id}/information

export default function ViewRecipe(props){
  console.log("PROPS: ",props)
  const [key, setKey] = useState(props.route.params.api_key)
  const item  = props.route.params.item
  console.log("ITEM: ", item)

  const [foodInfo, setFoodInfo] = useState([])

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
      setFoodInfo(response)

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
    <ScrollView style={styles.appScreen}>
      <SafeAreaView>
        <Image
          source={{uri: item.image}}
          style={{height: 300, width: "100%"}}
        />
        <View style={{width: "100%"}}>
          <View style={{width: "100%", height: 60}}>
            <Text>item.title</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}


const styles= StyleSheet.create({
  appScreen: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%"
  },
})