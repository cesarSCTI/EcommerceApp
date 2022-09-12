import React from 'react'
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import { setCartReducer } from '../../redux/reducers/cartSlice';
import {style} from './ProductDetailStyle'
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const ProductDeatil = ({navigation, route})=>{
    const {id, Nombre, Precio, Descripcion, Quality, Comments, Stock} = route.params
    const [item, setItem] = React.useState({qty:1, ...route.params})
    const dispatch = useDispatch();

    const save = () => {
        dispatch(setCartReducer(item))
        alert("Producto agregado correctamente")
        navigation.goBack()
    }

    return(
        <ScrollView style={style.containerFull}>
            <View style={style.container}>
                <Image 
                    style={style.imgPrincipal}
                    source={{uri:'https://cf.shopee.com.mx/file/e2b81eddd5a6aa3b619f3c9da930dda5'}} 
                />
            </View>
            <View style={style.containerTitle}>
                <Text style={style.title}>{Nombre} {id}</Text>
                <Text style={style.price}>{Precio}</Text>
            </View>
            <View style={style.features}>
                <View style={style.featuresText}>
                    <AntDesign name="staro" size={24} color="#4e60ff" />
                   <Text>{Quality}</Text> 
                </View>
                <View style={style.featuresText}>
                    <FontAwesome name="comment-o" size={24} color="#4e60ff" />
                    <Text>{Comments}</Text>
                </View>
                <View style={style.featuresText}>
                    <MaterialIcons name="inventory" size={24} color="#4e60ff" />
                    <Text>{Stock}</Text>
                </View>
            </View>
            <View style={style.description}>
                <Text>{Descripcion}</Text>
            </View>
            <View style={style.containerBuy}>
                <TouchableOpacity 
                style={style.btnBuy} 
                onPress={save}
                >
                    <Text style={{color:"#fff"}}>Agregar</Text>
                </TouchableOpacity>
            </View>
            
        </ScrollView>
    );
}

export default ProductDeatil

