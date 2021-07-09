import React,{useState} from "react";
import {StyleSheet,Image, ScrollView, StatusBar,Text,View,SafeAreaView,ImageBackground} from "react-native";
import {Button} from "react-native-paper";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Dyogawhat from "./Dyogawhat";
import Dyogatypes from "./Dyogatypes";
import Dyogabenifits from "./Dyogabenifits";
import Dyogahistory from "./Dyogahistory";
import Dyogamyths from "./Dyogamyths";
import Dmedichit from "./Dmedichit";
import Dmedibeni from "./Dmedibeni";
import Dmedihow from "./Dmedihow";
import Dmedisci from "./Dmedisci";
import Dincorpo from "./Dincorpo";
import Dboycott from "./Dboycott";
import Dselfhealstart from "./Dselfhealstart";

const imageskyblue="https://wallpaperaccess.com/full/175987.jpg";
const imageyellow="https://i.pinimg.com/originals/97/25/ab/9725ab81dced98914f64f21978dfcf56.jpg"
const imageblue="https://i.pinimg.com/originals/36/f0/94/36f0949c623b61a235fd6645fa507236.jpg"
const imagered="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDxUPDw8VFRUVFRUVFRUVFRUVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0NDjcZFRkrKysrKysrKystKysrLSsrKysrKysrKy0rKysrKystKysrKysrKystKysrKysrKysrK//AABEIALEBHAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAACAQADB//EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABgBAQEBAQEAAAAAAAAAAAAAAAECAAMF/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwDySKkKOL0osJIsC4UWJCgXCixIUC4UWNIsC4sKJCC4xY0WQKkbFWRcCsRsLGxjg4xYlZsHEsKowwLEpJhTYFHDsSlFc6lh0KUUaNKjSijRpUaUUalKiUUai1ClYsSFGMWFBhQLhQoMKBcKFBhwLiwokKBcWFIkKJXFkKJCgXGXGisuMuLjYDg41LErNgjTqYU2BRp0aU0KlIaUULBp0aXOhRp0KUUaNKjSijRpVKUUaJVCmtCgwozQosSLAuHCgwoFwoUGFAuFCgwol0hQoMOBcWFEiwLhRcSEFxlZWUiVa1YDRpUayaNSlRpRQqUqNKKFGlRqkUaNKjSijQp0aXOjRpUaUUai1CloUGFGaFFgwoFwocCFAuHCgQ4FwoUGFEukKFBhQLhQoMKULhKMXQqFFSVtZS6jamszUatGlNRKtG1kUaNK0aUUaNKjVIo0aVClzqUKVGlFGpVqUoo1FqFLRYkWM0KFBiwKhwoEKBcOFAhQLhwoEKUOkOEBQLhylKEqwLhroxdCtJR1tY6WomprNq6lraLJtajVGlNahSo0oo0aVClFSjVo0oqUaVGlFGpVEoqUVQoaKkWM0KFBiwLhwoEKBUOLBlXQuHCgSlAuHCgQoFynFDV0KlOVQXWVp62jraDpalTW0tq2ompaw1rUraJTa1GraNrItSpWtGqRWo1aNZFSjVo0pqVKtGlFSo1YpQoMVgUKAUC4UKAUZUOVYMWBcOUpXOUpQqU5SlBdC5TKUJV0KlOVtHW1jpto62g6Wto61pbS0dTU1hq2pUqWsm1qmto2lNrUatG0otai1QpqUaqUoqCtQpqVGZkpFRWYosFWMIghBUKFAWBcpwpQ1ZWVKcLXMtCpTlWUNWUK0tXR1tY6etoa2s2lq6GtrNpampqazaupampaU6to1k1k2talqWpaU2tRqjSm1qmtUrJqIyFLI1ZkszMWVRIFVFYyj1RlXQrSi6MWUGU9XQ1dZWnq6GrKFaWroausdLW0dZm09TR1tZtLU1NTWGrqJrWka2praOsNXUtTUtKdW0W1NZLalapSlkZGDMzEMzMzMqMGVUZiSwVZRKMUHSWDG1jpqC6FaS6GqzaWto62sdLW0dbWbS1NTU1hq62jrMNVEQjVRGrDW1GQpZGRg1ZmIZmZmZmZmZmYMyozMqirEtbRVjpaujrMdPW0dbQdPW0dbWOlraLazaTDrazaWpqa2sNXUTWZtXU1G0jWSsjBUZGDMzMGZmZmZmZmaMxZmZgzMzFkJmDMsRmKqzMWZmYq0ZgyszFmRmDNUZizMzMEZGZmZmYIzMQzMwZkVizNFZmf/9k=";
const imageblack="https://i.pinimg.com/originals/4f/6d/05/4f6d052bb1b26150115888ea06d4c106.jpg";
const Dselfhealing=()=>{
	const [yoga,setyoga]=useState(1);
	const [medi,setmedi]=useState(1);
	const [theme,settheme]=useState(1);
	const [boycott,setboycott]=useState(1);
	const [incorpo,setincorpo]=useState(1);
	const [kit,setkit]=useState(0);
	const [content,setcontent]=useState("blank");
	const [img_back,setimg_back]=useState("black");
	return(<>
		
		<View style={styles.container}>
		<FontAwesome5 style={styles.bookicon} name={'book'} size={20} onPress={()=>setkit(kit+1)}/>
		<Text style={styles.heading}>Kits</Text>
   	</View>
   	{kit%2==0?
   	<>

   	<View style={styles.view}>
   		<Button style={styles.butto} onPress={()=>setyoga(yoga+1)} ><Text style={styles.topic}><Text style={styles.white}><FontAwesome5 style={styles.bookicon} name={'info'} size={20}/><Text>   </Text>Yoga  </Text></Text></Button>
   			{yoga%2==0?
   				<>
   				<Button onPress={()=>setcontent("Dyogawhat")}><Text style={styles.subtopic}><Text style={styles.white}><FontAwesome5 style={styles.checko} name={'check'} size={20}/><Text>   </Text>What is Yoga?  </Text></Text></Button>
   			<Button onPress={()=>setcontent("Dyogahistory")}><Text style={styles.subtopic}><Text style={styles.white}><FontAwesome5 style={styles.checko} name={'check'} size={20}/><Text>   </Text>History of Yoga  </Text></Text></Button>
   			<Button onPress={()=>setcontent("Dyogatypes")}><Text style={styles.subtopic}><Text style={styles.white}><FontAwesome5 style={styles.checko} name={'check'} size={20}/><Text>   </Text>Types of Yoga  </Text></Text></Button>
   			<Button onPress={()=>setcontent("Dyogabenifits")}><Text style={styles.subtopic}><Text style={styles.white}><FontAwesome5 style={styles.checko} name={'check'} size={20}/><Text>   </Text>Benefits of Yoga  </Text></Text></Button>
   			<Button onPress={()=>setcontent("Dyogamyths")}><Text style={styles.subtopic}><Text style={styles.white}><FontAwesome5 style={styles.checko} name={'check'} size={20}/><Text>   </Text>Myths of Yoga  </Text></Text></Button>
   			</>:null}
   		<Button style={styles.butto} onPress={()=>setmedi(medi+1)} ><Text style={styles.topic}><Text style={styles.white}><FontAwesome5 style={styles.bookicon} name={'info'} size={20}/><Text>   </Text>Meditations  </Text></Text></Button>
   		{medi%2==0?
   				<>
   					<Button onPress={()=>setcontent("Dmedichit")}><Text style={styles.subtopic}><Text style={styles.white}><FontAwesome5 style={styles.checko} name={'check'} size={20}/><Text>   </Text>Guided Meditation  </Text></Text></Button>
   			<Button onPress={()=>setcontent("Dmedihow")}><Text style={styles.subtopic}><Text style={styles.white}><FontAwesome5 style={styles.checko} name={'check'} size={20}/><Text>   </Text>How to Meditate  </Text></Text></Button>
   			<Button onPress={()=>setcontent("Dmedibeni")}><Text style={styles.subtopic}><Text style={styles.white}><FontAwesome5 style={styles.checko} name={'check'} size={20}/><Text>   </Text>Benefits of Meditation  </Text></Text></Button>
   			<Button onPress={()=>setcontent("Dmedisci")}><Text style={styles.subtopic}><Text style={styles.white}><FontAwesome5 style={styles.checko} name={'check'} size={20}/><Text>   </Text>Science of Meditation  </Text></Text></Button>

   			
   			</>:null}
   		<Button style={styles.butto} onPress={()=>settheme(theme+1)} ><Text style={styles.topic}><Text style={styles.white}><FontAwesome5 style={styles.bookicon} name={'brush'} size={20}/><Text>   </Text>Themes  </Text></Text></Button>
   		{theme%2==0?
   				<>
   				<View style={{flexDirection:'row',marginLeft:100,marginTop:10,textAlign:'left'}}>
   				<Button  onPress={()=>setimg_back("red")} ><Text style={styles.themeitem}><Text style={styles.white}><FontAwesome5 style={styles.boxred} name={'box'} size={20}/><Text>   </Text> </Text></Text></Button>
   			<Button  onPress={()=>setimg_back("yellow")} ><Text style={styles.themeitem}><Text style={styles.white}><FontAwesome5 style={styles.boxyellow} name={'box'} size={20}/><Text>   </Text> </Text></Text></Button>
   			<Button  onPress={()=>setimg_back("blue")} ><Text style={styles.themeitem}><Text style={styles.white}><FontAwesome5 style={styles.boxblue} name={'box'} size={20}/><Text>   </Text>  </Text></Text></Button>
   			<Button  onPress={()=>setimg_back("skyblue")} ><Text style={styles.themeitem}><Text style={styles.white}><FontAwesome5 style={styles.boxskyblue} name={'box'} size={20}/><Text>   </Text> </Text></Text></Button>
   			</View>
   			</>:null}
   		<Button style={styles.butto} onPress={()=>setcontent("Dboycott")} ><Text style={styles.topic}><Text style={styles.white}><FontAwesome5 style={styles.bookicon} name={'info'} size={20}/><Text>   </Text>Boycott habits </Text></Text></Button>
   	
   		<Button style={styles.butto} onPress={()=>setcontent("Dincorpo")} ><Text style={styles.topic}><Text style={styles.white}><FontAwesome5 style={styles.bookicon} name={'info'} size={20}/><Text>   </Text>Incorporate Habits  </Text></Text></Button>
   		
   	</View>
   	</>:null}


   		{img_back=="black"?<>
   		<ImageBackground 
    source={{uri:imageblack}}
    style={{width: '100%', height:'100%'}} >
   	<View >
   		<SafeAreaView >
    	<ScrollView >
   			{content=="Dyogawhat"?<Dyogawhat/>:content=="Dyogatypes"?<Dyogatypes/>:content
   			=="Dyogabenifits"?<Dyogabenifits/>:content=="Dyogahistory"?<Dyogahistory/>:
   			content=="Dyogamyths"?<Dyogamyths/>:content=="Dmedichit"?<Dmedichit/>:content=="Dmedibeni"?<Dmedibeni/>:
   			content=="Dmedihow"?<Dmedihow/>:content=="Dmedisci"?<Dmedisci/>:content=="Dincorpo"?<Dincorpo/>:
   			content=="Dboycott"?<Dboycott/>:<>
          <Dselfhealstart/>
        </>}
   		</ScrollView>
    </SafeAreaView>
   	</View>
   	</ImageBackground>
   		</>:
   		img_back=="red"?<>
   		<ImageBackground 
    source={{uri:imagered}}
    style={{width: '100%', height:'100%'}} >
   	<View >
   		<SafeAreaView >
    	<ScrollView >
   			{content=="Dyogawhat"?<Dyogawhat/>:content=="Dyogatypes"?<Dyogatypes/>:content
   			=="Dyogabenifits"?<Dyogabenifits/>:content=="Dyogahistory"?<Dyogahistory/>:
   			content=="Dyogamyths"?<Dyogamyths/>:content=="Dmedichit"?<Dmedichit/>:content=="Dmedibeni"?<Dmedibeni/>:
   			content=="Dmedihow"?<Dmedihow/>:content=="Dmedisci"?<Dmedisci/>:content=="Dincorpo"?<Dincorpo/>:
   			content=="Dboycott"?<Dboycott/>:<>  <Dselfhealstart/></>}
   		</ScrollView>
    </SafeAreaView>
   	</View>
   	</ImageBackground>

   		</>:
   		img_back=="yellow"?<>
   		<ImageBackground 
    source={{uri:imageyellow}}
    style={{width: '100%', height:'100%'}} >
   	<View >
   		<SafeAreaView >
    	<ScrollView >
   			{content=="Dyogawhat"?<Dyogawhat/>:content=="Dyogatypes"?<Dyogatypes/>:content
   			=="Dyogabenifits"?<Dyogabenifits/>:content=="Dyogahistory"?<Dyogahistory/>:
   			content=="Dyogamyths"?<Dyogamyths/>:content=="Dmedichit"?<Dmedichit/>:content=="Dmedibeni"?<Dmedibeni/>:
   			content=="Dmedihow"?<Dmedihow/>:content=="Dmedisci"?<Dmedisci/>:content=="Dincorpo"?<Dincorpo/>:
   			content=="Dboycott"?<Dboycott/>:<>  <Dselfhealstart/></>}
   		</ScrollView>
    </SafeAreaView>
   	</View>
   	</ImageBackground>

   		</>:
   		img_back=="blue"?<>
   		<ImageBackground 
    source={{uri:imageblue}}
    style={{width: '100%', height:'100%'}} >
   	<View >
   		<SafeAreaView >
    	<ScrollView >
   			{content=="Dyogawhat"?<Dyogawhat/>:content=="Dyogatypes"?<Dyogatypes/>:content
   			=="Dyogabenifits"?<Dyogabenifits/>:content=="Dyogahistory"?<Dyogahistory/>:
   			content=="Dyogamyths"?<Dyogamyths/>:content=="Dmedichit"?<Dmedichit/>:content=="Dmedibeni"?<Dmedibeni/>:
   			content=="Dmedihow"?<Dmedihow/>:content=="Dmedisci"?<Dmedisci/>:content=="Dincorpo"?<Dincorpo/>:
   			content=="Dboycott"?<Dboycott/>:<>  <Dselfhealstart/></>}
   		</ScrollView>
    </SafeAreaView>
   	</View>
   	</ImageBackground>

   		</>:
   		img_back=="skyblue"?<>
   		<ImageBackground 
    source={{uri:imageskyblue}}
    style={{width: '100%', height:'100%'}} >
   	<View >
   		<SafeAreaView >
    	<ScrollView >
   			{content=="Dyogawhat"?<Dyogawhat/>:content=="Dyogatypes"?<Dyogatypes/>:content
   			=="Dyogabenifits"?<Dyogabenifits/>:content=="Dyogahistory"?<Dyogahistory/>:
   			content=="Dyogamyths"?<Dyogamyths/>:content=="Dmedichit"?<Dmedichit/>:content=="Dmedibeni"?<Dmedibeni/>:
   			content=="Dmedihow"?<Dmedihow/>:content=="Dmedisci"?<Dmedisci/>:content=="Dincorpo"?<Dincorpo/>:
   			content=="Dboycott"?<Dboycott/>:<>
       <Dselfhealstart/>
        </>}
   		</ScrollView>
    </SafeAreaView>
   	</View>
   	</ImageBackground>

   		</>:


   		null}
   		
  
		</>)
}

export default Dselfhealing;

const styles=StyleSheet.create({
	left:{
		marginRight:326,
		
	},
	container:{
		backgroundColor:'#171717',
		flexDirection: 'row',
	
		
	},
	bookicon:{
		color:'white',
		marginLeft:5,
		marginTop:5,
		marginRight:20
	},
	heading:{
		color:'white',
		marginLeft:5,
		marginTop:5
	},
	white:{
		color:'white'
	},
	view:{
		backgroundColor:'#171717',

		
	},
	topic:{
		marginLeft:50,
		marginTop:10
		
	},
	subtopic:{
		marginLeft:100,
	},
	checko:{
		color:'dodgerblue'
	},
	butto:{
		width:300,
		backgroundColor:'skyblue',
		borderRadius:20,
		marginTop:10,
		textAlign:'center'
	},
	boxred:{
		color:'red'
	},
	boxyellow:{
		color:'yellow'
	},
	boxskyblue:{
		color:'skyblue'
	},
	boxblue:{
		color:'blue'
	},
	themeitem:{

	}
	
})