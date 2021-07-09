
import React from "react";
import {Text,View,StyleSheet} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

// <Text style={styles.white}>hello from the yoga what side.</Text><Text></Text><Text></Text>
// 			<Text style={styles.h1}>ghgk</Text>
// 			<Card>
//     			<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

//   			</Card><Text></Text>

const Dmedihow=()=>{
	return(<>
			<View style={styles.container}>
			<Text style={styles.h1}>How to Meditate</Text>
			<Card>
     			<Card.Cover source={{ uri: 'https://isha.sadhguru.org/yoga/wp-content/uploads/2020/05/How-to-Meditate.jpg' }} />

   			</Card><Text></Text>
   			<Text style={styles.white}> The moment we utter the word “meditation,” there are all kinds of misconceptions about it. First of all the English word “meditation” doesn’t mean anything in the sense, if you close your eyes and sit, in English we call it “meditation.” You can sit with your eyes closed and do many things. There are many dimensions. You can do japa, tapa, dharana, dhyana, samadhi, shoonya. Or you might have just mastered the art of sleeping in vertical postures!

So what is this thing that we call as meditation? Generally we assume that people are referring to what is known as dhyan or dhyana. In that context of referring to dhyan as meditation, it is not something that you can do. Nobody can do meditation. The reason why most people who have tried meditation have come to the conclusion that it’s very difficult or impossible is because they are trying to do it.</Text><Text></Text><Text></Text>
			<Text style={styles.white}>You cannot do meditation but you can become meditative. Meditation is a certain quality. It is not a certain act. If you cultivate your body, your mind, your energies and your emotions to a certain level of maturity, meditation will naturally happen. It is just like if you keep the soil fertile, if you give it the necessary manure and water and if the right kind of seed is there, it will grow and bloom into flowers and fruits.

Flowers and fruits will come out of a plant not because you want it, but simply because you created the necessary, conducive atmosphere. Similarly, if you create the necessary atmosphere within yourself, on all the four dimensions of who you are, then meditation will naturally flower within you. It is a certain fragrance that one can enjoy within himself.</Text><Text></Text><Text></Text>
			<Text style={styles.h1}>Meditation and the Mind</Text>
			<Text style={styles.white}>The mind does not like meditation because if you keep the body still, the mind will also naturally become still. This is why so much stress has been laid in yoga on hatha yoga and asanas. If you just learn how to keep your body absolutely still, then your mind will also become still. I want you to just observe yourself and see how many unnecessary movements your body makes when you stand, sit or speak. If you look at your life, you will see that more than half the time is taken up in these things that you yourself don’t care for.

If you keep the body still, the mind will slowly start collapsing and the mind knows that it will become enslaved if it allows this. The main aspect of meditation is, right now your mind is the boss and you are the slave. As you meditate and become more meditative, you will become the boss and your mind will become the slave and that is how it should always be. If you don’t know how to keep the mind as a slave, it will put you through all kinds of endless suffering. If you allow the mind to rule, it is a terrible master. But as a slave, the mind is wonderful – it is a miraculous slave.</Text><Text></Text><Text></Text>
	<Text style={styles.footer}>All the Credits goes to Sadhguru!!!</Text><Text></Text><Text></Text>
			</View>
		</>)
}

export default Dmedihow;

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