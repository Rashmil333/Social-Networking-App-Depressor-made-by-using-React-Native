import React from "react";
import {Text,View,StyleSheet,Image} from "react-native";



const Dselfhealstart=()=>{
	return(<>
		<View style={{marginTop:'20%'}}>
		<Text style={styles.text}>hello from the Self healing side side.</Text>
			<Text style={styles.text}>You can now access the kits by toggling the book icon.</Text>
		<Text style={styles.text}>We hope you enjoy it.</Text>
		
		<Image source = {{uri:'http://clipart-library.com/images_k/heart-clipart-transparent/heart-clipart-transparent-8.png'}}
   style = {{ width: 500, height:500 ,marginTop:15}}
   />
		</View>
		</>)
}

export default Dselfhealstart;

const styles=StyleSheet.create({
	text:{
		color:'white',
		fontFamily:'IndieFlower',
		textAlign:'center',
		fontSize:35,

	},
	heart:{
		color:'red',


	}
})