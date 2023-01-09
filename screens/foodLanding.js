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
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { withNavigation } from "react-navigation"

export default function foodLanding(props){

  const navigation = props.navigation

  const API_KEY = '33b212341ed64ffbbe70c625af7fad27'

  const buttonPosition = useRef(new Animated.Value(0))

  function cookClicked(){
    navigation.navigate("Search Recipes", { api_key: API_KEY })
  }

  return(
    <View style={styles.appScreen}>
      <TouchableOpacity onPress={() => cookClicked()}>
        <View style={[styles.optionButton, {marginRight: 40}]}>
          <Text style={styles.buttonText}>Cook</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={[styles.optionButton, {marginLeft: 40}]}>
          <Text style={styles.buttonText}>Eat Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  appScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "92%",
    flexDirection: "row"
  },

  optionButton: {
    height: 100,
    width: 100,
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#999",
    alignItems: "center",
    justifyContent: "center"
  },

  buttonText: {
    fontSize: 18,
  }
})