import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import StyleCounterAdd from './StyleCounterAdd'

const CounterAdd = ({stock}) => {

  return (
    <View style={StyleCounterAdd.container}>

        <TouchableOpacity style={StyleCounterAdd.btnAction}>
            <Text style={StyleCounterAdd.center}>-</Text>
        </TouchableOpacity>

        <Text style={StyleCounterAdd.InputAdd}>0</Text>

        <TouchableOpacity style={StyleCounterAdd.btnAction}>
            <Text style={StyleCounterAdd.center}>+</Text>
        </TouchableOpacity>
        
    </View>
  )
}

export default CounterAdd