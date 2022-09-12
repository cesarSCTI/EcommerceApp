import {StyleSheet} from 'react-native'
export const style = StyleSheet.create({
    containerFull:{
        backgroundColor:'#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center',
        marginTop:50,
        marginBottom:30
      },
    imgPrincipal:{
        height:250,
        width:200,
    },
    containerTitle:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center',
        padding:20,
        marginBottom:10
    },
    title:{
        color:'#000',
        fontSize: 20,
    },
    price:{
        fontSize: 15,
    },
    features:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginBottom:30
    },
    featuresText:{
        fontSize:12,
        display: 'flex',
        alignItems: 'center'
    },
    description:{
        fontSize:14,
        paddingRight:20,
        paddingLeft: 20,
        marginBottom:30
    },
    containerBuy:{
        flexDirection:'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'flex-end',
        marginRight:20,
        marginBottom: 20
    },
    btnBuy:{
        backgroundColor:'#4e60ff',
        borderColor: '#898EBC',
        borderWidth: 1,
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:50,
        paddingRight:50,
        textAlign:'center',
        borderRadius:25,
    }
})
