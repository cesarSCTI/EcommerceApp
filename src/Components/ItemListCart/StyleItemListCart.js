import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height:80,
        marginTop:5,
        marginLeft: 5
    },
    containerLeft:{
        width: '30%',
        backgroundColor:'#061737',
    },
    containerCenter:{
        width: '50%',
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
        flex:1,
        borderRadius:20,
        margin:10
    },
    title:{
        fontWeight:'bold',
        fontSize: 15
    }
})
export default style