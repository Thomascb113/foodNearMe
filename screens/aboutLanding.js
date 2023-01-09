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
  Animated
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default function aboutLanding(){

  return(
    <View style={styles.appScreen}>
        <Text>This is the about page for my new app!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  appScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})