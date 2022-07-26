import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-paper';


const ReservationScreen = ({navigation}) => {

  const [text, setText] = React.useState('');

  return (
    <View >

    <TextInput
      label="Email"
      mode="outlined"
      value={text}
      onChangeText={text => setText(text)}
      style={{backgroundColor:'#fff',borderBottomColor:'white'}}
      
    />

     
             
        

     
    </View>
  );

};

export default ReservationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width:'100%',
    height:'100%',
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
