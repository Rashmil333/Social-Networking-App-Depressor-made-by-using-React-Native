import React,{useState} from "react";
import {Text,View,ImageBackground,ScrollView, StatusBar,StyleSheet,SafeAreaView} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Dcarddatareliever from "./Dcarddatareliever";
import Dcardinreliever from "./Dcardinreliever";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Alert, Modal, Pressable} from "react-native";
const Dreliever=()=>{

	const [modalVisible1, setModalVisible1] = useState(false);
	const [modalVisible2, setModalVisible2] = useState(false);
	const [modalVisible3, setModalVisible3] = useState(false);
	const [modalVisible4, setModalVisible4] = useState(false);
	const [modalVisible5, setModalVisible5] = useState(false);

	const openmodal=(id)=>{
		if(id=='1'){
			setModalVisible1(true);
		}
		else if(id=='2'){
			setModalVisible2(true);
		}
		else if(id=='3'){
			setModalVisible3(true);
		}
		else if(id=='4'){
			setModalVisible4(true);
		}
		else if(id=='5'){
			setModalVisible5(true);
		}


	};

	return(<>
			<ImageBackground 
    source={{uri:'https://userscontent2.emaze.com/images/c7007a1c-b90a-4593-9ab9-b0cf583fecb2/18eca631-4a9a-4b40-ac60-567cc582afc6.jpg'}}
    style={{width: '100%', height:'100%'}} >

   	<View >
   		<SafeAreaView >
    	<ScrollView >
   			{Dcarddatareliever.map((cvalue,index)=>{
   				return(<Dcardinreliever key={index} image={cvalue.img} title={cvalue.heading} description={cvalue.descript} modala={openmodal} idi={cvalue.id}/>)
   			})}
   		</ScrollView>
    </SafeAreaView>
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
            <Text><FontAwesome5 name={'exclamation'} size={20}/>Giving them value will fastly pull out from depression.</Text><Text></Text>
            <Text><FontAwesome5 name={'exclamation'} size={20}/>Depressed people need friends who care about them.Wants to spend time with them.Give your time as much as possible.</Text><Text></Text>
            <Text><FontAwesome5 name={'exclamation'} size={20}/>Depressed people needs vision of light. Give them vision.</Text><Text></Text>
            <Text><FontAwesome5 name={'exclamation'} size={20}/>Depressed people love when you ask personal questions with them.Ask personal questions.</Text><Text></Text>
            <Text><FontAwesome5 name={'exclamation'} size={20}/>Give them a positive mental environment.This can be done by telling them about god.God loves all. </Text><Text></Text>
            <Text><FontAwesome5 name={'exclamation'} size={20}/>Crack jokes with them.Making them laugh will extremely help them to play again.</Text><Text></Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible1(!modalVisible1)}
            >
              <Text style={styles.textStyle}>I understand</Text>
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
            <Text><FontAwesome5 name={'exclamation'} size={20}/>Tell them to stop thinking about future.But live your life in present.</Text><Text></Text>
            <Text><FontAwesome5 name={'exclamation'} size={20}/>Try to generate willpower in them. So that they can fight the situation instead of dropping.</Text><Text></Text>
            <Text><FontAwesome5 name={'exclamation'} size={20}/>Tell them life is not so serious and not to worry. But enjoy life more instead of fearing.</Text><Text></Text>
            <Text><FontAwesome5 name={'exclamation'} size={20}/>People having anxiety needs instant emotional support.Sharing your emotions will help them feel comfortable.</Text><Text></Text>
           

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible2(!modalVisible2)}
            >
              <Text style={styles.textStyle}>I understand</Text>
            </Pressable>
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
            <Text><FontAwesome5 name={'exclamation'} size={20}/>Tell them to see the problem with different perspective.Basically positive perspective.</Text><Text></Text>
            <Text><FontAwesome5 name={'exclamation'} size={20}/>Tell them stress is not a solution. But planning and strategy is solution. Planning makes you happy but overthinking and stress is just a waste of time.</Text><Text></Text>
            <Text><FontAwesome5 name={'exclamation'} size={20}/>Give them a suggestion to do the tasks from simpler to harder.</Text><Text></Text>
            <Text><FontAwesome5 name={'exclamation'} size={20}/>Tell them to relax.Inspire them to break their limits.</Text><Text></Text>
            <Text><FontAwesome5 name={'exclamation'} size={20}/>Generate the feeling in them that time is hard but at the end, everything is just fruitful like mango.</Text><Text></Text>
           

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible3(!modalVisible3)}
            >
              <Text style={styles.textStyle}>I understand</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
     
    </View>

     <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible4}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible3(!modalVisible4);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text><FontAwesome5 name={'exclamation'} size={20}/>Tell them to focus on the hard work,patience,continuity.Dont focus on the fruits.</Text><Text></Text>
            <Text><FontAwesome5 name={'exclamation'} size={20}/>Tell them that sometimes you have to be down.Beacause down creates sympathy,gratitide.</Text><Text></Text>
            <Text><FontAwesome5 name={'exclamation'} size={20}/>Tell them not to attach with anything.Attachement for long time creates tension. Tell them to free all the attachements in life.</Text><Text></Text>
            <Text><FontAwesome5 name={'exclamation'} size={20}/>It happens that people try to do unexpected things which creates tension.Tell them not to expect but do that you can do.</Text><Text></Text>

           

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible4(!modalVisible4)}
            >
              <Text style={styles.textStyle}>I understand</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
     
    </View>

     <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible5}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible5(!modalVisible5);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text><FontAwesome5 name={'exclamation'} size={20}/>Tell them to believe in God.Because God is always with you and watching you.You have to just move towards God.Set the path to God.</Text><Text></Text>
            <Text><FontAwesome5 name={'exclamation'} size={20}/>Try to give them hope.Because hope and love is life and hoplessness is death.</Text><Text></Text>
            <Text><FontAwesome5 name={'exclamation'} size={20}/>Tell them not to live your life just for yourself. But for others.Inspire them to spread love who needs you. There are lot of people who needs your love and devotion.</Text><Text></Text>
            <Text><FontAwesome5 name={'exclamation'} size={20}/>Tell them that dont kill yourself.Because everyone has to die.Tell them to wait and keep patience and survive.</Text><Text></Text>

           

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible5(!modalVisible5)}
            >
              <Text style={styles.textStyle}>I understand</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
     
    </View>
   	 
    <Text></Text><Text></Text><Text></Text><Text></Text>

   	</ImageBackground>
		</>)
}

export default Dreliever;
const styles = StyleSheet.create({
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
    elevation: 5,
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
});

