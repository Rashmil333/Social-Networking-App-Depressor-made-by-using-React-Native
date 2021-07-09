	<Appbar.Header style={{backgroundColor:'green'}}>
        <TouchableOpacity onPress={changetochat}>
      <Image source = {{uri:'https://images.all-free-download.com/images/graphicthumb/back_button_37286.jpg'}}
   style ={{width:30,height:30,borderRadius:100}}
   /></TouchableOpacity>
       <Appbar.Content title={chat_name} subtitle='last seen 2:00 pm' />
    </Appbar.Header>
     <KeyboardAvoidingView>
      <View >
      <View style={{height:'89%'}}>
            <SafeAreaView>
            <ScrollView>
      
         {all.map((cvalue)=>{
          return(<Dchatmessagediv type='receive'  message={cvalue}/>)
        })}
       

          </ScrollView>
        </SafeAreaView>

        </View>
        </View>
         </KeyboardAvoidingView>

        
        
      
        

      <TextInput
         style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
     
      {text==""?null:
     <Button onPress={()=>sendchat(text)} style={styles.butto}><FontAwesome5  name={'check'} size={20}/></Button>}

    				</>

             <Button onPress={()=>this.joinroom()}>Join room 100</Button>
       <Button onPress={()=>this.open()}>Join room 100</Button>