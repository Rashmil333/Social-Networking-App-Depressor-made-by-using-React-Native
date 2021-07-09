import React from "react";
import {Text,View,StyleSheet,Image,ImageBackground} from "react-native";
import { ActivityIndicator, Colors } from 'react-native-paper';

const Dwelcomeapp=()=>{
	return(<>
		<ImageBackground 
    source={{uri:'https://www.sketchappsources.com/resources/source-image/principle-icon.png'}}
    style={{width: '100%', height:'100%'}} >
		<View>
		
			<Text style={styles.h1}>Depressor</Text>
			<Text style={styles.heading}>It provides family to the alone</Text>
            <ActivityIndicator style={{marginTop:15}}  animating={true} size={50} color={Colors.white} />
        </View>
        </ImageBackground>

            </>)
}

export default Dwelcomeapp;
const styles=StyleSheet.create({
	h1:{
		color:'white',
		textAlign:'center',
		fontSize:30,
		fontFamily:'QuickSand',
		marginTop:580,
		fontWeight:'bold',


	},
	heading:{
		color:'white',
		marginLeft:'28%',

	}
})