import {StyleSheet} from 'react-native'

const styleTotal = StyleSheet.create({
    containerTotal:{
    display:'flex',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
    },
    total:{
        fontWeight:'bold',
        fontSize: 20
    },
    totalIcon:{
        fontWeight:'bold',
        fontSize: 20,
        color:'#4e60ff'
    },
    btnPay:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        height:60,
        borderRadius: 25,
        backgroundColor: '#898ebc'
    },
    btnTitle:{
        color: '#fff',
        fontSize: 15
    }
})

export default styleTotal