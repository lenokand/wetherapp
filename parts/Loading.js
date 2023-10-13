import React from "react";
import {ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Loading () {
    return (
    <View style={styles.container}>
        <Text style={styles.box}>Looking for the weather for you...</Text>
        <ActivityIndicator  size="large" color="#73095c" />
        <StatusBar style="dark" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#fff",
        alignItems:"center",
    },
    box:{
        paddingBottom: 30, 
        color:"#73095c",
        fontSize:20,
  }
})

