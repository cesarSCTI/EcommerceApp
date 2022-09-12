import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    containerHeader:{
        backgroundColor:'#fff',
        marginTop:10,
        marginBottom:10,
        paddingLeft:20,
        paddingTop: 20,
        paddingBottom: 40,
        display:'flex',
        flexDirection: 'row'
    },
    mitad:{
        width: '50%'
    },
    title:{
        fontSize:18,
        fontWeight: 'bold' ,
        color: '#4e60ff'
    },
    items:{
        backgroundColor: '#061737',
        paddingLeft:20,
        paddingTop: 20,
        paddingBottom: 20,
        color: '#fff',
        fontSize:15
    }
})

export default style