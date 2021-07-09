import React,{useState,useEffect}from "react";
import {Text,View,StyleSheet,ScrollView, StatusBar,SafeAreaView,Image,TouchableOpacity,ImageBackground} from "react-native";
import { Avatar,  Card, Title, Paragraph,Button } from 'react-native-paper';
import { FAB, Portal, Provider } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Dstorycard from "./Dstorycard";
import Dstorycreate from "./Dstorycreate";
const Dstory=()=>{
	const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  const settekka=()=>{
  	alert("j;ljoj")
  }
  const check=()=>{
    alert("fdgsdgfd")
  }
const [sstate,setsstate]=useState(0);
const [key_,setkey]=useState(0);
const [allitems,setallitems]=useState([{
  key:'e',
  imgr:'https://i.pinimg.com/originals/93/8d/53/938d536057ba50567ff2c9964386b473.jpg',
  story:'hello guys',
  category:'depression/stress'
}]);

const additem=(phata,stary,hashtag)=>{
  console.log(phata);
  console.log(stary);
  setkey(key_+1);
  console.log(key_)
  setallitems((olditem)=>{
    return([...olditem,{imgr:phata,story:stary,category:hashtag,key:key_}])
  })
};

const [allstories,setallstories]=useState([]);
 useEffect(async()=>{
     let response = await fetch('http://10.0.2.2:3002/getalldata', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email:"allusers@gmail.com"
  })
});
    let res = await response.json();
    console.log("The depressors are"+JSON.stringify(res.depressors));
    setallstories(res.stories);

   
   
    
  },[]);
 const [mystories,setmystories]=useState([]);

   useEffect(async()=>{
    const response = await fetch('http://10.0.2.2:3002/getdata');
    const res = await response.json();
   setmystories(res.stories);
   
   
   
    
  });

	return(<>
    <SafeAreaView >
      <ScrollView >
       <ImageBackground source={{uri:'https://images.wallpapersden.com/image/download/full-moon-over-lakeside-cabin_bGVra2eUmZqaraWkpJRmZW1lrWZuZ2U.jpg'}} style={{width: '100%', height:'100%'}} >
           {sstate==0?
            <>
            <Dstorycard key='9' imgu='http://pm1.narvii.com/6957/43b1ae939373ceabc9e283044165cd0310494521r1-1200-1600v2_uhq.jpg' stoory="hello my name is dhnaush and i was suffering from depression but after absorbing the support from the
              relievrs here i'm feeling like shining.Thanks to my reliever Emily"/>
            {allitems.map((cvalue,index)=>{
              return(<Dstorycard key={index} imgu={cvalue.imgr} stoory={cvalue.story} catogory={cvalue.category}/>)
            })} 
            {allstories.map((cvalue,index)=>{
              return(<Dstorycard key={index} email={cvalue.email} imgd={cvalue.img_depressor}  imgu={cvalue.img_reliever} stoory={cvalue.story} catogory={cvalue.category}/>)
            })} 

            </>:sstate==1?<>
              <Dstorycreate adda={additem}/>
            </>:sstate==2?<>
              {mystories.map((cvalue,index)=>{
              return(<Dstorycard key={index} email={cvalue.email} imgd={cvalue.img_depressor}  imgu={cvalue.img_reliever} stoory={cvalue.story} catogory={cvalue.category}/>)
            })} 
            </>:null}
             

        
         
          </ImageBackground>
      </ScrollView>
    </SafeAreaView>
   
   


			  <Provider>
      <Portal>
        <FAB.Group
    	
          open={open}
          icon={open ? 'minus' : 'plus'}
          actions={[
           
            {
              icon: 'star',
              label: 'My stories',
               onPress: () => setsstate(2),
              color:'blue'
            },
            {
              icon: 'pencil',
              label: 'Create',
              onPress: () => setsstate(1),
              color:'red'
            },
             {
              icon: 'pencil',
              label: 'back to stories',
              onPress: () => setsstate(0),
              color:'red'
            }
          
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
		</>)
}

export default Dstory;
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
  marginLeft:10
 }
 ,heart:{
  color:'#e32160'
 
 },
 points:{
  marginLeft:30,
  marginTop:10,
  fontWeight:'bold',
  color:'white'
 },
 storycard:{
  marginLeft:2,
  marginRight:10
 }
});
