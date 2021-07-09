import React from "react";
import {Text,View,StyleSheet} from "react-native";
import {Button } from "react-native-paper";

const Dchatmessagediv=(props)=>{
	return(<>
		{props.sender==props.myid?<>

		<View style={styles.view}>
    <Text style={{fontSize: 11, lineHeight: 11,color:'white'}}>You</Text>
     <Text style={{fontSize: 15, lineHeight: 30,color:'white'}}>{props.message}</Text>
</View>


		</>:

		<View style={styles.view2}>
    <Text style={{fontSize: 11, lineHeight: 11,color:'black'}}>{props.sender}</Text>
     <Text style={{fontSize: 15, lineHeight: 30,color:'black'}}>{props.message}</Text>
</View>}



	
		</>)
}

export default Dchatmessagediv;
const styles=StyleSheet.create({
	view:{
		flexDirection: 'row',
		alignSelf: 'flex-end',
		backgroundColor:'dodgerblue',
		marginTop:10,
		borderRadius:10,
		padding:5,
		marginRight:4,
		marginTop:10



	},
	view2:{
		flexDirection: 'row',
		alignSelf: 'flex-start',
		backgroundColor:'#E7E7E7',
		marginTop:10,
		borderRadius:10,
		padding:5,
		marginRight:4,
		color:'black'
		
		



	}
})