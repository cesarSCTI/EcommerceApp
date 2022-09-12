import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import StyleItemList from './StyleItemList'

function ItemList( {item, nav, Add} ) {

  const{Nombre, Precio, Quality} = item
  
  return (
    <TouchableOpacity style={StyleItemList.container}
    onPress={()=>{
        nav.navigate('productDetail', item)
    }}
    >
        <View style={StyleItemList.containerLeft}>
        </View>
        <View style={StyleItemList.containerRight}>
            <Text style={StyleItemList.title}>{Nombre}</Text>
            <Text>Stars: {Quality}</Text>
        </View>
        <View style={StyleItemList.containerPrice}>
            <Text style={StyleItemList.price}> 
              <Text style={{color:'#4e60ff'}}>$ </Text>
              {Precio}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default ItemList