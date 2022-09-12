import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import ItemList from '../Components/ItemList/ItemList'
import data from '../../data'

const ProductList = ({navigation}) => {
  
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item})=>(<ItemList item={item} nav={navigation}/>)}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={()=><View style={{marginBottom:10}}/>}
      /> 
    </View>
  )
}

export default ProductList
