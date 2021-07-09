import React,{useState,useEffect} from "react";
import {Text,View,StyleSheet,Image,ScrollView, StatusBar,SafeAreaView} from "react-native";
import { TextInput,Button } from 'react-native-paper';
import { Alert, Modal, Pressable} from "react-native";
import Dstorycreatechoosediv from "./Dstorycreatechoosediv";
import { Switch } from 'react-native-paper';

const imga="https://i.pinimg.com/474x/fc/98/92/fc9892d23975eb945e73a7ed718190cf.jpg";

var arra=[];
var finalastring="";


const Dstorycreate=(props)=>{
	  const [story, setstory] = React.useState('');
	  const [email, setemail] = React.useState('');
	  const[p,setp]=useState('https://64.media.tumblr.com/808240de63073f8e7f0cef0591a1118c/tumblr_p2gzuxDyZX1ww8j5io6_500.jpg');
	  const [modalVisible2, setModalVisible2] = useState(false);
	   
	   const [switchdepress,setswitchdepress] = React.useState(false);
	   const [switchanxiety,setswitchanxiety] = React.useState(false);
	   const [switchstress,setswitchstress] = React.useState(false);
	   const [switchtension,setswitchtension] = React.useState(false);
	   const [switchsucidial,setswitchsucidial] = React.useState(false);
	  
	   const onToggleSwitch=(id)=>{
	   	if(id==1){
	   		setswitchdepress(!switchdepress);
	   		if(switchdepress==false){
	   			arra.push("Depression");
	   		}
	   		else{
	   			arra = arra.filter(e => e !== 'Depression');
	   		}
	   	}
	   	else if(id==2){
	   		setswitchanxiety(!switchanxiety);
	   		if(switchanxiety==false){
	   			arra.push("Anxiety");
	   		}
	   		else{
	   			arra = arra.filter(e => e !== 'Anxiety');
	   		}
	   	}
	   	else if(id==3){
	   		setswitchstress(!switchstress);
	   		if(switchstress==false){
	   			arra.push("Stress");
	   		}
	   		else{
	   			arra = arra.filter(e => e !== 'Stress');
	   		}
	   	}
	   	else if(id==4){
	   		setswitchtension(!switchtension);
	   		if(switchtension==false){
	   			arra.push("Tension");
	   		}
	   		else{
	   			arra = arra.filter(e => e !== 'Tension');
	   		}
	   	}
	   	else if(id==5){
	   		setswitchsucidial(!switchsucidial);
	   		if(switchsucidial==false){
	   			arra.push("Sucidial");
	   		}
	   		else{
	   			arra = arra.filter(e => e !== 'Sucidial');
	   		}
	   	}
	   	console.log(arra);
	   	var n=arra.length;
	   	arra.sort();
	   	var i=0
	   	var hashtahstring=""
	   	while(i<n){
	   		hashtahstring=hashtahstring+arra[i]+"/";
	   		i=i+1;
	   	}
	   	console.log(hashtahstring);
	   	finalastring=hashtahstring;
	  
	   

	   }
	  
	  const changereliever=(id)=>{
	  	setp(id)
	  };

	  const displaydata=async()=>{
	  	props.adda(p,story,finalastring);
      alert('Hope this story helps a lot of people!');
       let response = await fetch('http://10.0.2.2:3002/addstoryforapp', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    photoo:p,img_depressor:mypic,story:story,category:finalastring
   
  })
});
	
	  };

const [all,setall]=useState([]);
const [mypic,setmypic]=useState();

    useEffect(async()=>{
    const response = await fetch('http://10.0.2.2:3002/getdata');
    const res = await response.json();
    setall(res.myreliever);
    setmypic(res.profile[0].img);

   
   
   
   
    
  });

    const reset=()=>{
      setstory("");
      setemail("");
    }

    
	


	return(<>
    <Button onPress={reset} style={{backgroundColor:'orange'}}><Text style={{color:'white'}}>Reset</Text></Button>
		 <TextInput
		 multiline = {true}
numberOfLines = {10}
		 style={styles.writestory}
      label="Write your story"
      value={story}
      onChangeText={story => setstory(story)}
    />
     <View>
    <Button onPress={()=>setModalVisible2(true)} style={styles.choose}><Text style={{color:'black'}}>Choose your favouite reliever</Text></Button>
     <View style={{flexDirection:'row',marginLeft:'30%'}}>

   <Image source = {{uri:mypic}}
   style = {styles.photo}
   />
   <Image source = {{uri:p}}
   style = {styles.photo}
   />


     </View>
    
   
    </View>
     <TextInput
     style={styles.input}
      label="Email"
      value={email}
      onChangeText={email => setemail(email)}
    />
    <Text style={{color:'white',marginLeft:20,fontSize:20,width:200}}>Select your problems</Text>
    <View style={{flexDirection:'row'}}>
    <Text style={{color:'white',marginLeft:20,fontSize:15,width:200}}>Depression</Text>
    <Switch color='#82EEFD' style={styles.switch} value={switchdepress} onValueChange={()=>onToggleSwitch(1)} />
    </View>
    <View style={{flexDirection:'row'}}>
    <Text style={{color:'white',marginLeft:20,fontSize:15,width:200}}>Anxiety</Text>
    <Switch color='#82EEFD' style={styles.switch} value={switchanxiety} onValueChange={()=>onToggleSwitch(2)} />
    </View>
    <View style={{flexDirection:'row'}}>
    <Text style={{color:'white',marginLeft:20,fontSize:15,width:200}}>Stress</Text>
    <Switch color='#82EEFD' style={styles.switch} value={switchstress} onValueChange={()=>onToggleSwitch(3)} />
    </View>
    <View style={{flexDirection:'row'}}>
    <Text style={{color:'white',marginLeft:20,fontSize:15,width:200}}>Tension</Text>
    <Switch color='#82EEFD' style={styles.switch} value={switchtension} onValueChange={()=>onToggleSwitch(4)} />
    </View>
    <View style={{flexDirection:'row'}}>
    <Text style={{color:'white',marginLeft:20,fontSize:15,width:200}}>Sucidial</Text>
    <Switch color='#82EEFD' style={styles.switch} value={switchsucidial} onValueChange={()=>onToggleSwitch(5)} />
    </View>
    <Button onPress={displaydata} style={styles.sendbut}><Text style={{color:'white'}}>Send</Text></Button>
    <Text style={{marginTop:140}}></Text>

    


     <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible2(!modalVisible2);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
       		
       	<SafeAreaView >
    		<ScrollView >	

     
       		<Dstorycreatechoosediv image='https://i.pinimg.com/474x/fc/98/92/fc9892d23975eb945e73a7ed718190cf.jpg' func={changereliever}/>
       		<Dstorycreatechoosediv image='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f0ed9f4d-d7f6-4b32-8fb3-f2fc0bd0d63c/ddbp09r-99c4706a-3fd1-4269-9455-9a5a6326a1bc.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YwZWQ5ZjRkLWQ3ZjYtNGIzMi04ZmIzLWYyZmMwYmQwZDYzY1wvZGRicDA5ci05OWM0NzA2YS0zZmQxLTQyNjktOTQ1NS05YTVhNjMyNmExYmMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bFJQjSgfueq-6I6sVov6JMUjoZnzuMZpKgy-yVAfSKQ' func={changereliever}/>
       			{all.map((cvalue)=>{
              return(<Dstorycreatechoosediv name={cvalue.name}image={cvalue.img} email={cvalue.email} func={changereliever}/>)
            })}

       		</ScrollView>
       	</SafeAreaView>


           

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible2(!modalVisible2)}
            >
              <Text style={styles.textStyle}>close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
     </View>
    

		</>)

}

export default Dstorycreate;
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
		width:40,
		height:40,
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
  	marginTop:6

  },
  butto:{
  	width:100,
  	backgroundColor:'#82EEFD',
  	marginLeft:100
  },
  switch:{
  	width:100
  },
  sendbut:{
  	backgroundColor:'#151E3D',
  	width:200,
  	marginLeft:'21%',
  	marginTop:10
  }
	})
