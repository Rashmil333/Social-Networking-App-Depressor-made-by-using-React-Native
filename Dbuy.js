import React,{useState} from "react";
import {Text,View} from "react-native";
import { BottomNavigation } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {StyleSheet,Image, ScrollView, StatusBar,SafeAreaView,ImageBackground} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Dbuycard from "./Dbuycard";
import Dbuybook from "./Dbuybook";
import Dbuymedicines from "./Dbuymedicines";
import Dbuyclothes from "./Dbuyclothes";

const Book =()=>{
	return(<>
		<SafeAreaView >
    	<ScrollView >
    	<View style={styles.container}>
			{Dbuybook.map((cvalue,index)=>{
        return(<Dbuycard key={index} name1={cvalue.item_name1} name2={cvalue.item_name2} image1={cvalue.img1} image2={cvalue.img2} costa1={cvalue.cost1} costa2={cvalue.cost2}/>)
      })}
		</View>
		</ScrollView>
    	</SafeAreaView>
		</>)
}

const Medicines =()=>{
  return(<>
    <SafeAreaView >
      <ScrollView >
      <View style={styles.container}>
      {Dbuymedicines.map((cvalue,index)=>{
        return(<Dbuycard key={index} name1={cvalue.item_name1} name2={cvalue.item_name2} image1={cvalue.img1} image2={cvalue.img2} costa1={cvalue.cost1} costa2={cvalue.cost2}/>)
      })}
    </View>
    </ScrollView>
      </SafeAreaView>
    </>)
}

const Clothes =()=>{
  return(<>
    <SafeAreaView >
      <ScrollView >
      <View style={styles.container}>
      {Dbuyclothes.map((cvalue,index)=>{
        return(<Dbuycard key={index} name1={cvalue.item_name1} name2={cvalue.item_name2} image1={cvalue.img1} image2={cvalue.img2} costa1={cvalue.cost1} costa2={cvalue.cost2}/>)
      })}
    </View>
    </ScrollView>
      </SafeAreaView>
    </>)
}

const Dbuy=()=>{
	  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Books', icon: 'check' },
    { key: 'albums', title: 'Medicines', icon: 'check' },
    { key: 'recents', title: 'Clothes', icon: 'check' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: Book,
    albums: Medicines,
    recents: Clothes,
  });

	return(<>
		 <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    barStyle={{ backgroundColor: '#734967' }}
    />
		</>)

}

export default Dbuy;

const styles=StyleSheet.create({
	card:{
		width:'48%',
		marginLeft:5,

	},
	container:{
		backgroundColor:'#3D2A35',

	}
})