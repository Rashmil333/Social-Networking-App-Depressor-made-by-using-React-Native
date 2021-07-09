import React from "react";
import {Text,View,StyleSheet} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

// <Text style={styles.white}>hello from the yoga what side.</Text>
// 			<Text style={styles.h1}>ghgk</Text>
// 			<Card>
//     			<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

//   			</Card>

const Dyogawhat=()=>{
	return(<>
			<View style={styles.container}>
				<Text style={styles.h1}>What is Yoga</Text>
				<Text style={styles.white}>What is Yoga, exactly? Is it just an exercise form? Is it a religion, a philosophy, an ideology? Or is it something else entirely? The word "Yoga" literally means "union". In this article, Sadhguru offers the following Yoga definition; essentially, "that which brings you to reality..</Text>
				<Card>
     				<Card.Cover source={{ uri: 'https://isha.sadhguru.org/yoga/wp-content/uploads/2020/05/meaning-of-yoga.jpg' }} />

  				</Card>
  				<Text style={styles.white}>Essentially in the tradition, once we attach the word “Yoga” to anything, it indicates that it is a complete path by itself. We say hatha Yoga, but we will not say asana Yoga. Of course, if you come from the United States, they say anything!
			If it is a complete path by itself, how should it be approached? If it was just a simple practice or an exercise, you could approach it one way. If it was an art form or just entertainment, it could be approached another way. I am using all these words because they are in usage in today’s world. People say “recreational Yoga,” “health Yoga,” people refer to it as an art form – they think they are doing a service to Yoga by saying it is an art form. No. The moment you attach the word “Yoga,” it indicates it is a complete path by itself.</Text>
			<Text></Text><Text></Text>
			<Text style={styles.white}>The word “Yoga” essentially means, “that which brings you to reality”. Literally, it means “union.” Union means it brings you to the ultimate reality, where individual manifestations of life are surface bubbles in the process of creation. Right now, a coconut tree and a mango tree have popped up from the same earth. From the same earth, the human body and so many creatures have popped up. It is all the same earth.</Text>
			<Text></Text><Text></Text>
			<Text style={styles.white}>Yoga means to move towards an experiential reality where one knows the ultimate nature of the existence, the way it is made.
Yoga refers to union not as an idea, a philosophy or as a concept that you imbibe. As an intellectual idea, if you vouch by the commonness of the universe, it may make you popular in a tea party, it may give you a certain social status, but it does not serve any other purpose. You will see, when things come down to even money – it does not even have to boil down to life and death – even for money, “This is me, that is you.” The boundary is clear; there is no question of you and me being one.
It actually causes damage to the individual if you intellectually see everything is one. People do all kinds of silly things because they got this idea that everybody is one, before somebody teaches them a good lesson and then they see, “This is me, that is you. No way to be one.”

If it becomes an experiential reality, it will not bring forth any immature action. It will bring forth a tremendous experience of life. Individuality is an idea. Universality is not an idea, it is a reality. In other words, Yoga means you bury all your ideas.</Text>
			<Text style={styles.footer}>All the Credits goes to Sadhguru!!!</Text>
			<Text></Text><Text></Text>
			</View>
		</>)
}

export default Dyogawhat;

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
		marginTop:10
	},
	footer:{
		color:'dodgerblue',
		textAlign:'center'

	}
})