import React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator}  from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import productList from '../Screens/ProductList';
import ProductDeatil from '../Screens/ProductDetail/ProductDetail';
import Cart from '../Screens/Cart/Cart';
import { AntDesign } from '@expo/vector-icons';
import ItemList from '../Components/ItemList/ItemList';
import EmptyCart from '../Components/EmptyCart/EmptyCart';
import Orders from '../Screens/Orders/Orders';
import Procesar from '../Screens/Procesar/Procesar';
import OrderDetail from '../Screens/OrderDetail/OrderDetail';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

 

const MainStack = () =>{
    return(
        <NavigationContainer>
            <MenuTabs/>
        </NavigationContainer>
    );
}
//TABS
const MenuTabs = ()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="HomeScreen" 
                component={MenuStack} 
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ()=>(
                        <AntDesign name="home" size={24} color="black" />
                    )
                }}/>
            <Tab.Screen 
                name="Cart" 
                component={ MenuStackCart } 
                options={{
                    tabBarLabel: 'Carrito',
                    tabBarIcon: ()=>(
                        <AntDesign name="shoppingcart" size={24} color="black" />
                    )
                }}/>
            <Tab.Screen 
                name="Orders" 
                component={ MenuStackOrder } 
                options={{
                    tabBarLabel: 'Ordenes',
                    tabBarIcon: ()=>(
                        <AntDesign name="inbox" size={24} color="black" />
                    )
                }}/>
        </Tab.Navigator>
    )
}
//STACK
const MenuStack = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}  initialRouteName='productList'>
               
                <Stack.Screen 
                    name = 'productList'
                    component={ productList }
                />
                <Stack.Screen 
                    name = 'productListItems'
                    component={ ItemList }
                />
                <Stack.Screen 
                    name = 'productDetail'
                    component={ ProductDeatil }
                />
    </Stack.Navigator>
    )
} 
const MenuStackCart = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
               <Stack.Screen 
                    name = 'Cart'
                    component={ Cart }
                />
                <Stack.Screen 
                    name = 'emptyCart'
                    component={ EmptyCart }
                />
                <Stack.Screen 
                    name = 'procesando'
                    component={ Procesar }
                />

    </Stack.Navigator>
    )
} 
const MenuStackOrder = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='OrdersStack'>
               <Stack.Screen 
                    name = 'OrdersStack'
                    component={ Orders }
                />
                <Stack.Screen 
                    name = 'OrderDetail'
                    component={ OrderDetail }
                />
    </Stack.Navigator>
    )
} 
export default MainStack