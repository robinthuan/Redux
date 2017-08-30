import{
 StyleSheet   

} from 'react-native'

export default StyleSheet.create(
{
    containerViewOne:{
     backgroundColor:'grey',
     justifyContent:'center'
    },
    containerViewTwo:{
      backgroundColor:'yellow',
      marginTop:20,
      height:100,
      flexDirection:'row',
      },
    button:{
       flex:1,
        margin:20,
       backgroundColor:'black',
       padding:5,
       },
    textButton:{
     textAlign:'center',
     color:'white',
     fontSize:40,
    },
    title:{
       textAlign:'center',
        marginTop:20,
        fontSize:30,
       justifyContent:'center',
       color:'blue'

    },
    number:{
        textAlign:'center',
        marginTop:20,
        fontSize :40,
        justifyContent:'center',
        alignItems:'center',
        color:'red'
    }

}
);