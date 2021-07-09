import React,{useState} from "react";
import {Text,View,ImageBackground,ScrollView, StatusBar,StyleSheet,SafeAreaView} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';





const Dcardinreliever=(props)=>{

	const callreliever=()=>{
		props.modala(props.idi)
	}

	const [modalVisible, setModalVisible] = useState(false);
	return(<>
			<View style={{marginTop:10}}>
   			  <Card>
    <Card.Cover source={{ uri: props.image }} />
     <Card.Content>
     	<Title><Text style={styles.data}>{props.title}</Text></Title>
      <Paragraph> <Text style={styles.data}>{props.description}</Text></Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button style={styles.button}><Text style={styles.text}>GO</Text></Button>
      <Button style={styles.button} onPress={callreliever}><Text style={styles.text}>Learn</Text></Button>
    </Card.Actions>
  </Card>
  	 
  </View>
  
   	
		</>)
}

export default Dcardinreliever;
const styles=StyleSheet.create({
  button:{
    backgroundColor:'red',
    marginLeft:5
  },
  text:{
    color:'white',
    fontFamily:'QuickSand'

  },
  data:{
    fontFamily:'QuickSand'
  }
})