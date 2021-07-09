// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView
} from 'react-native';

import {StyleSheet,Image, ScrollView, StatusBar} from "react-native";
import { Button } from 'react-native-paper';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import Dhomecarddata from "./Dhomecarddata";
import Dhomecard from "./Dhomecard";


const Dhome = ({ navigation }) => {
  return (<>
    <SafeAreaView >
    <ScrollView >
   <View style={styles.container}>
    <Text style={styles.h1}>Depressor</Text>
    <Text style={styles.h5}>It provides family to the alone</Text>
    <Text style={styles.t1}>If you are just passing your life Stop!</Text>
    <Text style={styles.t1}>Live your Life</Text>
    <Text></Text>
     <Button style={styles.getbutt}>
    <Text style={{color:'white'}}>Sign/Login</Text>
  </Button><Text></Text>
   <Image source = {{uri:'https://miro.medium.com/max/1200/1*_MPqL6ZwdB06y-5HXdvsQg.gif'}}
   style = {{ width: 200, height: 200 }}
   /><Text></Text>
   <Text style={styles.pinkheading}>What we can Provide?</Text>
    <Text style={styles.h5}>Hello guys!!!This is the website we have made for the people who are suffering from depression,anxiety,stress,tensions.We try our best approach to solve your problem. We have a large number of people who are relievers as well as your family.
          The people who joined us are of two types:Depressor and relievers.Depressors are the people who are suffering from these kind of depressions and sucidial thoughts.On the other hand Relievers are the people who cure your depression and suicidial thoughts.</Text>

           <Card>
              <Card.Cover source={{ uri: 'https://miro.medium.com/max/10708/0*VXd_38sPaQ2G7c6w' }} />
              <Text style={styles.cardtitle}>Dont Think Feel and create your family</Text>
          </Card>
          <Text></Text>

          <Text style={styles.pinkheading}>What we can Provide?</Text>
          <Text style={styles.h5}>Nope you dont have to do any hard work.</Text>
          <Text style={styles.h5}>Nope you dont have to think logically.</Text>
          <Text style={styles.h5}>Nope you dont have to invest money</Text>
          <Text style={styles.h5}>You dont have to think about your past.</Text>
          <Text style={styles.h5}>Nope you dont have to fear about your future.</Text>
          <Text style={styles.h5}>Simply Create your family.</Text>
          <Text style={styles.h5}>Sign in to create your family.</Text>
          <Text style={styles.h5}>You can join us as depressor or reliever or both.</Text>
          <Text style={styles.h5}>You can contribute Money to the people who need finanacial help.</Text>
          <Text style={styles.h5}>You can donate gifts to the depressors.</Text>
          <Text style={styles.h5}>You can chat with them to cure them.</Text>
          <Text style={styles.h5}>You can also write your story.</Text>
          <Text></Text>
          <Text style={styles.pinkheading}>Check these out...</Text>
        {Dhomecarddata.map((cvalue,index)=>{
          return(<Dhomecard key={cvalue.key} image={cvalue.img} head={cvalue.heading} description={cvalue.descript} />)
        })}

   </View>
    </ScrollView>
    </SafeAreaView>
  </>);
}

export default Dhome;

const styles=StyleSheet.create({
  h1:{
    color:'white',
    fontSize:25,
    marginLeft:10,
    marginTop:10
  },
  container:{
    backgroundColor:'#171717'
  },
  h5:{
    color:'white',
    marginLeft:10,
    textAlign:'justify'
  },
  t1:{
    color:'skyblue',
    marginLeft:10
  },
  getbutt:{
    width:150,
    backgroundColor:'dodgerblue',
    borderRadius:20
  },
  pinkheading:{
    color:'pink',
    marginLeft:10,

  },
  cardtitle:{
    fontWeight:'bold',
    marginLeft:10,
    textAlign:'center'
  }
})