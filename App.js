// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import 'react-native-gesture-handler';

import React,{useState,useEffect} from "react";
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, } from 'react-native';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import {Button} from "react-native-paper"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import Dhome from "./Dhome";
import Dprofile from "./Dprofile";
import Dselfhealing from "./Dselfhealing";
import Dreliever from "./Dreliever";
import Dcontribution from "./Dcontribution";
import Dbuy from "./Dbuy";
import Dstory from "./Dstory";
import Dcart from "./Dcart";
import Dchat from "./Dchat";
import Dlogin from "./Dlogin";
import Dlogout from "./Dlogout";
import Dtestchat from "./Dtestchat";
import { ActivityIndicator, Colors } from 'react-native-paper';
import Dwelcomeapp from "./Dwelcomeapp";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();




const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };
 const check=()=>{
  alert("hello");
 }
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function firstScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Depressor">
        <Stack.Screen
          name="Depressor"
          component={FirstPage}
          options={{
            title: 'Depressor', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#1C3676', //Set Header color
             
            },
            headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              
            },
          }}
        />
      </Stack.Navigator>
  );
}

function getstarted({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Depressor">
        <Stack.Screen
          name="Depressor"
          component={Dhome}
          options={{
            title: 'Get started', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#1C3676', //Set Header color
             
            },
            headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              
            },
          }}
        />
      </Stack.Navigator>
  );
}

function profile({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Depressor">
        <Stack.Screen
          name="profile"
          component={Dprofile}
          options={{
            title: 'Profile', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#1C3676', //Set Header color
             
            },
            headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              
            },
          }}
        />
      </Stack.Navigator>
  );
}


function welcome({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Depressor">
        <Stack.Screen
          name="welcome"
          component={Dwelcomeapp}
          options={{
            title: 'Profile', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#1C3676', //Set Header color
             
            },
            headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              
            },
          }}
        />
      </Stack.Navigator>
  );
}

function test({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Depressor">
        <Stack.Screen
          name="test"
          component={Dtestchat}
          options={{
            title: 'Profile', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#1C3676', //Set Header color
             
            },
            headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              
            },
          }}
        />
      </Stack.Navigator>
  );
}



function login({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Depressor">
        <Stack.Screen
          name="login"
          component={Dlogin}
          options={{
            title: 'Login/Sign in', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#1C3676', //Set Header color
             
            },
            headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              
            },
          }}
        />
      </Stack.Navigator>
  );
}

function logout({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Depressor">
        <Stack.Screen
          name="logout"
          component={Dlogout}
       
          options={{
            title: 'Logout', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#1C3676', //Set Header color
             
            },
            headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              
            },
          }}
        />
      </Stack.Navigator>
  );
}

function chat({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Depressor">
        <Stack.Screen
          name="chat"
          component={Dchat}
          options={{
            title: 'Chat', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#1C3676', //Set Header color
             
            },
            headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              
            },
          }}
        />
      </Stack.Navigator>
  );
}




function cart({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Depressor">
        <Stack.Screen
          name="cart"
          component={Dcart}
          options={{
            title: 'Cart', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#1C3676', //Set Header color
             
            },
            headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              
            },
          }}
        />
      </Stack.Navigator>
  );
}





function story({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Depressor">
        <Stack.Screen
          name="story"
          component={Dstory}
          options={{
            title: 'Story', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#1C3676', //Set Header color
             
            },
            headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              
            },
          }}
        />
      </Stack.Navigator>
  );
}




function buy({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Depressor">
        <Stack.Screen
          name="buy"
          component={Dbuy}
          options={{
            title: 'Buy', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#1C3676', //Set Header color
             
            },
            headerTintColor: 'white', //Set  tHeaderext color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              
            },
          }}
        />
      </Stack.Navigator>
  );
}



function contribution({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Depressor">
        <Stack.Screen
          name="contribution"
          component={Dcontribution}
          options={{
            title: 'Contribution', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#1C3676', //Set Header color
             
            },
            headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              
            },
          }}
        />
      </Stack.Navigator>
  );
}




function reliever({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Depressor">
        <Stack.Screen
          name="reliever"
          component={Dreliever}
          options={{
            title: 'Reliever', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#1C3676', //Set Header color
             
            },
            headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              
            },
          }}
        />
      </Stack.Navigator>
  );
}



function selfheal({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Depressor">
        <Stack.Screen
          name="profile"
          component={Dselfhealing}
          options={{
            title: 'Selfhealing', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#1C3676', //Set Header color
             
            },
            headerTintColor: 'white', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
              
            },
          }}
        />
      </Stack.Navigator>
  );
}



function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Second Page', //Set Header Title
          
        }}/>
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'Third Page', //Set Header Title
        }}/>
    </Stack.Navigator>
  );
}

function App() {

  const change=()=>{
    return( <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />)
    
  }

  const [loginstatus,setloginstatus]=useState('gamma');

  useEffect(async()=>{
    const response = await fetch('http://10.0.2.2:3002/chat');
    const res = await response;
    console.log(res.status);
    if(res.status==200){
      setloginstatus(true);
    }
    else{
      setloginstatus(false);
    }
   
   
    
  });
  const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
   const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(20).then(() => setRefreshing(false));
  }, []);

  return (<>

      {loginstatus==true?<>    

    <NavigationContainer onPress={change}>
       
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>


      
         <Drawer.Screen
          name="Logout"
          options={{ drawerLabel: 'Logout' }}
          component={logout} />
        
        
        <Drawer.Screen
          name="Get started"
          options={{ drawerLabel: 'Get started' }}
          component={getstarted} />
        <Drawer.Screen
          name="Profile"
          options={{ drawerLabel: 'Profile' }}
          component={profile} />
        <Drawer.Screen
          name="Selfheal"
          options={{ drawerLabel: 'Selfheal' }}
          component={selfheal} />
         <Drawer.Screen
          name="Reliever"
          options={{ drawerLabel: 'Reliever' }}
          component={reliever} />
         <Drawer.Screen
          name="Contribution"
          options={{ drawerLabel: 'Contribution' }}
          component={contribution} />
         <Drawer.Screen
          name="Buy"
          options={{ drawerLabel: 'Buy' }}
          component={buy} />
        <Drawer.Screen
          name="Story"
          options={{ drawerLabel: 'Story' }}
          component={story} />
         <Drawer.Screen
          name="Cart"
          options={{ drawerLabel: 'Cart' }}
          component={cart} />
         <Drawer.Screen
          name="Chat"
          options={{ drawerLabel: 'Chat' }}
          component={chat} />
       
         
        




      </Drawer.Navigator>
    </NavigationContainer>    

         </>:loginstatus==false?<>
         <Dlogin/>
        
           <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <Text>Pull down the screen to refresh the page</Text>
      </ScrollView>
    </SafeAreaView>
          </>:<><Dwelcomeapp/>
         </>}
 
   
  </>);
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
