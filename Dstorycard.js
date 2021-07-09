import React,{useState} from "react";
import {Text,View} from "react-native";
import {StyleSheet,ScrollView, StatusBar,SafeAreaView,Image,TouchableOpacity,ImageBackground} from "react-native";
import { Avatar,  Card, Title, Paragraph,Button } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Dstorycard=(props)=>{

	const check=()=>{
    console.log(props.imgd);
    console.log(props.imgu)
  }
  const [lovepoints,setlovepoints]=useState(0);
	return(<>
    
			<View  style={{marginTop:15}}>
         
            <Card style={styles.storycard}>
             <Card.Title  subtitle={props.catogory} />
            <ImageBackground source={{uri:'https://c4.wallpaperflare.com/wallpaper/713/37/65/coldplay-coldplay-ghost-stories-simple-background-wallpaper-preview.jpg'}} style={{width: '100%', height:300}} >
              <View style={{flexDirection:'row',marginTop:5}}>
              <TouchableOpacity onPress={check}>
                  <Image source = {{uri:props.imgd}}
   style = {styles.photo}
   /></TouchableOpacity>

    <TouchableOpacity onPress={check}>
                  <Image source = {{uri:props.imgu}}
   style = {styles.photo2}
   /></TouchableOpacity>
              </View>
              <Text style={styles.storytext}> {props.stoory}</Text>
              <Text></Text>
              <Text style={styles.storytext}> ~~~~{props.email}~~~~~</Text>
             <View style={{flexDirection:'row'}}>
                  <Button onPress={()=>setlovepoints(lovepoints+1)} style={styles.lovebutton}><FontAwesome5 style={styles.heart} name={'heart'} size={20}/> </Button>
                  <Text style={styles.points}>{lovepoints}</Text>
             </View>
         
             </ImageBackground>
            </Card>


          </View>
		</>)
}

export default Dstorycard;
const styles = StyleSheet.create({
 container:{

 },
 photo:{
  marginLeft:'5%',
  width:60,
  height:60,
  borderRadius:100
 },
 photo2:{
    width:60,
  height:60,
  borderRadius:100,
  marginLeft:'60%'
 },
 storytext:{
  marginLeft:10,
  textAlign:'justify',
  fontFamily:'IndieFlower',
  marginRight:10,
  fontSize:20,
  color:'white'
 },
 lovebutton:{
  backgroundColor:'pink',
  width:20,
  borderRadius:10,
  marginLeft:10,
  marginTop:10
 }
 ,heart:{
  color:'#e32160'
 
 },
 points:{
  marginLeft:30,
  marginTop:20,
  fontWeight:'bold',
  color:'white'
 },
 storycard:{
  marginLeft:5,
  marginRight:8
 }
});
