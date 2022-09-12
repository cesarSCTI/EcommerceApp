import {StyleSheet} from 'react-native'

const StyleItemList = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height:100,
        backgroundColor:'#fff'
    },
    containerLeft:{
        width: '30%',
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor:'#061737',
    },
    imageProduct:{
        height:60,
        width: 60,
        textAlign:'center'
    },
    containerRight:{
        width: '40%',
        paddingLeft: 20,
        paddingTop: 20
    },
    containerPrice:{
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
      fontWeight: 'bold',
      fontSize: 15
    },
    price:{
        fontSize:17,
        fontWeight: 'bold',
    }

})

export default StyleItemList