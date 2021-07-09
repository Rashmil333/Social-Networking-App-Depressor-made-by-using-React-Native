import React,{useState,useEffect} from "react";
import{Text,View} from "react-native";
import {TextInput,Style,KeyboardAvoidingView} from "react-native";
import {StyleSheet,Image, ScrollView, StatusBar,SafeAreaView,ImageBackground,TouchableOpacity} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Dchatmessagediv from "./Dchatmessagediv";
import { Appbar } from 'react-native-paper';
import io from "socket.io-client";
import openSocket from 'socket.io-client';

 let socket;

const CONNECTION_PORT=openSocket('http://localhost:3002', {transports: ['websocket']});



const Dchatopen=(props)=>{

	 const [text, onChangeText] = React.useState();
  const [number, onChangeNumber] = React.useState(null);
  const [key_,setkey]=useState(0);
  const [chat,setchat]=useState(true);
  const [allitems,setallitems]=useState([{
  	key:'1001',
  	chat:'',
  }]);
  const dama=()=>{
  	alert("hello")
  }

  const changetochat=()=>{
	setchat(true);  	
  }
 

  const goback=()=>{
  	props.callchat('hello');
  }

  const send=()=>{
    props.beta(text);
  }
 
const [all,setall]=useState([]);
   useEffect(() => {
    socket.on("chat message", (data) => {
      console.log(data)
    setall([...all,data]);
  
      
    });
  });

  	return(<>
  		
		    <Appbar.Header style={{backgroundColor:'green'}}>
		    <TouchableOpacity onPress={goback}>
		  <Image source = {{uri:'https://images.all-free-download.com/images/graphicthumb/back_button_37286.jpg'}}
   style ={{width:30,height:30,borderRadius:100}}
   /></TouchableOpacity>
       <Appbar.Content title={props.name} subtitle='last seen 2:00 pm' />
    </Appbar.Header>


		

				
    	<View style={{height:'89%'}}>
						<SafeAreaView>
						<ScrollView>
				{all.map((cvalue)=>{
					return(<Dchatmessagediv  message={cvalue}/>)
				})}

					</ScrollView>
				</SafeAreaView>

				</View>
				
				
			
				

		  <TextInput
         style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button style={styles.tools}><FontAwesome5 style={{color:'grey'}}  name={'rocket'} size={20}/></Button>
      {text==""?null:
  	 <Button onPress={send} style={styles.butto}><FontAwesome5  name={'check'} size={20}/></Button>}

		</>)
}

export default Dchatopen;
const styles=StyleSheet.create({
	input:{
		position:'absolute',
		bottom:0,
		backgroundColor:'skyblue',
		width:'98%',
		marginLeft:4,
		borderRadius:100,
		paddingLeft:45,



	},
	butto:{
		position:'absolute',
		bottom:0,
		marginLeft:'80%',
		width:20,
		marginBottom:5,
		borderRadius:200
	},
	tools:{
		position:'absolute',
		bottom:0,
		width:20,
		marginBottom:5,
		borderRadius:200

	}
})