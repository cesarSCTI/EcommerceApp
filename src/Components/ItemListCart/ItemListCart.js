import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import style from './StyleItemListCart'
import { Feather } from '@expo/vector-icons'; 
import { removeCartReducer } from '../../redux/reducers/cartSlice';
import {useDispatch} from 'react-redux'


const ItemListCart = ({item, navigation}) => {

  const [itemToRemove, setItemToRemove] = useState(item)
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeCartReducer(itemToRemove))
  }

  return (
    <View style={style.container}>
        <View style={style.containerLeft}>

        </View>
        <View style={style.containerCenter}>
            <Text style={style.title}>{item.Nombre}</Text>
            <Text>X {item.qty}</Text>
        </View>
        <TouchableOpacity style={style.containerRight} onPress={remove}>
            <Text><Feather name="trash-2" size={30} color="#fff" /></Text>
        </TouchableOpacity >
    </View>
  )
}

export default ItemListCart