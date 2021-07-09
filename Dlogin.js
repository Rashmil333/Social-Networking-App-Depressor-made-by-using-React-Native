import React,{useState} from "react";
import {Text,View} from "react-native";
import { TextInput,Button } from 'react-native-paper';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, } from 'react-native';

import Dhome from "./Dhome";

const Dlogin=()=>{

  const submit=async()=>{
     let response = await fetch('http://10.0.2.2:3002/login', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email,pass:password
  })
});
    let res = await response;
    console.log(res.status);
    if(res.status==200){
      alert("Login is successful");
      setstate(3);
     
    }
    else{
      alert("invalid credentials")
    }
    

  }

  const signup=async()=>{
    // alert(username+email+phone+password+confirm)

     let response = await fetch('http://10.0.2.2:3002/register', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    pass:password,conpass:confirm,name:username,phoneno:phone,email:email,
  })
});
    let res = await response;
    console.log(res.status);
    if(res.status==200){
      alert("profile is created successfully!!!");
      setstate(1);
     
    }
    else{
      alert("invalid credentials")
    }
    

  }

	 const [email, setemail] = React.useState('');
	  const [password, setpassword] = React.useState('');
	  const [state,setstate]=useState(1);
	  const[username,setusername]=useState();
	  const [confirm,setconfirm]=useState();
    const [phone,setphone]=useState();

	  const changediv=(id)=>{
      setstate(id)
	  	

	  }
     const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
   const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(20).then(() => setRefreshing(false));
  }, []);

	return(<>

		{state==1?<>
			<View style={{marginTop:'40%',marginLeft:10,marginRight:10}}>
			  
			  <TextInput
      label="Email"
      value={email}
      onChangeText={email => setemail(email)}
    />
    <Text></Text>
     <TextInput
      label="password"
      value={password}
      onChangeText={password => setpassword(password)}
    />
    <Button onPress={submit} style={{backgroundColor:'dodgerblue',marginTop:10}}><Text style={{color:'white'}}>Login</Text></Button>
		<Button onPress={()=>changediv(2)}><Text style={{color:'blue'}}>Don't have an account create it?</Text></Button>
		</View>


			</>:
      state==2?<>
				<View style={{marginTop:'40%',marginLeft:10,marginRight:10}}>
			   <TextInput
      label="Username"
      value={username}
      onChangeText={username => setusername(username)}
    />
    <Text></Text>
			  <TextInput
      label="Email"
      value={email}
      onChangeText={email => setemail(email)}
    />
<Text></Text>
 
        <TextInput
      label="Phone Number"
      value={phone}
      onChangeText={phone => setphone(phone)}
    />
			 <Text></Text>
     <TextInput
      label="password"
      value={password}
      onChangeText={password => setpassword(password)}
    /><Text></Text>
    <TextInput
      label="confirm password"
      value={confirm}
      onChangeText={confirm => setconfirm(confirm)}
    />
    <Button onPress={signup} style={{backgroundColor:'dodgerblue',marginTop:10}}><Text style={{color:'white'}}>Create account</Text></Button>
		<Button onPress={()=>changediv(1)}><Text style={{color:'blue'}}>Already have an account login</Text></Button>
		</View>
			</>:null}
		
		</>)
}

export default Dlogin;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
