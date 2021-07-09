import React,{useState} from "react";
import {Text,View,ImageBackground,ScrollView, StatusBar,StyleSheet,SafeAreaView,Image} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Alert, Modal, Pressable} from "react-native";
import { TextInput } from 'react-native-paper';



const email="allusers@gmail.com";
const Dbuycard=(props)=>{
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [quantity,setquantity]=useState(1);
const [name,setname]=useState();
const [address,setaddress]=useState();
const [phone,setphone]=useState();
  const modalstate=(id)=>{
    setquantity(0);
    if(id==1){
      setModalVisible1(!modalVisible1);
    }
    else{
      setModalVisible2(!modalVisible2);
    }
      

  }


  const [text, setText] = React.useState('');
const bada=()=>{
  alert("added to cart")
}

const addtocart1=async()=>{
  alert('added to cart.');
     let response = await fetch('http://10.0.2.2:3002/addtocart', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
        img:props.image1,product_name:props.name1,cost:props.costa1
  })
});
    
    

  }

  const addtocart2=async()=>{
    alert('added to cart.');
     let response = await fetch('http://10.0.2.2:3002/addtocart', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    img:props.image2,product_name:props.name2,cost:props.costa2
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

  const placeorder1=async()=>{
    modalstate(1);
    alert('Your order is placed');
     let response = await fetch('http://10.0.2.2:3002/placeorder', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email,name:name,product_name:props.name1,cost:props.costa1,address:address,phoneno:phone,
    img:props.image1,
  })
});
    
    

  }
  const placeorder2=async()=>{
    modalstate(2);
    alert('Your order is placed');
     let response = await fetch('http://10.0.2.2:3002/placeorder', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
     email,name:name,product_name:props.name2,cost:props.costa2,address:address,phoneno:phone,
    img:props.image2,
  })
});
   
    

  }

	return(<>
			<View style={{flexDirection:'row',marginTop:15}}>
        <Card style={styles.card}>
            <Card.Cover source={{ uri:props.image1 }} />
            <Card.Content>
              <Title>{props.name1}</Title>
                <Paragraph>Rs {props.costa1}.00</Paragraph>
          </Card.Content>
           <Card.Actions>
              <Button  onPress={()=>setModalVisible1(true)} style={styles.buy}><Text style={{color:'white'}}>Buy</Text></Button>
               <Button style={styles.cart}  onPress={addtocart1} ><FontAwesome5 style={styles.cart} name={'shopping-cart'} size={20}/></Button>
              
          </Card.Actions>
          </Card>
          <Card style={styles.card}>
            <Card.Cover source={{ uri: props.image2 }} />
          <Card.Content>
              <Title>{props.name2}</Title>
                <Paragraph>Rs {props.costa2}.00</Paragraph>
          </Card.Content>
          <Card.Actions>
              <Button onPress={()=>setModalVisible2(true)} style={styles.buy}><Text style={{color:'white'}}>Buy</Text></Button>
             <Button style={styles.cart}  onPress={addtocart2} ><FontAwesome5 style={styles.cart} name={'shopping-cart'} size={20}/></Button>

              
          </Card.Actions>
          </Card>
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
          
             <Image source = {{uri:props.image1}}
   style = {{ width: 200, height: 200 }}
   />
   <Text>{props.name1}</Text>
   <Text>Rs:{props.costa1}.00</Text>
   <View style={{flexDirection:'row',marginTop:20}}><Text></Text>
   <Button ><Text style={{color:'black'}}>Quantity:{quantity}</Text></Button>
   <Button onPress={()=>setquantity(quantity+1)}>up</Button>
   </View>
    <TextInput style={styles.input}
    underlineColor='pink'
      label="Name of the Receiver"
      value={name}
      onChangeText={name => setname(name)}
    />
     <TextInput style={styles.input}
    underlineColor='pink'
      label="Address"
      value={address}
      onChangeText={address => setaddress(address)}
    />
   
     <TextInput style={styles.input}
    underlineColor='pink'
      label="Phone no"
      value={phone}
      onChangeText={phone => setphone(phone)}
    />
      
   <Button onPress={placeorder1}style={styles.placeorder}><Text style={{color:'white'}}>Place Order</Text></Button>
   


            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => modalstate(1)}
            >
              <Text style={styles.textStyle}>Cancel order</Text>
            </Pressable>
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
          setModalVisible2(!modalVisible2);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          
             <Image source = {{uri:props.image2}}
   style = {{ width: 200, height: 200 }}
   />
   <Text>{props.name2}</Text>
   <Text>Rs:{props.costa2}.00</Text>
   <View style={{flexDirection:'row',marginTop:20}}><Text></Text>
   <Button ><Text style={{color:'black'}}>Quantity:{quantity}</Text></Button>
   <Button onPress={()=>setquantity(quantity+1)}>up</Button>
   </View>
    <TextInput style={styles.input}
    underlineColor='pink'
      label="Name of the Receiver"
      value={name}
      onChangeText={name => setname(name)}
    />
     <TextInput style={styles.input}
    underlineColor='pink'
      label="Address"
      value={address}
      onChangeText={address => setaddress(address)}
    />
   
     <TextInput style={styles.input}
    underlineColor='pink'
      label="Phone no"
      value={phone}
      onChangeText={phone => setphone(phone)}
    />
      
   <Button onPress={placeorder2} style={styles.placeorder}><Text style={{color:'white'}}>Place Order</Text></Button>
   


            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={()=>modalstate(2)}
            >
              <Text style={styles.textStyle}>Cancel order</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
     
    </View>
  
   	
		</>)
}

export default Dbuycard;
const styles=StyleSheet.create({
  card:{
    width:'48%',
    marginLeft:5,

  },
  container:{
    backgroundColor:'#3D2A35'
  },
  buy:{
    backgroundColor:'#e32160',

  },
  cart:{
    marginLeft:20,
    color:'pink',

  },
  input:{
    width:300
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
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    marginTop:10,
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
  placeorder:{
    backgroundColor:'pink',
    borderRadius:100,
    marginTop:10


  }
})