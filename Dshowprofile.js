import React from "react";
import {Text,View,Image,StyleSheet,ScrollView, StatusBar,SafeAreaView} from "react-native";
import {Button} from "react-native-paper";

 
const Dshowprofile=(props)=>{

	const jamma=()=>{
		var l=props.image.length-1
		console.log(props.image.slice(1, (props.image.length-1)));
	}
	return(<>
		<SafeAreaView>
		<ScrollView>
		   <Image source = {{uri:props.image.slice(1, (props.image.length-1))}}
   style = {styles.photo}
   />
   <Text style={styles.h1}>{props.name}</Text>
   <Text style={styles.h1}>{props.age}</Text>
   <Text style={styles.h1}>{props.email}</Text>
  <Text style={styles.h1}>{props.category}</Text>
   <Text style={styles.h1}>{props.phone}</Text>
   <Text style={styles.h1}>{props.doing}</Text>
   <Text style={styles.h1}>{props.hobbie}</Text>
   <Text style={styles.h1}>{props.detail}</Text>
   <Button onPress={jamma}>jamma</Button>
 
   </ScrollView>
   </SafeAreaView>


		</>)
}

export default Dshowprofile;
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
