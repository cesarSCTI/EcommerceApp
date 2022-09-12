import React from 'react'
import {View, Text, FlatList} from 'react-native'
import { useSelector } from 'react-redux'
import EmptyOrder from '../../Components/EmptyOrders/EmptyOrder'
import ItemListOrder from '../../Components/ItemListOrder/ItemLisOrder'

const Orders = ({navigation}) => {
    const orders = useSelector(state => state.orders.orders)
  return (
    <View>
      {orders.length == 0
      ? <EmptyOrder />
      :<View>
        <FlatList
          data={orders}
          renderItem={({item})=>(<ItemListOrder item={item} nav={navigation}/>)}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={()=><View style={{marginBottom:10}}/>}
        /> 
        </View>
            }
        </View>
  )
}

export default Orders