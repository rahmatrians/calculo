import React, { useEffect, useState } from 'react';
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
  const [number, setNumber] = useState('');
  const [value, setValue] = useState([]);
  const [valueHistory, setValueHistory] = useState([]);
  const [tempVal, setTempVal] = useState('');
  const [lastResult, setLastResult] = useState(0);
  const [getOperator, setGetOperator] = useState('');

  // useEffect(() => {
  // });
  
  const addValue = (val) => {
    setTempVal(tempVal + val);
    setNumber(number + val);
  }
  
  const removeOne = () => {
    value.pop();
    setNumber(number.slice(0,-1));
    console.log("removed");
  }

  const operator = (opr) => {
    if (tempVal) {
      value.push(parseInt(tempVal));
    }
    setTempVal('');
    value.push(opr);
    setNumber(number + opr);
    console.log(value);
  }
  
  const equalVal = () => {
    var y = 0;
    const operators = ['/','x','-','+'];
    if (tempVal) {
      value.push(parseInt(tempVal));
      valueHistory.push(parseInt(tempVal));
      setTempVal('');
    }
    console.log(value.length, "data:", value);
    // value.forEach((value, index, array) => dataLoop(value, index, array));

    // for (let x = 1; x <= ((operator.length-1)/2); x+2) {


      
    for (let x = (value.length-1)/2; x > 0 ; x--) {
      var datax = [];
      value.filter((vals, idx) => (vals === '/' || vals === 'x') && (datax.push(idx)));
      console.log("datax : ", datax);
      if (datax.length === 0) {
        break;        
      } else {
        console.log("value:", value);
        console.log("operator :", datax[0]);

        if (value[datax[0]] === '/') {
          var data =  value[datax[0]-1] / value[datax[0]+1];
          console.log("data : ", data);
          value.splice(datax[0]-1, 1, data);
          // console.log(value[datax[0]-1], "/", value[datax[0]+1]);
        } else if (value[datax[0]] === 'x') {
          var data =  value[datax[0]-1] * value[datax[0]+1];
          console.log("data : ", data);
          value.splice(datax[0]-1, 1, data);
          // console.log(value[datax[0]-1], "*", value[datax[0]+1]);
        } else {
          console.log("e");
        }
        value.splice(datax[0], 2);
        console.log("valss : ", value);
      }
    }

    console.log("============================================================");

    for (let x = (value.length-1)/2; x > 0 ; x--) {
      var dataz = [];
      value.filter((vals, idx) => (vals === '-' || vals === '+') && (dataz.push(idx)));
      console.log("dataz : ", dataz);
      console.log("valuez : ", value);
      console.log("operatorz : ", dataz[0]);

      if (value[dataz[0]] === '-') {
        var data =  value[dataz[0]-1] - value[dataz[0]+1];
        console.log("data : ", data);
        value.splice(dataz[0]-1, 1, data);
        // console.log(value[dataz[0]-1], "/", value[dataz[0]+1]);
      } else if (value[dataz[0]] === '+') {
        var data =  value[dataz[0]-1] + value[dataz[0]+1];
        console.log("data : ", data);
        value.splice(dataz[0]-1, 1, data);
        // console.log(value[dataz[0]-1], "*", value[dataz[0]+1]);
      } else {
        console.log("e");
      }
      value.splice(dataz[0], 2);
      console.log("valss : ", value);
      setNumber(value);
    }
  }
 

  // const dataLoop = (value, index, array) => {
  //   (index % 2 === 0 && index !== 0) && (getOperator.push(value)); //just example ternary without else condition by my experiment
  //   index % 2 !== 0 && (getOperator.push(value));
  //   console.log(getOperator);
  // }

  return (
    <View style={[styles.container, {flexDirection: "column"}]}>
          <View style={{ backgroundColor:'#22252d', flex:2}}>
          <Text style={{ fontSize:56, color: 'white', position:'absolute', bottom:0, right:0, textAlign:'right'}}>{number}</Text>
        </View>
        <View style={{ backgroundColor:'#2a2d37', flex:4, flexDirection:'column', padding:20}}>
          <View style={{ backgroundColor:'#2a2d37', flexDirection:'row', alignContent:'space-between'}}>
            <TouchableOpacity onPress={() => removeOne()} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'#31dcbe', fontSize:28 }}>C</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => operator("_")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'#31dcbe', fontSize:28 }}>_</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => operator("%")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'#31dcbe', fontSize:28 }}>%</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => operator("/")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'#d16365', fontSize:28 }}>/</Text></TouchableOpacity>
          </View>
          <View style={{ backgroundColor:'#2a2d37', flexDirection:'row', alignContent:'space-between'}}>
            <TouchableOpacity onPress={() => addValue(7)} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>7</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => addValue(8)} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>8</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => addValue(9)} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>9</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => operator("x")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'#d16365', fontSize:28 }}>x</Text></TouchableOpacity>
          </View>
          <View style={{ backgroundColor:'#2a2d37', flexDirection:'row', alignContent:'space-between'}}>
            <TouchableOpacity onPress={() => addValue(4)} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>4</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => addValue(5)} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>5</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => addValue(6)} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>6</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => operator("-")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'#d16365', fontSize:28 }}>-</Text></TouchableOpacity>
          </View>
          <View style={{ backgroundColor:'#2a2d37', flexDirection:'row', alignContent:'space-between'}}>
            <TouchableOpacity onPress={() => addValue(1)} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>1</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => addValue(2)} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>2</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => addValue(3)} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>3</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => operator("+")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'#d16365', fontSize:28 }}>+</Text></TouchableOpacity>
          </View>
          <View style={{ backgroundColor:'#2a2d37', flexDirection:'row', alignContent:'space-between'}}>
            <TouchableOpacity onPress={() => operator("o")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>o</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => addValue(0)} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>0</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => operator("/")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'white', fontSize:28 }}>.</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => equalVal()} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'#d16365', fontSize:28 }}>=</Text></TouchableOpacity>
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
