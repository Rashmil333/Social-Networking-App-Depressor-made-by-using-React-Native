import React,{useState} from "react";
import {Text,View,ImageBackground,ScrollView, StatusBar,StyleSheet,SafeAreaView,Image} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Alert, Modal, Pressable} from "react-native";
import { TextInput } from 'react-native-paper';




const Dcartcard=(props)=>{
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [quantity,setquantity]=useState(1);

  const modalstate=(id)=>{
    setquantity(0);
    if(id==1){
      setModalVisible1(!modalVisible1);
    }
    else{
      setModalVisible2(!modalVisible2);
    }
      

  }
const remove=()=>{
  alert("Your item will be removed")
}

  const [text, setText] = React.useState('');
const bada=()=>{
  alert("added to cart")
};

const removefromcart=async()=>{
  alert("Item is Removed!")
     let response = await fetch('http://10.0.2.2:3002/deletetocart', {
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

  const cancelorder=async()=>{
  alert("Your order is Cancelled!")
     let response = await fetch('http://10.0.2.2:3002/deleteorder', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    img:props.image1,product_name:props.name1,cost:props.costa1,
    phone:props.phone,address:props.address
  
  })
});
    
  }

	return(<>
	
           <Card style={{margin:8}}>
         <View style={{flexDirection:'row',marginTop:5}}>
          <Image source = {{uri:props.image1}}
   style = {styles.pic}
   />
   <Text style={{marginLeft:20,width:200}}>{props.name1}</Text>
         </View>
         <Text style={{fontWeight:'bold',marginLeft:10}}>Rs:{props.costa1}.00</Text>
         <View  style={{flexDirection:'row',marginTop:5}}>
         {props.tag=="cart"?<>
           <Button onPress={()=> setModalVisible1(!modalVisible1)} style={styles.butto}><Text style={{color:'white'}}>Buy</Text></Button>
           <Button onPress={removefromcart} style={styles.butto}><Text style={{color:'white'}}>Remove</Text></Button>
         </>:
         <Button onPress={cancelorder} style={styles.butto}><Text style={{color:'white'}}>Cancel Order</Text></Button>}
          
         </View>
        

    
   
   
  </Card>
    


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
      label="House address"
      value={text}
      onChangeText={text => setText(text)}
    />
     <TextInput style={styles.input}
    underlineColor='pink'
      label="Pin Code"
      value={text}
      onChangeText={text => setText(text)}
    />
   
     <TextInput style={styles.input}
    underlineColor='pink'
      label="City name"
      value={text}
      onChangeText={text => setText(text)}
    />
      <TextInput style={styles.input}
    underlineColor='pink'
      label="State name"
      value={text}
      onChangeText={text => setText(text)}
    />
   <Button style={styles.placeorder}><Text style={{color:'white'}}>Place Order</Text></Button>
   


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
  


       
  
   	
		</>)
}

export default Dcartcard;
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


  },
  pic:{
    width:100,
    height:100
  },
  butto:{
    marginLeft:10,
    backgroundColor:'#dd0393'
  }
})