import React,{useState,useEffect} from "react";
import {Text,View,StyleSheet,TouchableOpacity,Alert} from "react-native";
import {Button } from "react-native-paper";

const Dchatmessagediv=(props)=>{
	const [sendername,setsendername]=useState();
	const [mess,setmess]=useState();
	const [del,setdel]=useState(false);

	const deletechat=async()=>{
		let response=await fetch("http://10.0.2.2:3002/deletechats",{
			method:'POST',
			headers:{
				 Accept: 'application/json',
    			'Content-Type': 'application/json'
			},
			body:JSON.stringify({
				chat:props.message,type:props.type
			})
		})

	}

	const createTwoButtonAlert = () =>
    Alert.alert(
      "Delete this message",
      "Message cannot be restore once deleted",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => deletechat() }
      ]
    );

	useEffect(()=>{
		var n = props.message.indexOf(":");
		if(n!=-1) {
			setmess(props.message.slice(n+1,props.message.length));
			setsendername(props.message.slice(0,n));

		}
	})
	return(<>
		{props.type=='send'?<>
		<TouchableOpacity onLongPress={()=>createTwoButtonAlert()}>

		
		<View style={styles.view}>

    <Text style={{fontSize: 11, lineHeight: 11,color:'white'}}>You</Text>
     <Text style={{fontSize: 15, lineHeight: 30,color:'white'}}>{props.message}</Text>
</View>
</TouchableOpacity>


		</>:<>


		<View style={styles.view2}>
    <Text style={{fontSize: 11, lineHeight: 11,color:'black'}}>{sendername}</Text>
     <Text style={{fontSize: 15, lineHeight: 30,color:'black'}}>{mess}</Text>
</View></>}



	
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