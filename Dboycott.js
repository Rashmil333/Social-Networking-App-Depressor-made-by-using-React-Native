
import React from "react";
import {Text,View,StyleSheet} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// <Text style={styles.white}>hello from the yoga what side.</Text><Text></Text><Text></Text>
// 			<Text style={styles.h1}>ghgk</Text>
// 			<Card>
//     			<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

//   			</Card><Text></Text>
// <Text style={styles.white}><FontAwesome5 style={styles.heart} name={'check'} size={20}/> </Text><Text></Text>

const Dboycott=()=>{
	return(<>
			<View style={styles.container}>
			<Text style={styles.h2}>How to Boycott Bad Habits</Text>
			<Text style={styles.h1}>Identify your triggers</Text>
				<Text style={styles.white}><FontAwesome5 style={styles.heart} name={'check'} size={20}/>Reminder. This is a trigger, or cue, that could be a conscious behavior, such as flushing the toilet, or a feeling, such as nervousness. </Text><Text></Text>
				<Text style={styles.white}><FontAwesome5 style={styles.heart} name={'check'} size={20}/>Routine. This is the behavior associated with the trigger. Flushing the toilet cues you to wash your hands, while feeling nervous triggers biting your nails. Doing something over and over can make the behavior routine. </Text><Text></Text>
				<Text style={styles.white}><FontAwesome5 style={styles.heart} name={'check'} size={20}/> Reward. The reward associated with a behavior also helps make a habit stick. If you do something that causes enjoyment or relieves distress, the pleasurable release of dopamine in your brain can make you want to do it again.</Text><Text></Text>
				<Text style={styles.h1}>Focus on why you want to change</Text>
				<Text style={styles.white}>	Why do you want to break or change a certain habit? Research from 2012Trusted Source suggests it may be easier to change your behavior when the change you want to make is valuable or beneficial to you.

                       Take a few minutes to consider why you want to break the habit and any benefits you see resulting from the change. Listing these reasons may help you think of a few that hadn’t occurred to you yet.

                       For added motivation, write your reasons down on a piece of paper and keep it on your fridge, bathroom mirror, or another place where you’ll see it regularly.

                        Seeing the list can keep the change you’re trying to make fresh in your mind. If you do happen to fall back into the habit, your list reminds you why you want to keep trying.</Text><Text></Text><Text></Text>
                <Text style={styles.h1}>Enlist a friend’s support</Text>
                <Text style={styles.white}>If you and a friend or partner both want to break an unwanted habit, try to do it together.

                          Say you both want to stop smoking. Dealing with cravings on your own can be tough. Quitting along with a friend won’t make the cravings go away. But they might be easier to deal with when facing them with someone else.

                           Make it a point to cheer each other’s successes and encourage each other through setbacks.

                             A friend can still offer support even if they don’t have any habits they want to change. Consider telling a trusted friend about the habit you’re trying to break. They can encourage you in times of doubt and gently remind you of your goal if they notice you slipping back into old habits.</Text><Text></Text><Text></Text>
				
                <Text style={styles.h1}>Practice mindfulness</Text>
                <Text style={styles.white}>	Mindfulness can help you develop awareness around your thoughts, feelings, and actions. This practice involves simply observing impulses that relate to your habit without judging them or reacting to them.

                         As you become more aware of these routine behaviors and the triggers that lead to them, you may find it easier to consider other options, such as avoiding reminder cues or not acting on the urges.</Text><Text></Text><Text></Text>
			<Text style={styles.h1}>Replace the habit with a different one</Text>
			<Text style={styles.white}>	You might have an easier time breaking a habit if you replace the unwanted behavior with a new behavior, instead of simply trying to stop the unwanted behavior.

                        Say you want to stop reaching for candy when you’re hungry at work. If you simply try to avoid the candy dish, you might fall back into the habit when you can’t resist hunger. But bringing in a Tupperware of dried fruit and nuts to keep at your desk gives you another snack option.

                       As you repeat the new behavior, the impulse to follow the new routine develops. Eventually, after you see rewards from the new habit — more energy and less of a sugar crash — the urge to keep doing this behavior might outweigh the desire to pursue the old habit.

</Text><Text></Text><Text></Text>
			<Text style={styles.h1}>Replace the habit with a different one</Text>
			<Text style={styles.white}>hello from the yoga what side.</Text><Text></Text><Text></Text>
			<Text style={styles.white}><FontAwesome5 style={styles.heart} name={'check'} size={20}/>Want to break the habit of drinking soda with every meal? Try leaving small stickers on your refrigerator that you’ll see when you go to reach for a can </Text><Text></Text>
			<Text style={styles.white}><FontAwesome5 style={styles.heart} name={'check'} size={20}/>Trying to remember to turn off lights when you leave a room? Leave a note for yourself on the light switch or door. </Text><Text></Text>
			<Text style={styles.white}><FontAwesome5 style={styles.heart} name={'check'} size={20}/>Want to start keeping your keys in a designated place so you stop losing them frequently? Leave a dish for your keys in the first place you’ll see it when you return home. </Text><Text></Text>
			<Text style={styles.footer}>The End</Text><Text></Text><Text></Text>
			</View>
		</>)
}

export default Dboycott;

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
	h2:{
		fontSize:30,
		color:'pink',

		fontFamily:'IndieFlower'
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