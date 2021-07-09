import React from "react";
import {Text,View,StyleSheet} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

// <Text style={styles.white}>hello from the yoga what side.</Text><Text></Text><Text></Text>
// 			<Text style={styles.h1}>ghgk</Text>
// 			<Card>
//     			<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

//   			</Card><Text></Text>
// <Text style={styles.footer}>All the Credits goes to Sadhguru!!!</Text>
const Dmedichit=()=>{
	return(<>
			<View style={styles.container}>
				<Text style={styles.h1}>Guided Meditations – Isha Kriya and Chit Shakti</Text>
				<Card>
     			<Card.Cover source={{ uri: 'https://isha.sadhguru.org/yoga/wp-content/uploads/2020/05/meditation.jpg' }} />

   			</Card><Text></Text>
   			<Text style={styles.h1}>Isha Kriya</Text>
   			<Text style={styles.white}>“Isha” means that which is the source of creation. “Kriya” means an inward action towards that. Isha Kriya is a simple yet powerful tool to move from untruth to truth.” Sadhguru Rooted in the timeless wisdom of the yogic sciences, Isha Kriya is a simple yet potent process created by Sadhguru. Available for free as a guided meditation with an instructional video and downloadable instructions, or through one of the free immersive workshops conducted globally, it has the potential to transform the life of anyone who is willing to invest just 12 minutes a day. The purpose of Isha Kriya is to help an individual get in touch with the source of his existence, to create life according to his own wish and vision. Daily practice of Isha Kriya brings health, dynamism, peace and wellbeing. It is a powerful tool to cope with the hectic pace of modern life.</Text><Text></Text><Text></Text>
   			<Text style={styles.h1}>One Drop of Spirituality</Text>
   			<Text style={styles.white}>Today, for most people, the word “yoga” usually conjures up images of twisting their body into impossible postures. The physical aspect of yoga is only one facet of this multi-dimensional science. Yoga is a technology to bring the body and mind to the peak of their capabilities – allowing one to live life to the fullest. It is the vision of Sadhguru to offer “one drop of spirituality” to every individual. Through the Isha Kriya guided meditation, the possibilities of a spiritual process, which were once available only to yogis and ascetics, are now being offered to every human being in the comfort of their own home.</Text><Text></Text><Text></Text>
			<Text style={styles.h1}>Chit Shakti</Text>		
			<Text style={styles.white}>	“Once your thought, emotion and energies are organized, your very body will also get organized. Once all these four are organized in one direction, your ability to create and manifest what you want is phenomenal.” Sadhguru Everything that human beings have created on this planet was essentially first created in our minds. So how we organize and focus our minds will decide the direction our life flows. Using the power of the mind to create what one wants in his life is called Chit Shakti. These four Chit Shakti guided meditations will help you to manifest love, health, peace and success in your life. Each one of us has desires, our very own list of dreams and longings. Creation may have its own blueprint for us, but our personal desires cannot be easily wished away. They may be extravagant or mundane, ambitious or trivial, they may be inconvenient, they may be too personal to share, but they are ours. And for us, they are real, they are precious, they are urgent and deeply significant. Here is a rare offering from Sadhguru, a mystic who embodies the wisdom and clarity of profound realization. It is an offering that enables each one of us to become our own alchemist, that empowers us to transform long cherished desires into reality. Sadhguru offers this with the intention that once these desires are fulfilled, we will turn towards the larger goal of our ultimate wellbeing</Text><Text></Text><Text></Text>
			<Text style={styles.footer}>All the Credits goes to Sadhguru!!!</Text>
			<Text></Text><Text></Text>
			
			</View>
		</>)
}

export default Dmedichit;

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