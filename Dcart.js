import React,{useState,useEffect} from "react";
import {StyleSheet,Image,Text,View, ScrollView, StatusBar,SafeAreaView,ImageBackground} from "react-native";
import { BottomNavigation } from 'react-native-paper';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Alert, Modal, Pressable} from "react-native";
import { TextInput } from 'react-native-paper';
import Dbuybook from "./Dbuybook";
import Dbuycard from "./Dbuycard";
import Dcartcard from "./Dcartcard";


const Cart = (props) =>{
	 const [modalVisible1, setModalVisible1] = useState(false);
	 const modalstate=(id)=>{
    setModalVisible1(!modalVisible1);
  }


  const [text, setText] = React.useState('');
const bada=()=>{
  alert("added to cart")
}
 const [citem,setcitem]=useState([]);

  useEffect(async()=>{
    const response = await fetch('http://10.0.2.2:3002/getdata');
    const res = await response.json();
    setcitem(res.cart);
   
   
   
   
    
  });


 
	return(<>
		<SafeAreaView>
			<ScrollView>
			
  {Dbuybook.map((cvalue,index)=>{
        return(<Dcartcard key={index} tag="cart" name1={cvalue.item_name1}  image1={cvalue.img1}  costa1={cvalue.cost1} />)
      })}



  {citem.map((cvalue,index)=>{
        return(<Dcartcard key={index}  tag="cart" name1={cvalue.product_name}  image1={cvalue.img} costa1={cvalue.cost}   />)
      })}
			</ScrollView>
		</SafeAreaView>

		 
		
			
		</>);
}

const Orders = () => {


	const [citem,setcitem]=useState([]);

  useEffect(async()=>{
    const response = await fetch('http://10.0.2.2:3002/getdata');
    const res = await response.json();
    setcitem(res.orders);
   
   
   
   
    
  });

	return(<>
	<SafeAreaView>
			<ScrollView>
			
  {Dbuybook.map((cvalue,index)=>{
        return(<Dcartcard key={index} tag="order" name1={cvalue.item_name1}  image1={cvalue.img1}  costa1={cvalue.cost1} />)
      })}
    {citem.map((cvalue,index)=>{
        return(<Dcartcard key={index} tag="order" name1={cvalue.product_name}  image1={cvalue.img} costa1={cvalue.cost} phone={cvalue.Mobile_no} 
        address={cvalue.delivery_add}    />)
      })}
    

			</ScrollView>
		</SafeAreaView>
			
		</>)
}


const Dcart=()=>{

	 const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Cart', icon: 'check' },
    { key: 'albums', title: 'Orders', icon: 'check' },
   
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: Cart,
    albums: Orders,

  });

	return(<>
			
			  <BottomNavigation
		 barStyle={{ backgroundColor: '#7b0252' }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />

			
		</>)
}


export default Dcart;
const styles=StyleSheet.create({
	pic:{
		width:150,
		height:150
	},
	butto:{
		backgroundColor:"#940262",
		marginLeft:10
	}
})