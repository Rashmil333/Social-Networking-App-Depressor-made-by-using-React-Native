import React,{useState} from "react";
import {Text,View,StyleSheet,Image,SafeAreaView,ScrollVew} from "react-native";
import { TextInput,Button } from 'react-native-paper';
import { Alert, Modal, Pressable} from "react-native";


const Dstorycreatechoosediv=(props)=>{

	const callback=()=>{
		props.func(props.image)
	}
	return(<>

       		<View style={{flexDirection:'row',marginTop:15}}>
       				  <Image source = {{uri:props.image}}
   style = {styles.photo}
   />
  
   <Button onPress={callback} style={styles.butto}>Choose</Button>


       		</View>
           <Text style={styles.reliever_name}>{props.email}</Text>
           <Text style={styles.reliever_name}>{props.name}</Text>
           <View style={styles.hairline}></View>
		</>)
}

export default Dstorycreatechoosediv;
const styles=StyleSheet.create({
	writestory:{
		  borderColor:'skyblue',
    borderWidth: 1,
    padding: 5,
    margin:10
	},
	input:{
		margin:10,

	},
	choose:{
		width:300,
		backgroundColor:'#82EEFD',
		borderRadius:10,
		marginLeft:10
	},
	photo:{
		width:30,
		height:30,
		borderRadius:100,
		marginLeft:10,
		marginTop:3
	},
	centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#281E5D",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  reliever_name:{
  	color:'white',
  	marginLeft:10,
  	marginTop:6,

  },
  butto:{
  	width:100,
  	backgroundColor:'#82EEFD',
  	marginLeft:100
  },
  hairline:{
    backgroundColor:'white',
    height:2
  }
	})
