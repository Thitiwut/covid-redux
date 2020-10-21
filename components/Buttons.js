import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Buttons = (props) => {
    return(
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View style={styles.circle}>
                <Text style={styles.textInfo}>i</Text>
            </View>
            <Text style={[styles.btnName,{color:props.bg}]}>{props.name}</Text>
          
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        borderRadius:15,
        borderColor:"#6a706e",
        borderWidth:0.3,
        marginHorizontal:30,
        paddingHorizontal:20,
        paddingVertical:15,
        flexDirection:"row",
        alignItems:"center",
        marginTop:5,
        marginBottom:5
    },
    circle:{
        alignItems:'center',
        justifyContent:'center',
        width:20,
        height:20,
        borderRadius:10,
        backgroundColor:'#2b3240'
    },
    textInfo:{
        color:"#6a706e",
        fontWeight:"bold"
    },
    btnName:{
        fontWeight:'bold',
        fontSize:12,
        marginHorizontal:20
    }
})
export default Buttons;