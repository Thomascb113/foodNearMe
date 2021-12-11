import React, { useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from "react-native-vector-icons/FontAwesome";
import ViewOverflow from 'react-native-view-overflow';


export default function App(){

  const [sideNavbarVisible, setSideNavbarVisible] = useState(false)

  function toggleSideNavbar(){
    setSideNavbarVisible(!sideNavbarVisible);
  }

  return(
    <View style={{backgroundColor: "#fff", height: "100%", width: "100%"}}>

      <View style={styles.navBar}>
        <Icon name="bars" size={30} color="#444" style={{paddingLeft: 10}} onPress={() => toggleSideNavbar()}/>
      </View>
      <View style={ sideNavbarVisible===true ? styles.appScreenBlur : styles.appScreen }>
          <Text>Thomas has entered the chat!</Text>
      </View>


      { sideNavbarVisible===true &&
          <View style={styles.sideNavbarContainer}>
            <View style={{height: "8%", width: "100%", borderColor: "blue", borderWidth: 1, justifyContent: "center"}}>
              <Icon name="arrow-left" size={30} style={{paddingLeft: 10}} onPress={() => toggleSideNavbar()}/>
            </View>
          </View>
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
  navBar: {
    height: "8%",
    borderWidth: 1,
    borderColor: "#444",
    justifyContent: "center",
    alignItems: "flex-start"
  },

  appScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: "92%",
  },

  appScreenBlur: {
    flex: 1, 
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: "92%",
  },

  sideNavbarContainer: {
    backgroundColor: "red",
    width: "70%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 9,
  }

})