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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from "react-native-vector-icons/FontAwesome";
import { NavigationContainer } from '@react-navigation/native';


import FoodStack from "./stacks/FoodStack"
import AboutStack from "./stacks/AboutStack"

export default function App(){

  const [sideNavbarVisible, setSideNavbarVisible] = useState(false)

  const navBarPosition = useRef(new Animated.Value(0)).current // Nav Side Bar starting position
  const slidingBarPosition = useRef(new Animated.Value(0)).current

  const [selectedScreen, setSelectedScreen] = useState("Food")

  const allTabOptions = [
    {
      option: "Food",
      icon: "food",
      index: 0,
    },
    {
      option: "About",
      icon: "question",
      index: 1,
    }
  ]

  function toggleSideNavbar(){
    if(sideNavbarVisible===false){
      setSideNavbarVisible(!sideNavbarVisible);
      NavTabAnimationOpen();
    }
    else{
      setSideNavbarVisible(!sideNavbarVisible);
      NavTabAnimationClose();
    }    
  }

  function selectScreen(option){
    setSelectedScreen(option.option)
    AnimatedSlidingBar(option.index)
  }

  function NavTabAnimationOpen(){
      Animated.timing(
        navBarPosition,
        {
          toValue: 300,
          duration: 250,
        }
      ).start();
  }

  function NavTabAnimationClose(){
    Animated.timing(
      navBarPosition,
      {
        toValue: 0,
        duration: 250,
      }
    ).start();
  }

  function AnimatedSlidingBar(index){
    Animated.timing(
      slidingBarPosition,
      {
        toValue: 50 * index,
        duration: 250,
      }
    ).start()
  }

  const renderOptionsList = (item) =>{
    return(
      <TouchableOpacity style={styles.tabOption} onPress={() => selectScreen(item)}>
        <View style={{height: "100%", width: "15%", alignItems: "center", justifyContent: "center"}}>
          <Icon name={item.icon} size={25} color="#333" style={styles.tabIconStyle}/>
        </View>
        <Text style={styles.tabOptionText}>{item.option}</Text>
      </TouchableOpacity>
    )
  }

  return(
    <View style={{backgroundColor: "#fff", height: "100%", width: "100%"}}>

      <View style={styles.navBar}>
        <Icon name="bars" size={30} color="#444" style={{paddingLeft: 10}} onPress={() => toggleSideNavbar()}/>
      </View>
      <View style={styles.appScreen}>
          <NavigationContainer>
            {
              selectedScreen==="Food" ?
              <FoodStack />
              :
              selectedScreen==="About" ?
              <AboutStack />
              :
              null
            }
          </NavigationContainer>
      </View>

      <Animated.View style={[styles.sideNavbarContainer, {width: navBarPosition}]}>

        <View style={{height: 60, width: "100%", justifyContent: "center"}}>
          <Icon name="arrow-left" size={30} style={{paddingLeft: 10}} color="#000" onPress={() => toggleSideNavbar()}/>
        </View>

        <View style={{width: "100%"}}>
          <View style={styles.tabButtonContainer}>

            <FlatList
              data={allTabOptions}
              renderItem={({item}) => renderOptionsList(item)}
              keyExtractor={(item) => item.index}
            />

          </View>

          <Animated.View style={[styles.slidingAnimationBar, {top: slidingBarPosition}]}></Animated.View>

        </View>
      </Animated.View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  navBar: {
    height: 60,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  appScreen: {
    height: "92%",
    backgroundColor: "#BBB"
  },

  sideNavbarContainer: {
    backgroundColor: "#ddd",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 9,
  },

  tabOption:{
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },

  tabOptionText:{
    fontSize: 16,
    marginLeft: 10,
  },

  tabButtonContainer: {
    backgroundColor: "#ddd",
    width: "98%",
    zIndex: 5,
  },

  slidingAnimationBar:{
    backgroundColor: "blue",
    width: "100%",
    height: 50,
    position: "absolute"
  }

})