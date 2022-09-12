import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height:80,
        marginTop:10,
        marginLeft: 5
    },
    containerCenter:{
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 20,
        paddingLeft:20,
        backgroundColor:'#fff'
    },
    containerRight:{
        backgroundColor:'#4e60ff',
        justifyContent: 'center',
        alignItems: 'center',
        width:'20%'
    },
    title:{
        fontWeight:'bold',
        fontSize: 15
    }
})
export default style