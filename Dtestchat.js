import React, { Component,useState,useEffect } from "react";
import { TextInput, StyleSheet, Text, View,SafeAreaView,ScrollView,KeyboardAvoidingView,TouchableOpacity } from "react-native";
import io from "socket.io-client";
import {Button} from "react-native-paper";
import Dchatmessagediv from "./Dchatmessagediv";


import {Alert} from "react-native";




export default class Dtestchat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false,
      chatMessage: "",
      chatMessages: [],
      chatMessagesdb:[]
    };
  }

  componentDidMount() {
    fetch('http://10.0.2.2:3002/getdata')
      .then(response => response.json())
      .then(data => this.setState({ chatMessagesdb: data.mychats }));
    this.socket = io("http://10.0.2.2:3002");
    this.socket.emit("join_room", this.props.code);
    this.socket.on("chat message", data => {
      this.setState({ chatMessages: [...this.state.chatMessages, data ] });
    });



  }


  async submitChatMessage() {
     if(this.state.chatMessage==""){
      const donone=0;
    }
    else{
      this.socket.emit("chat message",  {room:this.props.code,content:this.state.chatMessage,sender:this.props.mymobile});
    this.setState({ chatMessage: "" });
    }
     let response =  await fetch('http://10.0.2.2:3002/updatechats', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    member:this.props.member_email,chat:this.state.chatMessage
    
  })
});
  
  
   
    
  }
   joinroom() {
    this.socket.emit("join_room", this.props.code);
    this.setState({ chatMessage: "" });
  }
   open() {
    this.setState({open: !(this.state.open)});
  }
  clear(){
    this.setState({chatMessagesdb:[]});
    let response = fetch('http://10.0.2.2:3002/deletechatsall', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
   chat:'clearchat'
    
  })
});
  }
   MySubComponent = (props) => {
    const [sendername,setsendername]=useState();
  const [mess,setmess]=useState();
  const [del,setdel]=useState(false);

  const deletechat=async()=>{
    let response=await fetch("http://10.0.2.2:3002/deletechats",{
      method:'POST',
      headers:{
         Accept: 'application/json',
          'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        chat:props.message,type:props.type
      })
    })

  }

   const deletechatsingle=async()=>{
    this.filter(props.id);
     let response=await fetch("http://10.0.2.2:3002/deletechats",{
      method:'POST',
      headers:{
         Accept: 'application/json',
          'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        chat:props.message,type:props.type,chatid:props.id
      })
    })
    
  }

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Delete this message",
      "Message cannot be restore once deleted",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => deletechatsingle()}
      ]
    );



  useEffect(()=>{
    var n = props.message.indexOf(":");
    if(n!=-1) {
      setmess(props.message.slice(n+1,props.message.length));
      setsendername(props.message.slice(0,n));

    }
  })
  return(<>
    {props.type=='send'?<>
    <TouchableOpacity   onLongPress={()=>createTwoButtonAlert()}>

    
    <View style={styles.view}>

    <Text style={{fontSize: 11, lineHeight: 11,color:'white'}}>You</Text>
     <Text style={{fontSize: 15, lineHeight: 30,color:'white'}}>{props.message}</Text>
</View>
</TouchableOpacity>


    </>:<>


    <View style={styles.view2}>
    <Text style={{fontSize: 11, lineHeight: 11,color:'black'}}>{sendername}</Text>
     <Text style={{fontSize: 15, lineHeight: 30,color:'black'}}>{mess}</Text>
</View></>}



  
    </>)
    }

MySubComponent2=(props)=>{

   const deletechatsingle2=async()=>{
    this.filter2(props.id);
     let response=await fetch("http://10.0.2.2:3002/deletechats",{
      method:'POST',
      headers:{
         Accept: 'application/json',
          'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        chat:props.message,type:props.type,chatid:props.id
      })
    })
    
  }

  const createTwoButtonAlert2 = () =>
    Alert.alert(
      "Delete this message",
      "Message cannot be restore once deleted",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: ()=>deletechatsingle2()}
      ]
    );
  return(<>
    {props.sender==props.myid?<>
      <TouchableOpacity   onLongPress={()=>createTwoButtonAlert2()}>

    <View style={styles.view}>
    <Text style={{fontSize: 11, lineHeight: 11,color:'white'}}>You</Text>
     <Text style={{fontSize: 15, lineHeight: 30,color:'white'}}>{props.message}</Text>
</View>
</TouchableOpacity>


    </>:
 <TouchableOpacity   onLongPress={()=>createTwoButtonAlert2()}>

    <View style={styles.view2}>
    <Text style={{fontSize: 11, lineHeight: 11,color:'black'}}>{props.sender}</Text>
     <Text style={{fontSize: 15, lineHeight: 30,color:'black'}}>{props.message}</Text>
</View>
</TouchableOpacity>
}



  
    </>)

}

  filter(id){
   
    this.setState({chatMessagesdb:this.state.chatMessagesdb.filter((item) => item._id != id).map(({_id,type,message}) => ({_id,type,message}))})

    
  }

  filter2(id){
   
    this.setState({chatMessages:this.state.chatMessages.filter((item) => item._id != id).map(({_id,sender,content}) => ({_id,content,sender}))})

    
  }




   

  render() {
    const chatMessages = this.state.chatMessages.map(chatMessage => (
      
      <this.MySubComponent2 id={chatMessage._id} key={chatMessage.content} sender={chatMessage.sender} myid={this.props.mymobile}  message={chatMessage.content}/>
    ));

    const chatMessagesdb=this.state.chatMessagesdb.map((chatMessage,index)=>(

     <this.MySubComponent id={chatMessage._id} indx={index} key={index} type={chatMessage.type} message={chatMessage.message} />

      ))



    return (<>

   
      
      <View style={styles.container}>
       <Button onPress={()=>this.clear()}  icon='delete' labelStyle={{fontSize:20,height:2,width:10,marginRight:'80%',color:'crimson'}}/> 
      <View style={styles.inputdiv}>
        
        <TextInput
          style={styles.input}
          autoCorrect={false}
          value={this.state.chatMessage}
          placeholder="Type message"
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={chatMessage => {
            this.setState({ chatMessage });
          }}
        />
         <Button onPress={() => this.submitChatMessage()} style={styles.sendbut} icon="send" labelStyle={{ fontSize: 26,color:'dodgerblue' }}/>

      </View>
       
        <KeyboardAvoidingView>
        <SafeAreaView>
          <ScrollView style={{height:'90%'}} ref={ref => {this.scrollView = ref}}
    onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}>
          <View >
            {chatMessagesdb}
            {chatMessages}
           
          </View>
          </ScrollView>
        </SafeAreaView>
        </KeyboardAvoidingView>
       
      
       {this.state.open==true?<Text>gfhdf</Text>:null}
      </View>

    </>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  input:{
    width:'98%',
    borderRadius:100,
    backgroundColor:'#D1D1D1',
    color:'white',
    marginLeft:5,
    height:40,
    height:50,
    paddingLeft:20,
    color:'black'
   


  },
  sendbut:{
    width:60,
    position:'absolute',
    marginLeft:'86%',
    borderRadius:100


   

  },
  inputdiv:{
    flexDirection:'row',
    position:'absolute',
    bottom:0,
    marginBottom:4


  },
  view:{
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor:'dodgerblue',
    marginTop:10,
    borderRadius:10,
    padding:5,
    marginRight:4,
    marginTop:10



  },
  view2:{
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor:'#E7E7E7',
    marginTop:10,
    borderRadius:10,
    padding:5,
    marginRight:4,
    color:'black'
    
    



  }
  
});


