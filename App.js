import React, { useState, useEffect, useRef } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Animated,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/FontAwesome";
Icon.loadFont();
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

const Drawer = createDrawerNavigator();


import FoodStack from "./stacks/FoodStack"
import AboutStack from "./stacks/AboutStack"

import FoodTabs from "./tabs/FoodTabs"

export default function App(){

  const [sideNavbarVisible, setSideNavbarVisible] = useState(false)

  const navBarPosition = useRef(new Animated.Value(0)).current // Nav Side Bar starting position
  const slidingBarPosition = useRef(new Animated.Value(0)).current

  const [selectedScreen, setSelectedScreen] = useState("Food")

  const allTabOptions = [
    {
      option: "Food",
      icon: "burger",
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

  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent'
    },
  };

  return(
    <LinearGradient colors={['#2EAAFA', '#8C04DB']} style={{ flex: 1, height: "100%", width: "100%" }}>
      <SafeAreaView style={{backgroundColor: null, height: "100%", width: "100%", flex: 1}}>
          <NavigationContainer theme={AppTheme}>
            <Drawer.Navigator theme={AppTheme} initialRouteName="Food Home">
              <Drawer.Screen 
                name="Food Home" 
                options={{ 
                  headerStyle: {
                    backgroundColor: "tranparent"
                  } 
                }} 
                component={FoodTabs} 
              />
              <Drawer.Screen 
                name="About" 
                component={AboutStack} 
                options={{ 
                  headerStyle: {
                    backgroundColor: "tranparent"
                  } 
                }} 
              />
            </Drawer.Navigator>
          </NavigationContainer>
      </SafeAreaView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  navBar: {
    height: 60,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  appScreen: {
    height: "100%",
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