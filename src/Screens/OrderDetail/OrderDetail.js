import React from 'react'
import {View, Text, FlatList} from 'react-native'
import style from './StyleOrderDetail'

const OrderDetail = ({navigation, route}) => {
  const item =  route.params
  return (
    <View>
      <View style={style.containerHeader}>
        <View style={style.mitad}>
          <Text >Pedido</Text>
          <Text style={style.title}>#{item.id}</Text>
        </View>
        <View style={style.mitad}>
          <Text >Total</Text>
          <Text style={style.title}>$ {item.totalOrder}.00</Text>
        </View>
      </View>
      <FlatList
          data={item.orden}
          renderItem={({item})=>(<Text style={style.items}>{item.Nombre} x {item.qty}</Text>)}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={()=><View style={{marginBottom:10}}/>}
        /> 
    </View>
  )
}

export default OrderDetail