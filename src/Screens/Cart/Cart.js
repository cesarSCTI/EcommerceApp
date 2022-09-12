import React from 'react'
import {View, Text, FlatList} from 'react-native'
import { useSelector } from 'react-redux'
import ItemListCart from '../../Components/ItemListCart/ItemListCart'
import EmptyCart from '../../Components/EmptyCart/EmptyCart'
import TotalCart from '../../Components/TotalCart/TotalCart'

 
const Cart = ({navigation})=>{
    const cart = useSelector(state => state.cart.cart)
    return(
        <View>
            {cart.length == 0
            ? <EmptyCart />
            :<View>
                <FlatList
                    data={cart}
                    renderItem={({item})=>(<ItemListCart item={item} navigation={navigation}/>)}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={()=><View style={{marginBottom:10}}/>}
                /> 
                <TotalCart navigation={navigation}/>
            </View>
            }
        </View>
    )
}
export default Cart
