import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import style from './StyleItemListOrder'
import { AntDesign } from '@expo/vector-icons';


const ItemListOrder = ({item, nav}) => {

  const [itemToRemove, setItemToRemove] = useState(item)
  const detail = () =>{
      nav.navigate('OrderDetail', item)
  }

  return (
    <View style={style.container}>
        <View style={style.containerCenter}>
            <Text style={style.title}>Pedido #{item.id}</Text>
            <Text>Total: $ {item.totalOrder}.00</Text>
        </View>
        <TouchableOpacity style={style.containerRight} onPress={detail}>
        <AntDesign name="right" size={24} color="#fff" />
        </TouchableOpacity>
    </View>
  )
}

export default ItemListOrder