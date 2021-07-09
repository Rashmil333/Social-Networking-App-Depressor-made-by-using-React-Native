import React,{useState,useEffect} from "react";
import {Text,View,ImageBackground,StyleSheet} from "react-native";
import {Button} from "react-native-paper"
import Dlogin from "./Dlogin";

const Dlogout=()=>{

const gamma=async(props)=>{
	const response = await fetch('http://10.0.2.2:3002/logout');
  const res = await response;
    console.log(res.status);
    if(res.status==200){
      console.log("Logout Successfully!");
      alert("Logout successfully!")
     
      
    }
    else{
    	alert("please login");


    }
  


}

const callback=()=>{
  props.beta();
}
	
	return(<>

    <ImageBackground 
    source={{uri:'https://wallpaperaccess.com/full/148417.jpg'}}
    style={{width: '100%', height:'100%'}} >
    <Button style={styles.button} onPress={gamma}><Text style={{color:'white'}}>Logout</Text></Button>
    <Text style={{color:'white',marginLeft:140,fontFamily:'IndieFlower',marginTop:30}}>Hope you will Visit again.</Text>
    </ImageBackground>
		</>)
}

export default Dlogout;
const styles=StyleSheet.create({
  button:{
    marginTop:500,
    backgroundColor:'black',
    width:200,
    borderRadius:100,
    marginLeft:100,


  }
})