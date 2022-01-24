/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Section,
  StyleSheet,
  Text,
  View,
} from 'react-native';



const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <View style={[styles.container, {flexDirection: "column"}]}>
          <View style={{ backgroundColor:'#22252d', flex:2}}>
          <Text style={{ fontSize:56, color: 'white', position:'absolute', bottom:0, right:0, textAlign:'right'}}>{number}</Text>
        </View>
        <View style={{ backgroundColor:'#2a2d37', flex:4, flexDirection:'column', padding:20}}>
          <View style={{ backgroundColor:'#2a2d37', flexDirection:'row', alignContent:'space-between'}}>
            <TouchableOpacity onPress={() => setNumber(0)} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'#31dcbe', fontSize:28 }}>C</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number+"_")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'#31dcbe', fontSize:28 }}>_</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number+"%")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'#31dcbe', fontSize:28 }}>%</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number+"/")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'#d16365', fontSize:28 }}>/</Text></TouchableOpacity>
          </View>
          <View style={{ backgroundColor:'#2a2d37', flexDirection:'row', alignContent:'space-between'}}>
            <TouchableOpacity onPress={() => setNumber(number+"7")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>7</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number+"8")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>8</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number+"9")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>9</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number+"x")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'#d16365', fontSize:28 }}>x</Text></TouchableOpacity>
          </View>
          <View style={{ backgroundColor:'#2a2d37', flexDirection:'row', alignContent:'space-between'}}>
            <TouchableOpacity onPress={() => setNumber(number+"4")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>4</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number+"5")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>5</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number+"6")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>6</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number+"-")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'#d16365', fontSize:28 }}>-</Text></TouchableOpacity>
          </View>
          <View style={{ backgroundColor:'#2a2d37', flexDirection:'row', alignContent:'space-between'}}>
            <TouchableOpacity onPress={() => setNumber(number+"1")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>1</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number+"2")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>2</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number+"3")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>3</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number+"+")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'#d16365', fontSize:28 }}>+</Text></TouchableOpacity>
          </View>
          <View style={{ backgroundColor:'#2a2d37', flexDirection:'row', alignContent:'space-between'}}>
            <TouchableOpacity onPress={() => setNumber(number+"o")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>o</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number+"0")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>0</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number+"/")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>.</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setNumber(number+"=")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'#d16365', fontSize:28 }}>=</Text></TouchableOpacity>
          </View>
        </View>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});


export default App;
