import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { createStackNavigator } from '@react-navigation/stack';

const MenuStack = createStackNavigator();

const MenuStackScreen = ({navigation}) => (


    <MenuStack.Navigator screenOptions={{
      headerStyle: {
      backgroundColor: '#fff',
      },
      headerTintColor: '#FF6347',
      headerTitleStyle: {
      fontWeight: 'bold'
      },

      
      

      }}

      
      
      
      >         
        <MenuStack.Screen name="MenuScreen" component={MenuScreen} options={{
        title:'Food Menu',
        headerLeft: () => (
          <View style={{flexDirection:'row', padding:10,marginLeft: 10}}>   
          <Icon.Button name="ios-arrow-back" size={30} backgroundColor="#FFF" color="#FF6347" onPress={() => navigation.navigate('Home')}></Icon.Button>       
           
          </View>
           ),
        headerRight: () => (
            <View style={{flexDirection:'row', padding:10,marginLeft: 10}}>
            <Image style={{width:100,height:50}} resizeMode="contain" source={require("../assets/foodapp.png")}  />
            </View>
             )
        }} />
      
    </MenuStack.Navigator>
  )
 
  export default MenuStackScreen;



const MenuScreen = ({navigation}) => {
  
    return (
      <View style={styles.container}>
        <Text>Food Menu</Text>
        
      </View>
    );
};



const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
