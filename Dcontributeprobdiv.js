import React,{useState} from "react";
import {Text,View,Image,StyleSheet} from "react-native";
import {Button} from "react-native-paper";
import { Alert, Modal, Pressable} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Dcontributeprobdiv=(props)=>{
	const [value,setvalue]=useState(1);
	const check=()=>{
		setvalue(value+1);
	};
	const [modalVisible1, setModalVisible1] = useState(false);
	return(<>
		<View style={{marginTop:10}}>
    			<View style={{marginLeft:8,flexDirection:'row'}}>
    			 <Image source = {{uri:props.image}}
   							style ={styles.photo}
   				 />
   				
   				<Text style={styles.name}>{props.names}</Text>

   				</View>
   				<View style={{marginLeft:15}}>
   					<Text style={styles.white}>{props.problem}{value}</Text>
   					<Button onPress={()=>setModalVisible1(true)} style={styles.donate}><Text style={styles.white}>Donate</Text></Button>
  
  				<View style={styles.hairline} />

  				</View>
  	
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
             <Image source = {{uri:props.image}}
                style ={{width:300,height:300}}
           />
          
           	<Text>Send the giftvoucher code at {props.email}</Text><Text></Text>
           	<Text>Visit the nearest restaurent to meet the depressor:{props.n_res}</Text><Text></Text>
           	<Text>Transfer money to the bank account number {props.bank}</Text><Text></Text>
           	<Text>Contact no:{props.phone}</Text><Text><Text></Text><Text></Text>
           	<Text style={{color:'dodgerblue'}}>We suggest you to first call the depressor and then donate</Text>
           	</Text><Text></Text>


            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible1(!modalVisible1)}
            >
              <Text style={styles.textStyle}>I donated</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
     
    </View>

		</>)
}
export default Dcontributeprobdiv;
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
donate:{
	marginLeft:'60%',
	backgroundColor:'#D70170'
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
  }

})