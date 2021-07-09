import React,{useState,useEffect} from "react";
import {StyleSheet,Image, ScrollView, StatusBar,Text,View,SafeAreaView,ImageBackground} from "react-native";
import {Button,Divider} from "react-native-paper";
import Dcontributeprobdiv from "./Dcontributeprobdiv";
import Dcontributiondata from "./Dcontributiondata";
import { TextInput } from 'react-native-paper';

const Dcontribution=()=>{
	const [toggle,settoggle]=useState(0);
	const [text, setText] = React.useState('');
	const [email,setemail]=useState('');
	const [phone,setphone]=useState('');
	const [name,setname]=useState('');
	const [address,setaddress]=useState('');
	const [restaurent,setrestaurent]=useState('');
	const [bank,setbank]=useState('');
	const [img,setimg]=useState('');
  const [all,setall]=useState([]);
  const email_sender="allusers@gmail.com";
   const senddata=async()=>{
    settoggle(2);
     alert("We receive your problem. Wait for someone to help you...");
     let response = await fetch('http://10.0.2.2:3002/updateproblem', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email_sender,email:email,name:name,phoneno:phone,img:img,bank_acc:bank,problem:text,address:address,
    nearest_res:restaurent
  })
});
    let res = await response;
    console.log(res.status);
  
    

  }

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
    setall((res.user_problems));
   

   
   
    
  });

   const cleardata=()=>{
    setText("");
  setemail("");
  setphone("");
  setname("");
  setaddress("");
  setrestaurent("");
  setbank("");
  setimg("");
   }
	return(<>
	<SafeAreaView >
    	<ScrollView >
    		<View style={styles.container}>
    			
    			<View style={{flexDirection:'row'}}>
    				{toggle==0?<>
    					<Button onPress={()=>settoggle(0)} style={styles.contribute}><Text style={{color:'white'}}>Contribute</Text></Button>
    				<Button  onPress={()=>settoggle(1)} style={styles.takehelp}><Text style={{color:'white'}}>Take help</Text></Button>
    				</>:<>
    				<Button onPress={()=>settoggle(!toggle)} style={styles.takehelp}><Text style={{color:'white'}}>Contribute</Text></Button>
    				<Button  onPress={()=>settoggle(!toggle)} style={styles.contribute}><Text style={{color:'white'}}>Take help</Text></Button>
    				</>}
    				
    			</View><Text></Text>
    			{toggle==0?<>
    					{Dcontributiondata.map((cvalue,index)=>{
   					return(<Dcontributeprobdiv key={index} image={cvalue.img} names={cvalue.name} problem={cvalue.text}/>)
   				})}
             {all.map((cvalue,index)=>{
              return(<Dcontributeprobdiv key={index} bank={cvalue.bank_acc} phone={cvalue.phone} email={cvalue.email} n_res={cvalue.nearest_restaurent} image={cvalue.img} names={cvalue.name} problem={cvalue.problem}/>)
             })}
         
    				</>:
            toggle==1?
    				<>
            <Button onPress={cleardata} style={styles.send}><Text style={styles.white}>Reset</Text></Button>
    			
    					 <TextInput
    					 	style={styles.input}
      						label="Write your Problem"
      						value={text}
      						onChangeText={text => setText(text)}
    						/>
    					 <TextInput
    					 	style={styles.input}
      						label="Give the url of your image/It can be random"
      						value={img}
      						onChangeText={img => setimg(img)}
    						/>
    					 <TextInput
    					 	style={styles.input}
      						label="Bank Account No"
      						value={bank}
      						onChangeText={bank => setbank(bank)}
    						/>
    					 <TextInput
    					 	style={styles.input}
      						label="Address of the nearest restaurent"
      						value={restaurent}
      						onChangeText={restaurent => setrestaurent(restaurent)}
    						/>
    					 <TextInput
    					 	style={styles.input}
      						label="Your living addressa"
      						value={address}
      						onChangeText={address => setaddress(address)}
    						/>
    					 <TextInput
    					 	style={styles.input}
      						label="Name"
      						value={name}
      						onChangeText={name => setname(name)}
    						/>
    					 <TextInput
    					 	style={styles.input}
      						label="Phone no"
      						value={phone}
      						onChangeText={phone => setphone(phone)}
    						/>
    					 <TextInput
    					 	style={styles.input}
      						label="Email"
      						value={email}
      						onChangeText={email => setemail(email)}
    						/>

    					<Button onPress={senddata} style={styles.send}><Text style={styles.white}>Send</Text></Button>
                
    				</>:
            <><Text style={{color:'white'}}>Ask for help again</Text>
            <Button onPress={()=>settoggle(1)} style={{backgroundColor:'orange'}} ><Text style={{color:'white'}}> Ask</Text></Button>
            <View style={{height:1000}}></View></>}
   			

    		</View>

    	</ScrollView>
    </SafeAreaView>
		</>)
}

export default Dcontribution;

const styles=StyleSheet.create({
	container:{
		backgroundColor:'#171717'
	},
	h1:{
		color:'#e32160',
		fontSize:20,
		textAlign:'center'
	},
	white:{
		color:'white'
	},
	contribute:{
		backgroundColor:'#FF859E',
		width:'50%'
	},
	takehelp:{
		width:'50%'

	},
	photo:{
		width:40,
		height:40,
		borderRadius:200
	},
	name:{
		color:'white',
		marginTop:5,
		marginLeft:5
	},
	hairline: {
  backgroundColor: 'white',
  height: 1,
  width: '100%'
},
input:{
	margin:10
},
send:{
	backgroundColor:'#FFB7CB',
	width:200,
	marginLeft:20
}
	
})