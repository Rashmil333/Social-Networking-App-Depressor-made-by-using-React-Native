
import React from "react";
import {Text,View,StyleSheet} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

// <Text style={styles.white}>hello from the yoga what side.</Text><Text></Text><Text></Text>
// 			<Text style={styles.h1}>ghgk</Text>
// 			<Card>
//     			<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

//   			</Card><Text></Text>

const Dyogahistory=()=>{
	return(<>
			<View style={styles.container}>
			<Text style={styles.h1}>History of Yoga</Text>
			<Text style={styles.white}>Explore yoga history with this collection of insightful articles from Sadhguru spanning from Adiyogi and the origin of yoga over 15,000 years ago to present day. Gain a deeper understanding of yoga and learn about various masters, gurus, sages and saints throughout the ages.</Text><Text></Text><Text></Text>
			<Text style={styles.h1}>Adiyogi – The First Yogi</Text>
			<Text style={styles.white}>In the yogic culture, Shiva is not known as a god, but as the Adiyogi or the first yogi – the originator of yoga. He was the one who first put this seed into the human mind. According to the yogic lore, over fifteen thousand years ago, Shiva attained to his full enlightenment and abandoned himself in an intense ecstatic dance upon the Himalayas. When his ecstasy allowed him some movement, he danced wildly. When it became beyond movement, he became utterly still.</Text><Text></Text><Text></Text>
			<Text style={styles.white}>People saw that he was experiencing something that nobody had known before, something that they were unable to fathom. Interest developed and people came wanting to know what this was. They came, they waited and they left because the man was oblivious to other people’s presence. He was either in intense dance or absolute stillness, completely uncaring of what was happening around him. Soon, everyone left…</Text><Text></Text><Text></Text>
			<Text style={styles.white}>Except for seven men.</Text><Text></Text><Text></Text>
			<Text style={styles.white}>These seven people were insistent that they must learn what this man had in him, but Shiva ignored them. They pleaded and begged him, “Please, we want to know what you know.” Shiva dismissed them and said, “You fools. The way you are, you are not going to know in a million years. There is a tremendous amount of preparation needed for this. This is not entertainment.”
			So they started preparing. Day after day, week after week, month after month, year after year, they prepared. Shiva just chose to ignore them. On a full moon day, after eighty-four years of sadhana, when the solstice had shifted from the summer solstice to the winter solstice – which in this tradition is known as Dakshinayana – the Adiyogi looked at these seven people and saw that they had become shining receptacles of knowing. They were absolutely ripe to receive. He could not ignore them anymore. They grabbed his attention.</Text><Text></Text><Text></Text>
			<Card>
     			<Card.Cover source={{ uri: 'http://isha.sadhguru.org/blog/wp-content/uploads/2012/10/dsc_0157.jpg' }} />

   			</Card><Text></Text>
   			<Text style={styles.white}>He watched them closely for the next few days and when the next full moon rose, he decided to become a Guru. The Adiyogi transformed himself into the Adi Guru; the first Guru was born on that day which is today known as Guru Purnima. On the banks of Kanti Sarovar, a lake that lies a few kilometers above Kedarnath, he turned South to shed his grace upon the human race, and the transmission of the yogic science to these seven people began. The yogic science is not about a yoga class that you go through about how to bend your body – which every new born infant knows – or how to hold your breath – which every unborn infant knows. This is the science of understanding the mechanics of the entire human system.</Text><Text></Text><Text></Text>
			<Text style={styles.white}>	After many years, when the transmission was complete, it produced seven fully enlightened beings – the seven celebrated sages who are today known as the Saptarishis, and are worshipped and admired in Indian culture. Shiva put different aspects of yoga into each of these seven people, and these aspects became the seven basic forms of yoga. Even today, yoga has maintained these seven distinct forms.</Text><Text></Text><Text></Text>
			<Card>
     			<Card.Cover source={{ uri: 'http://isha.sadhguru.org/blog/wp-content/uploads/2012/11/1.jpg' }} />

   			</Card><Text></Text>
   			<Text style={styles.white}>The Saptarishis were sent in seven different directions to different parts of the world to carry this dimension with which a human being can evolve beyond his present limitations and compulsions. They became the limbs of Shiva, taking the knowing and technology of how a human being can exist here as the Creator himself, to the world. Time has ravaged many things, but when the cultures of those lands are carefully looked at, small strands of these people’s work can be seen, still alive. It has taken on various colors and forms, and has changed its complexion in a million different ways, but these strands can still be seen.
			The Adiyogi brought this possibility that a human being need not be contained in the defined limitations of our species. There is a way to be contained in physicality but not to belong to it. There is a way to inhabit the body but never become the body. There is a way to use your mind in the highest possible way but still never know the miseries of the mind. Whatever dimension of existence you are in right now, you can go beyond that – there is another way to live. He said, “You can evolve beyond your present limitations if you do the necessary work upon yourself.” That is the significance of the Adiyogi.</Text><Text></Text><Text></Text>
			<Text style={styles.footer}>All the Credits goes to Sadhguru!!!</Text><Text></Text><Text></Text>
			</View>
		</>)
}

export default Dyogahistory;

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