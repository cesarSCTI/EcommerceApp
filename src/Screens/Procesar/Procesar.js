import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import style from './StyleProcesar'
import { useDispatch } from 'react-redux'
import { defaultCartReducer } from '../../redux/reducers/cartSlice'

const Procesar = ({navigation}) => {
  const dispatch = useDispatch();
  const defaultCart = () =>{
    dispatch(defaultCartReducer())
    navigation.goBack()
  }
  return (
    <View style={style.container}>
      <Text style={style.procesar}>Orden generada correctamente</Text>
      <TouchableOpacity onPress={defaultCart} style={style.btn}>
        <Text style={{color:'#fff'}}>regresar al carrito</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Procesar