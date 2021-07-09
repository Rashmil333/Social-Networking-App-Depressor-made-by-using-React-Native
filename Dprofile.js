import React,{useState,useEffect} from "react"
import {View,Text,StyleSheet,ImageBackground,ScrollView, StatusBar,SafeAreaView} from "react-native";
import { TextInput ,Button} from 'react-native-paper';
import { Alert, Modal, Pressable,KeyboardAvoidingView} from "react-native";
import { RefreshControl} from 'react-native';
import Dshowprofile from "./Dshowprofile";
import Dprofilemembersdiv from "./Dprofilemembersdiv";

const Dprofile=()=>{

  const typo='first_send';
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
	 const [url, seturl] = React.useState('');
   const [detail, setdetail] = React.useState('');
   const [age, setage] = React.useState('');
	  const [value, setValue] = React.useState('first');
    const [category,setcategory]=useState('Both');
    const [hobbies,sethobbies]=useState('None');
    const [doing,setdoing]=useState('');
    const [name,setname]=useState('');
    const [mobile,setmobile]=useState('');
    const [email,setemail]=useState();
    const [div,setdiv]=useState('None');
    const [refreshing, setRefreshing] = React.useState(false);
    const [profile,setprofile]=useState([]);
    const [tekka,settekka]=useState(false);
 

    const categorychosen=(id)=>{
      setcategory(id);
      setModalVisible1(!modalVisible1);
    }
    const hobbieschosen=(id)=>{
      sethobbies(id);
      setModalVisible2(!modalVisible2);
    }

     const doingchosen=(id)=>{
      setdoing(id)
      setModalVisible3(!modalVisible3);
    }

    const gamma=()=>{
      setdiv(3);
    }

    const senddata=async()=>{
      alert("profile is created sucessfully");
      setdiv(3);
      const response=await fetch('http://10.0.2.2:3002/profile',{
        method:'POST',
        headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    type:typo,category,name_d:name,mobile_no:mobile,img:url,age,hobbies,work:doing,description:detail
  })
      });
      let res = await response;
    console.log(res.status);
    if(res.status==200){
      alert("Profile is made succesfully!!!");
       setdiv(3);
    
     
    }
    else{
      alert("invalid credentials");
    }
     
    }
 
     useEffect(async()=>{
    const response = await fetch('http://10.0.2.2:3002/getdata');
    const res = await response.json();
    setdiv(res.profile_status);
    console.log(JSON.stringify(res.profile[0].age));
    setage((res.profile[0].age));
    seturl(JSON.stringify(res.profile[0].img));
    setdetail(JSON.stringify(res.profile[0].description));
    setcategory(JSON.stringify(res.profile[0].category));
    setname(JSON.stringify(res.profile[0].name));
    setdoing(JSON.stringify(res.profile[0].work));
    setmobile(JSON.stringify(res.profile[0].mobile_no));
    sethobbies(JSON.stringify(res.profile[0].hobbies));
    setemail(JSON.stringify(res.profile[0].email_id))
   
   
   
    
  });
     const [all,setall]=useState([]);
     const [all2,setall2]=useState([]);
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
    setall((res.depressors));
    setall2((res.relievers))

   
   
    
  },[]);
     
 
	return(<>
     
			<View  >
			<ImageBackground 
    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk0bKQl7gNAn9_YtCZLSeQzqs7o1hwQJm_Tw&usqp=CAU'}}
    style={{width: '100%', height:'100%'}} 
>
  <SafeAreaView>
  <ScrollView>
   <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
    {div==0?<>
      <Text style={styles.h1}>Let us Create your Profile</Text><Text></Text>
 <TextInput style={styles.input}
              label="Give the url of your image"
              value={url}
              onChangeText={url => seturl(url)}
    />

    <Text></Text>
         <TextInput style={styles.input}
              label="About you"
              value={detail}
              onChangeText={detail => setdetail(detail)}
    /><Text></Text>
    <Text></Text>
         <TextInput style={styles.input}
              label="User Name"
              value={name}
              onChangeText={name => setname(name)}
    /><Text></Text>
    <Text></Text>
         <TextInput style={styles.input}
              label="Mobile NO"
              value={mobile}
              onChangeText={mobile => setmobile(mobile)}
    /><Text></Text>
     <TextInput style={styles.input}
              label="Age"
              value={age}
              onChangeText={age => setage(age)}
    />
    <Text style={{color:'white',marginLeft:20,marginTop:15,fontSize:20}}>Category</Text>
    <View style={{flexDirection:'row'}}>
       <Button  onPress={() => setModalVisible1(!modalVisible1)} style={{width:100,backgroundColor:'dodgerblue',marginLeft:20,marginTop:5}}><Text style={{color:'white'}}>Choose</Text></Button>
       <Text style={{color:'white',marginLeft:20,marginTop:9,fontSize:20}}>{category}</Text>
    </View>

      <Text style={{color:'white',marginLeft:20,marginTop:15,fontSize:20}}>Hobbies</Text>
    <View style={{flexDirection:'row'}}>
       <Button  onPress={() => setModalVisible2(!modalVisible2)} style={{width:100,backgroundColor:'dodgerblue',marginLeft:20,marginTop:5}}><Text style={{color:'white'}}>Choose</Text></Button>
       <Text style={{color:'white',marginLeft:20,marginTop:9,fontSize:20}}>{hobbies}</Text>
    </View>

       <Text style={{color:'white',marginLeft:20,marginTop:15,fontSize:20}}>What are you doing</Text>
    <View style={{flexDirection:'row'}}>
       <Button  onPress={() => setModalVisible3(!modalVisible3)} style={{width:100,backgroundColor:'dodgerblue',marginLeft:20,marginTop:5}}><Text style={{color:'white'}}>Choose</Text></Button>
       <Text style={{color:'white',marginLeft:20,marginTop:9,fontSize:20}}>{doing}</Text>
    </View>
     <Button onPress={senddata} style={styles.send}><Text style={{color:'black'}}>Create Profile</Text></Button>


      </>:<>
         

      <Dshowprofile name={name} age={age} detail={detail} category={category}
      doing={doing} hobbie={hobbies} phone={mobile} email={email} image={url} />
      <Dprofilemembersdiv image='http://pm1.narvii.com/6957/43b1ae939373ceabc9e283044165cd0310494521r1-1200-1600v2_uhq.jpg'
      phone='7785452145' email='harsh@gmail.com' />
     
      {all.map((cvalue)=>{
        return(<Dprofilemembersdiv image={cvalue.img}
      phone='7785452145' email={cvalue.email} category='Depressor' />)
      })}
       {all2.map((cvalue)=>{
        return(<Dprofilemembersdiv image={cvalue.img}
      phone={cvalue.mobile_no} name={cvalue.name} email={cvalue.email} category='Reliever'/>)
      })}

      </>}
     

   </KeyboardAvoidingView>
  


    </ScrollView>
    </SafeAreaView>
   


</ImageBackground>



			</View>

       <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible1(!modalVisible1);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
            <Button onPress={()=>categorychosen('Depressor')} style={styles.category}><Text style={{color:'black'}}>Depressor</Text></Button>
            <Button onPress={()=>categorychosen('Reliever')} style={styles.category}><Text style={{color:'black'}}>Reliever</Text></Button>
            <Button onPress={()=>categorychosen('Both')} style={styles.category}><Text style={{color:'black'}}>Both</Text></Button>

           
          </View>
        </View>
      </Modal>
     
    </View>


       <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible1(!modalVisible2);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
            <Button onPress={()=>hobbieschosen('Singing and Dancing')} style={styles.hobbies}><Text style={{color:'black'}}>Singing and Dancing</Text></Button>
            <Button onPress={()=>hobbieschosen('Reading and Writing')} style={styles.hobbies}><Text style={{color:'black'}}>Reading and Writing</Text></Button>
            <Button onPress={()=>hobbieschosen('Sports and Yoga')} style={styles.hobbies}><Text style={{color:'black'}}>Sports and Yoga</Text></Button>
            <Button onPress={()=>hobbieschosen('Movies and Documentories')} style={styles.hobbies}><Text style={{color:'black'}}>Movies and Documentories</Text></Button>

           
          </View>
        </View>
      </Modal>
     
    </View>


       <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible3}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible3(!modalVisible3);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
            <Button onPress={()=>doingchosen('School Student')} style={styles.hobbies}><Text style={{color:'black'}}>School Student</Text></Button>
            <Button onPress={()=>doingchosen('College Student')} style={styles.hobbies}><Text style={{color:'black'}}>College Student</Text></Button>
            <Button onPress={()=>doingchosen('Emplpoyed but not married')} style={styles.hobbies}><Text style={{color:'black'}}>Emplpoyed but not married</Text></Button>
            <Button onPress={()=>doingchosen('Employed and married')} style={styles.hobbies}><Text style={{color:'black'}}>Employed and married</Text></Button>

           
          </View>
        </View>
      </Modal>
     
    </View>

		</>)
}

export default Dprofile;

const styles=StyleSheet.create({
	
 
	input:{
		width:350,
		marginLeft:20,
		backgroundColor:'pink',
		color:'white'
	},
	 h1:{
    color:'white',
    fontSize:25,
    marginLeft:10,
    marginTop:10,
    textAlign:'center'

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
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
    elevation: 2,
    marginTop:10
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
  category:{
    backgroundColor:'skyblue',
    width:200,
    marginTop:15
  },
  hobbies:{
    backgroundColor:'skyblue',
    width:300,
    marginTop:15
  },
  send:{
    backgroundColor:'pink',
    marginTop:50,
    marginLeft:10,
    marginRight:10,
    borderRadius:5

  }
})