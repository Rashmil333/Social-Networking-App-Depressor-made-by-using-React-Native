import React,{useState,useEffect} from "react";
import {Text,View,TextInput,Style,KeyboardAvoidingView,TouchableOpacity} from "react-native";
import {StyleSheet,Image, ScrollView, StatusBar,SafeAreaView,ImageBackground} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Dchatmessagediv from "./Dchatmessagediv";
import Dchatcontact from "./Dchatcontact";
import { BottomNavigation } from 'react-native-paper';
import Ddepressorsdata from "./Ddepressorsdata";
import Dreliversdata from "./Dreliversdata";
import Dchatopen from "./Dchatopen";
import io from "socket.io-client";
import openSocket from 'socket.io-client';
import { Appbar } from 'react-native-paper';
import Dtestchat from "./Dtestchat";

 let socket;

const CONNECTION_PORT=openSocket('http://10.0.2.2:3002', {transports: ['websocket']});

const Dchat=()=>{
	const Depressors = () =>{

    const [mydepressors,setmydepressors]=useState([]);

     useEffect(async()=>{
    const response = await fetch('http://10.0.2.2:3002/getdata');
    const res = await response.json();
   setmydepressors(res.mydepressor);
  
   
   
   
    
  });
	return(<>
		<ImageBackground 
    source={{uri:'https://userscontent2.emaze.com/images/c7007a1c-b90a-4593-9ab9-b0cf583fecb2/18eca631-4a9a-4b40-ac60-567cc582afc6.jpg'}}
    style={{width: '100%', height:'100%'}} >
    		{Ddepressorsdata.map((cvalue,index)=>{
    			return(<Dchatcontact key={index} image={cvalue.img}  gamma={sendchat} nama={cvalue.name} functo={openchat}/> )
    		})	}

          {mydepressors.map((cvalue,index)=>{
          return(<Dchatcontact key={index} image={cvalue.img} nama={cvalue.name}  gamma={sendchat} functo={openchat}/> )
        })  }
    		
     	</ImageBackground> 
		</>);

}

const Relievers = () => {

    const [myrelievers,setmyrelievers]=useState([]);
     useEffect(async()=>{
    const response = await fetch('http://10.0.2.2:3002/getdata');
    const res = await response.json();
   setmyrelievers(res.myreliever);
    });
	return(<>
		<ImageBackground 
    source={{uri:'https://userscontent2.emaze.com/images/c7007a1c-b90a-4593-9ab9-b0cf583fecb2/18eca631-4a9a-4b40-ac60-567cc582afc6.jpg'}}
    style={{width: '100%', height:'100%'}} >
    			{Dreliversdata.map((cvalue,index)=>{
    			return(<Dchatcontact key={index}  image={cvalue.img} nama={cvalue.name} functo={openchat}  gamma={sendchat}/> )
    		})	}

            {myrelievers.map((cvalue,index)=>{
          return(<Dchatcontact key={index} phone={cvalue.phone_no
} image={cvalue.img} nama={cvalue.name} functo={openchat} gamma={sendchat} emailo={cvalue.email}/> )
        })  }
    		
     	</ImageBackground>
		</>);

}

const createroomcode=(mob1,mob2)=>{
  const mult=(mob1+mob2)*(mob1+mob2+1)
  const div=Math.floor(mult/2);
  const roomcode=div+mob2;
  return(roomcode);
  console.log(roomcode+"#")


}
const openchat=(id,rec_mobile,rec_email)=>{
  console.log(rec_email+"##");
  setemailofopenchat(rec_email);
  console.log(typeof(rec_mobile));
  const jamma=mobile.slice(1,mobile.length-1);
  var t=parseInt(jamma);
  const room_code=createroomcode(t,rec_mobile);
  console.log(room_code)
  setroom(room_code);
	setchat_name(id);
	setchat(!chat);
}
	const [chat_name,setchat_name]=useState();
	 const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Depressors', icon: 'check' },
    { key: 'albums', title: 'Relievers', icon: 'check' },
   
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: Depressors,
    albums: Relievers,
   
  });
	
	 const [text, onChangeText] = React.useState();
  const [number, onChangeNumber] = React.useState(null);
  const [chat,setchat]=useState(false);
  const [allitems,setallitems]=useState([]);
  const [all,setall]=useState([]);
  const [mobile,setmobile]=useState();
  const [room,setroom]=useState();
  const [openchatemail,setemailofopenchat]=useState();
  const dama=()=>{
  	alert("hello")
  }

  const changetochat=()=>{
	setchat(!chat);  	
  }
 

  
  const connectToRoom = () => {
    socket.emit("join_room", 100);
  };

  const sendchat=async(id)=>{
    console.log(id);
   
    setall(array)
  
    await socket.emit("chat message",{room:100,content:id});

}

useEffect(async()=>{
   const response = await fetch('http://10.0.2.2:3002/getdata');
    const res = await response.json();
    setmobile(JSON.stringify(res.profile[0].mobile_no));
   
})

  
	return(<>

		<ImageBackground 
    source={{uri:'https://userscontent2.emaze.com/images/c7007a1c-b90a-4593-9ab9-b0cf583fecb2/18eca631-4a9a-4b40-ac60-567cc582afc6.jpg'}}
    style={{width: '100%', height:'100%'}} >
		

    			{chat==true?<>
            <View style={{flexDirection:'row',backgroundColor:'seagreen'}}>
            <TouchableOpacity onPress={changetochat}><Text style={styles.back}>Back</Text></TouchableOpacity>
               <Text style={{marginLeft:20,color:'white'}}>sending message to {chat_name}{mobile}</Text>

            </View>
           
            <Dtestchat gamma={chat_name} code={room} mymobile={mobile} member_email={openchatemail} />

    				
    
    				</>:<>
    				 <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
       barStyle={{ backgroundColor: '#081F1C' }}
    />		
    			
    				

    				</>

    		


    		}
    			
		 		
     	</ImageBackground>
		</>)
}

export default Dchat;
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

	},
  back:{
    
    backgroundColor:'pink',
    borderRadius:100,
    backgroundColor:'skyblue',
    width:50,
    height:20,
    textAlign:'center'


  }
})