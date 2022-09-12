import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setOrderReducer } from '../../redux/reducers/orderSlice'

import styleTotal from './StyleTotalCart'

const TotalCart = ({navigation}) => {
    const cart = useSelector(state => state.cart.cart)

    
    const item ={
        id:Math.floor(Math.random() * 1000), 
        totalOrder: cart.reduce((acum, item) => acum = acum + (item.Precio * item.qty), 0),
        orden: [...cart],
    }

    const dispatch = useDispatch()
    //calcular total
    const total =()=>{
        return cart.reduce((acum, item) => acum = acum + (item.Precio * item.qty), 0)
    }
    //Generar orden
    const CreateOrder = () => {
        dispatch(setOrderReducer(item))
        navigation.navigate('procesando')
    }

  return (
      <View>
        <View style={styleTotal.containerTotal}>
            <Text style={styleTotal.total}>Total: </Text>
            <Text style={styleTotal.totalIcon}>$ </Text>
            <Text style={styleTotal.total}>{total()}.00</Text>
        </View>
        <TouchableOpacity style={styleTotal.btnPay} onPress={CreateOrder}>
            <Text style={styleTotal.btnTitle}>pagar ahora !</Text>
        </TouchableOpacity>
    </View>
  )
}

export default TotalCart