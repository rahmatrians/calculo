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
  const [test, setTest] = useState([]);

  // useEffect(() => {
  // });
  
  const addValue = (val) => {
    setTempVal(tempVal + val);
    setNumber(number + val);
  }
  
  const removeOne = () => {
    // if (tempVal !== '') {
    //   value.push(parseInt(tempVal));
    //   valueHistory.push(parseInt(tempVal));
    //   setTempVal('');
    // }

    // console.log("first => removed : ", value, "number : ", number);
    
    // setTest(value[value.length-1]);
    // setTest(test.slice(0,-1));
    // console.log("item last of value 1 : ", data);
    // console.log("item last of value 2 : ", test);
    
    // setValue(value.splice(value.length-1, 1, parseInt(data)));
    setNumber(number.slice(0,-1));
    console.log("last => removed : ", test, "number : ", number);
  }
  
  const checkTest = () => {
    // let indexes = [number.split('/').join(',').split('x').join(',').split('-').join(',').split('+').join(',')];
    let indexes = number.split(/([ \/, \+, \-, \x])+/g);

    console.log(number);
    console.log(indexes);

    // for (let i = 0; i < number.length; i++) {
      // if (number[i] === '/' || number[i] === 'x' || number[i] === '-' || number[i] === '+') {
      //   indexes.push(i);
      // }
    // }
    // console.log(indexes);
    

    // console.log("vals : ", getOperator, "number : ", number);
  }

  const operator = (opr) => {
    // if (tempVal) {
    //   value.push(parseInt(tempVal));
    // }
    // setTempVal('');
    // value.push(opr);
    setNumber(number + opr);
    // console.log(value);
  }

  const calcualteTimes = () => {
  }
  
  const equalVal = async () => {
    setTempVal('');
    console.log("tempval: ", tempVal);
    console.log("number: ", number);
    // if (tempVal) {
    //   value.push(parseInt(tempVal));
    //   valueHistory.push(parseInt(tempVal));
    //   setTempVal('');
    // }
    // console.log(value.length, "data:", value);
    // value.forEach((value, index, array) => dataLoop(value, index, array));
    
    let indexes = await number.split(/([ \/, \+, \_, \x])+/g);
    // await setValue(indexes);
    
    for (let x = (indexes.length-1)/2; x > 0 ; x--) {
      var datax = [];
      indexes.filter((vals, idx) => (vals === '/' || vals === 'x') && (datax.push(idx)));
      console.log("datax : ", datax);
      if (datax.length !== 0) {
        console.log("indexes:", indexes);
        console.log("operator :", datax[0]);

        if (indexes[datax[0]] === '/') {
          var data =  parseInt(indexes[datax[0]-1]) / parseInt(indexes[datax[0]+1]);
          console.log("data : ", data);
          indexes.splice(datax[0]-1, 1, data);
          // console.log(indexes[datax[0]-1], "/", indexes[datax[0]+1]);
        } else if (indexes[datax[0]] === 'x') {
          var data =  parseInt(indexes[datax[0]-1]) * parseInt(indexes[datax[0]+1]);
          console.log("data : ", data);
          indexes.splice(datax[0]-1, 1, data);
          // console.log(indexes[datax[0]-1], "*", indexes[datax[0]+1]);
        } else {
          console.log("e");
        }
        indexes.splice(datax[0], 2);
        console.log("valss : ", indexes);
        setValue(indexes);
        setNumber(''+indexes);
      }else {
        break;
      }
    }

    console.log("============================================================");

    for (let x = (indexes.length-1)/2; x > 0 ; x--) {
      var datax = [];
      indexes.filter((vals, idx) => (vals === '_' || vals === '+') && (datax.push(idx)));
      console.log("datax : ", datax);
      if (datax.length !== 0) {
        console.log("indexes:", indexes);
        console.log("operator :", datax[0]);

        if (indexes[datax[0]] === '_') {
          var data =  parseInt(indexes[datax[0]-1]) - parseInt(indexes[datax[0]+1]);
          console.log("data : ", data);
          indexes.splice(datax[0]-1, 1, data);
          // console.log(indexes[datax[0]-1], "/", indexes[datax[0]+1]);
        } else if (indexes[datax[0]] === '+') {
          var data =  parseInt(indexes[datax[0]-1]) + parseInt(indexes[datax[0]+1]);
          console.log("data : ", data);
          indexes.splice(datax[0]-1, 1, data);
          // console.log(indexes[datax[0]-1], "*", indexes[datax[0]+1]);
        } else {
          console.log("e");
        }
        indexes.splice(datax[0], 2);
        console.log("valss : ", indexes);
        setValue(indexes);
        setNumber(''+indexes);
      }else {
        break;
      }
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
            <TouchableOpacity onPress={() => checkTest()} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'#31dcbe', fontSize:28 }}>_</Text></TouchableOpacity>
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
            <TouchableOpacity onPress={() => operator("_")} style={{ padding:20, margin:7, borderRadius:25,backgroundColor:'#282b33', flex:1 }}><Text style={{ textAlign:'center', color:'#d16365', fontSize:28 }}>-</Text></TouchableOpacity>
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
