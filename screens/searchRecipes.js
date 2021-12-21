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
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default function SearchRecipes(props){

  const [searchText, setSearchText] = useState("")

  async function searchForRecipes(){
    console.log(searchText)
  }

  return(
    <View style={styles.appScreen}>
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
  )
}

const styles= StyleSheet.create({
  appScreen: {
    flex: 1,
    backgroundColor: "#fff",
    height: "92%",
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