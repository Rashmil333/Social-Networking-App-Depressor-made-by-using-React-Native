import React,{useState,useEffect} from "react";
import {Text,View,StyleSheet,Image} from "react-native";
import {Button} from "react-native-paper";

const Dprofilemembersdiv=(props)=>{

	const [allmem,setallmem]=useState();



const addtomyfriends=async()=>{
	alert("He is your family member now.");
     let response = await fetch('http://10.0.2.2:3002/updaterelievers', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email:props.email,img:props.image,name:props.name,phone:props.phone,type:props.category
  })
});
    
    

  }



	return(<>
		 <View style={{flexDirection:'row',marginTop:15}}>
   <Image source = {{uri:props.image}}
   style = {styles.members_photo}
   />
   	<View style={{flexDirection:'column',width:200}}>
   		<Text style={styles.h1}>{props.email}</Text>
   		<Text style={styles.h1}>{props.phone}</Text>
   	</View>
   	<Button onPress={addtomyfriends} style={{backgroundColor:'pink',height:40,marginLeft:10,width:150}}><Text style={{color:'white'}}>{props.category}</Text></Button>
    

   </View>
   
		</>)
}

export default Dprofilemembersdiv;
const styles=StyleSheet.create({
	photo:{
		width:200,
		height:200,
		borderRadius:100,
		marginLeft:100,
		marginTop:10

	},
	h1:{
		fontFamily:'IndieFlower',
		color:'white',
		fontSize:20,
		marginLeft:20

	},
	members_photo:{
		width:60,
		height:60,
		borderRadius:100,
		
	}
})
