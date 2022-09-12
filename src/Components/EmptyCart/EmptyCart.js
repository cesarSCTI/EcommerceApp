import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import style from './StyleEmptyCart'
import { AntDesign } from '@expo/vector-icons';

const EmptyCart = ({navigation}) => {
  return (
    <View style={style.container}>
        <Text><AntDesign name="shoppingcart" size={40} color="#fff" /></Text>
        <Text style={style.title}>Carrito vacio</Text>
    </View>
  )
}

export default EmptyCart