import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <View style={styles.purple}>
       
      </View>
      <View style={styles.black}>
      <Text style={styles.text} >Hi</Text>
        <Text style={styles.text} >Powercoders team</Text>
      </View>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection:'row',
    // backgroundColor: '#fff',
    

  },
  text: {
    color:'red',
    fontSize: 24,
  },
  purple: {
    backgroundColor: "purple",
   flex: 1,
  },
  black: {
    backgroundColor: "white",
   flex: 6,
   alignItems: 'center',
    // justifyContent: 'center',
  }
});
