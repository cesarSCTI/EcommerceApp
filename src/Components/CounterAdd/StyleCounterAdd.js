import React from 'react'
import {StyleSheet} from 'react-native'
const StyleCounterAdd = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:30
    },
    btnAction:{
        backgroundColor: '#898ebc',
        border: 1,
        width:40,
        height: 40,
        borderRadius:20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    InputAdd:{
        width:40,
        height:40,
        marginLeft:10,
        marginRight:10,
        textAlign:'center',
        fontSize:20
    },
    center:{
        textAlign:'center',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        color: '#fff'
    }
})

export default StyleCounterAdd