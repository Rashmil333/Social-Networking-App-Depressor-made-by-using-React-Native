import React from "react";
import {Text,View,Image,StyleSheet,TouchableOpacity} from "react-native";

const Dchatcontact=(props)=>{

	const check=()=>{
		props.functo(props.nama,props.phone,props.emailo)
	}
	return(<>
			<TouchableOpacity onPress={check} >
			<View style={{flexDirection:'row',marginTop:10,marginLeft:8}}>
				<Image source = {{uri:props.image}}
   style ={styles.pic}
   />
   <Text style={styles.name}>{props.nama}</Text>
			</View>
			</TouchableOpacity>
			<View style={styles.hairline}/>
		</>)
}

export default Dchatcontact;
const styles=StyleSheet.create({
	pic:{
		width:50,
		height:50,
		borderRadius:100
	},
	name:{
		fontSize:15,
		marginLeft:10,
		marginTop:10
	},
	hairline:{
		backgroundColor:'black',
		height:1,
		width:'100%',
		marginTop:5,
		marginLeft:3,

	}
})