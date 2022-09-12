import React from 'react'
import {View, Text} from 'react-native'
import style from './StyleEmptyOrders';
import { AntDesign } from '@expo/vector-icons';

const EmptyOrder = () => {
  return (
    <View style={style.container}>
        <Text><AntDesign name="inbox" size={40} color="#fff" /></Text>
        <Text style={style.title}>No tienes ninguna orden</Text>
    </View>
  )
}

export default EmptyOrder