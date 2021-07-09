import React from "react";
import { Button } from 'react-native-paper';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

const Dhomecard=(props)=>{
	return(<>	
			     <Card>
    <Card.Title title={props.head}/>
   
    <Card.Cover source={{ uri: props.image }} />
     <Card.Content>
      <Paragraph>{props.description}</Paragraph>
    </Card.Content>

  </Card>
		</>)
}

export default Dhomecard;