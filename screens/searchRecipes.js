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
import { Avatar } from "react-native-elements"

export default function SearchRecipes(props){
  console.log("props: ", props)
  const navigation = props.navigation
  const [key, setKey] = useState(props.route.params.api_key)
  const [allRecipes, setAllRecipes] = useState([])

  let globalOffset = 0

  const [searchText, setSearchText] = useState("")
  const [prevSearch, setPrevSearch] = useState("")

  async function searchForRecipes(){
    console.log(searchText)
    setPrevSearch(searchText)
    try{
      let req = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchText}&apiKey=${key}`, {
        headers: {
          "Content-Type": "application/json"
        }
      })

      let response = await req.json()
      console.log("HEREEE: ", response.results)
      // let oldRecipes = allRecipes
      // for(var i in response.results){
      //   oldRecipes.push(response.results[i])
      // }
      setAllRecipes(response.results)
    }
    catch(e){
      console.log(e)
    }
  }

  async function getMoreRecipes(){

  }

  function recipeClicked(item){
    console.log("CLICKED ME: ", item)
  }

  const renderSearchResults = (item, index) =>{
    return(
      <View style={{height: 220, width: 340, marginTop: 10, marginBottom: 10}}>
        <TouchableOpacity style={{height: "100%", width: "100%", alignItems: "center", justifyContent: "center"}} onPress={() => navigation.navigate("View Recipe", {item: item.item, api_key: key})}>
            <View style={{position: "absolute", bottom: 10, left: 10, zIndex: 10}}>
              <Text style={{color: "#000", fontSize: 20, fontWeight: "bold"}}>{item.item.title}</Text>
            </View>
            <Image
              source={{uri: item.item.image}}
              style={{height: 220, width: 340}}
              resizeMode="stretch"
            />
        </TouchableOpacity>
      </View>
    )
  }

  return(
    <View style={styles.appScreen}>
      <View style={styles.searchbarContainer}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search Recipes..."
            value={searchText}
            onChangeText={setSearchText}
            style={styles.searchBarText}
          />
          <View style={{justifyContent: "center"}}>
            <Icon name="search" size={21} onPress={() => searchForRecipes()}/>
          </View>
        </View>
      </View>

      <View style={{height: "85%", width: "100%", alignItems: "center"}}>
        <FlatList
          data={allRecipes}
          renderItem={renderSearchResults}
        />
      </View>
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

  searchbarContainer: {
    width: "100%",
    height: 55,
  },

  searchBar: {
    width: "90%",
    height: 45,
    backgroundColor: "#ddd",
    borderRadius: 16,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },

  searchBarText: {
    underlineColorAndroid: "#999",
    height: "100%",
    width: "85%",
  }
})