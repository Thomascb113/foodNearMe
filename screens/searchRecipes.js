import React, { useState, useEffect, useRef } from 'react';
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
  Image,
  Modal
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

  const [recipeModalVisible, setRecipeModalVisible] = useState(false)
  const [selectedRecipe, setSelectedRecipe] = useState()

  const [loading, setLoading] = useState(false)

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
      setAllRecipes(response.results)
    }
    catch(e){
      console.log(e)
    }
  }

  async function getMoreRecipes(){

  }

  async function recipeClicked(item){
    console.log("CLICKED ME: ", item)

    let req = await fetch(`https://api.spoonacular.com/recipes/${item.id}/information&apiKey=${key}`, {
      headers: {
        "Content-Type": "application/json"
      }
    })

    let response = await req.json()
    console.log("RESPONSE: ", response)

    setLoading(false)
    setRecipeModalVisible(true)
  }

  const renderSearchResults = (item, index) =>{
    return(
      <TouchableOpacity onPress={() => { setLoading(true); recipeClicked(item) }} style={{height: 150, width: "45%", backgroundColor: "#fff", marginLeft: "auto", marginRight: "auto", marginTop: 10, marginBottom: 10, borderRadius: 10}}>
        <TouchableOpacity onPress={() => { console.log("") }} style={{ position: "absolute", top: 10, right: 12, zIndex: 5, backgroundColor: "white", borderRadius: 20 }}>
          <Icon name="heart-o" size={20} color="red" style={{ padding: 6 }}  />
        </TouchableOpacity>
        
        <View style={{height: "100%", width: "100%", }} >
            <View style={{ height: "70%", width: "100%", alignItems: "center", justifyContent: "center" }}>
              <Image
                source={{uri: item.item.image}}
                style={{height: "86%", width: "90%", borderRadius: 10, alignSelf: "center"}}
                resizeMode="stretch"
              />
            </View>

            <View style={{ height: "30%", alignItems: "center" }}>
              <Text style={{color: "#000", fontSize: 14, fontWeight: "bold", marginLeft: 5}}>{item.item.title}</Text>
            </View>
        </View>
      </TouchableOpacity>
    )
  }

  return(
    <View style={styles.appScreen}>
      <View style={styles.searchbarContainer}>
        <View style={{ width: "92%" }}>
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

        <View style={{ width: "8%" }}>
          <Icon name="filter" size={21} onPress={() => { console.log("You clicked the filter button") }} />
        </View>
      </View>

      <View style={{height: "90%", width: "100%", alignItems: "center",  justifyContent: "center"}}>
        <FlatList
          data={allRecipes}
          renderItem={renderSearchResults}
          numColumns={2}
          style={{ width: "100%" }}
          contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
        />
      </View>

      <Modal 
        animationType="slide"
        transparent={true}
        visible={recipeModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          satRecipeModalVisible(false);
        }}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 22, backgroundColor: "white" }}>
          <Text>HELLO</Text>
        </View>
      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  appScreen: {
    flex: 1,
    height: "100%",
    width: "100%"
  },

  searchbarContainer: {
    width: "100%",
    height: 65,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },

  searchBar: {
    width: "90%",
    height: 45,
    backgroundColor: "#fff",
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