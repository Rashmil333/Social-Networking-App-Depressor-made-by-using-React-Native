
import React from "react";
import {Text,View,StyleSheet} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

// <Text style={styles.white}>hello from the yoga what side.</Text><Text></Text><Text></Text>
// 			<Text style={styles.h1}>ghgk</Text>
// 			<Card>
//     			<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

//   			</Card>

const Dyogabenifits=()=>{
	return(<>
			<View style={styles.container}>
				<Text style={styles.h1}>Benefits of Yoga</Text>
				<Text style={styles.white}>Essentially, if your energy body is balanced and fully activated, there can be no physical or psychological ailment in you, it’s simply not possible. I can show you hundreds and thousands of people who walked out of their ailments completely, simply – not by any treatment – simply by bringing a certain balance to the system. There are any number of people. It’s not some kind of a miraculous thing, it is just a deeper understanding of the system and the system is a miracle, there’s no question about that. This is a miracle, isn’t it? No? Yes or no? It’s a phenomenal miracle, isn’t it? So the magic is already there, you just have to play with it right, that’s all. You don’t have to do any extra magic. Already everything is magical, isn’t it so in the existence? Yes or no? Every atom is a magic by itself because we’ve still not figured anything in its entirety. So very simple, you don’t have to do any great yoga of twisting yourself upside down and all that. Simple things; if you breathe right and keep your body in a certain level of balance, you will see there is no need to have any kind of ailments.</Text>
				<Text></Text><Text></Text>
				<Text style={styles.white}>Ailments are of two kinds – one is infectious; infectious means it’s an invasion from outside. That we have to deal with medicine – for that you must go to the doctor. But over seventy percent of the ailments on the planet are chronic in nature. That means you are producing your own ailment, self-help this is called. [Laughs] Because nobody is bothering you, you want to do something to yourself. So, most… over seventy percent of the ailments are because of self-help. People are generating ailments from within and this cannot be cured by any medicine. You can only manage it, you can never cure it but the very source of making this body is within us, it comes from within. Your heart, liver, kidney everything from…manufactured from within, isn’t it? If you do certain simple things, if you allow, fixing also happens from within and every human being is capable of this. It’s just that they’ve never paid attention to it. Only advantage is if you go to a doctor, he will do it; these things you must do, that’s the only problem.</Text><Text></Text><Text></Text>
			<Text style={styles.footer}>All the Credits goes to Sadhguru!!!</Text><Text></Text><Text></Text>
			</View>
		</>)
}

export default Dyogabenifits;

const styles=StyleSheet.create({
	white:{
		color:'white',
		textAlign:'justify',
		fontFamily:'QuickSand',
		marginRight:9
	},
	h1:{
		fontSize:20,
		color:'pink'
	},
	container:{
		marginLeft:6,
		marginTop:10
	},
	footer:{
		color:'dodgerblue',
		textAlign:'center'

	}
})