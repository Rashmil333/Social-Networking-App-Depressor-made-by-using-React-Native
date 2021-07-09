
import React from "react";
import {Text,View,StyleSheet} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// <Text style={styles.white}>hello from the yoga what side.</Text><Text></Text><Text></Text>
// 			<Text style={styles.h1}>ghgk</Text>
// 			<Card>
//     			<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

//   			</Card><Text></Text>

const Dincorpo=()=>{
	return(<>
			<View style={styles.container}>
			<Text style={styles.h1}>Tiny Self-Care Ideas for the Mind:</Text><Text></Text>
			<Text style={styles.white}><FontAwesome5 style={styles.heart} name={'heart'} size={20}/> Start a compliments file. Document the great things people say about you to read later.</Text><Text></Text>
			<Text style={styles.white}><FontAwesome5 style={styles.heart} name={'heart'} size={20}/>  Scratch off a lurker on your to-do list, something that’s been there for ages and you’ll never do.</Text><Text></Text>
			<Text style={styles.white}><FontAwesome5 style={styles.heart} name={'heart'} size={20}/> Change up the way you make decisions. Decide something with your heart if you usually use your head. Or if you tend to go with your heart, decide with your head.</Text><Text></Text>
			<Text style={styles.white}><FontAwesome5 style={styles.heart} name={'heart'} size={20}/> Go cloud-watching. Lie on your back, relax, and watch the sky.</Text><Text></Text>
			<Text style={styles.white}> <FontAwesome5 style={styles.heart} name={'heart'} size={20}/>Goof around for a bit. Schedule in five minutes of “play” (non-directed activity) several times throughout your day.</Text><Text></Text>
			<Text style={styles.white}><FontAwesome5 style={styles.heart} name={'heart'} size={20}/> Get out of your comfort zone, even if it’s just talking to a stranger at the bus stop.</Text><Text></Text>
			<Text style={styles.white}><FontAwesome5 style={styles.heart} name={'heart'} size={20}/> Get out of your comfort zone, even if it’s just talking to a stranger at the bus stop.</Text><Text></Text>
			<Text style={styles.white}><FontAwesome5 style={styles.heart} name={'heart'} size={20}/> Edit your social media feeds, and take out any negative people. You can just “mute” them; you don’t have to delete them. </Text><Text></Text>
			<Text style={styles.h1}>Tiny Self-Care Ideas for the Body</Text>
			<Text style={styles.white}><FontAwesome5 style={styles.heart} name={'heart'} size={20}/> Give your body ten minutes of mindful attention. Use the body scan technique to check in with each part of your body.</Text><Text></Text>
			<Text style={styles.white}><FontAwesome5 style={styles.heart} name={'heart'} size={20}/>Oxygenate by taking three deep breaths. Breathe into your abdomen, and let the air puff out your stomach and chest. </Text><Text></Text>
			<Text style={styles.white}><FontAwesome5 style={styles.heart} name={'heart'} size={20}/>Take a quick nap. Ten to twenty minutes can reduce your sleep debt and leave you ready for action. </Text><Text></Text>
			<Text style={styles.h1}>Tiny Self-Care Ideas for the Soul</Text>
			<Text style={styles.white}><FontAwesome5 style={styles.heart} name={'heart'} size={20}/>Imagine you’re your best friend. If you were, what would you tell yourself right now? Look in the mirror and say it. </Text><Text></Text>
			<Text style={styles.white}><FontAwesome5 style={styles.heart} name={'heart'} size={20}/>Help someone. Carry a bag, open a door, or pick up an extra carton of milk for a neighbor. </Text><Text></Text>
			<Text style={styles.white}><FontAwesome5 style={styles.heart} name={'heart'} size={20}/> Check in with your emotions. Sit quietly and just name without judgment what you’re feeling. </Text><Text></Text>
			<Text style={styles.footer}>All the Credits goes to Sadhguru!!!</Text><Text></Text><Text></Text>
			</View>
		</>)
}

export default Dincorpo;

const styles=StyleSheet.create({
	white:{
		color:'white',
		textAlign:'justify',
		marginRight:9
	},
	h1:{
		fontSize:20,
		color:'pink'
	},
	container:{
		marginLeft:6,
		marginTop:10,
		textAlign:'justify'
	},
	footer:{
		color:'dodgerblue',
		textAlign:'center'

	},
	heart:{
		color:'red'
	}
})