import React, { useState, useEffect, Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
var { width } = Dimensions.get("window")

import Icon from 'react-native-vector-icons/Ionicons';

var { width } = Dimensions.get("window");
import AsyncStorage from '@react-native-community/async-storage';

import { createStackNavigator } from '@react-navigation/stack';

const CartStack = createStackNavigator();

const CartStackScreen = ({navigation}) => (


    <CartStack.Navigator screenOptions={{
      headerStyle: {
      backgroundColor: '#fff',
      },
      headerTintColor: '#FF6347',
      headerTitleStyle: {
      fontWeight: 'bold'
      },

      
      

      }}

      
      
      
      >         
        <CartStack.Screen name="CartScreen" component={CartScreen} options={{
        title:'Cart Screen',
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
      
    </CartStack.Navigator>
  )
 
  export default CartStackScreen;



  class CartScreen extends Component {

  
    constructor(props) {
      super(props);
      this.state = {
        dataCart:[],
      };
   }
  
      componentDidMount()
    {
      AsyncStorage.getItem('cart').then((cart)=>{
        if (cart !== null) {
          // We have data!!
          const cartfood = JSON.parse(cart)
          this.setState({dataCart:cartfood})
        }
      })
      .catch((err)=>{
        alert(err)
      })
    }
  
    onChangeQual(i,type)
    {
      const dataCar = this.state.dataCart
      let cantd = dataCar[i].quantity;
  
      if (type) {
       cantd = cantd + 1
       dataCar[i].quantity = cantd
       this.setState({dataCart:dataCar})
      }
      else if (type==false&&cantd>=2){
       cantd = cantd - 1
       dataCar[i].quantity = cantd
       this.setState({dataCart:dataCar})
      }
      else if (type==false&&cantd==1){
       dataCar.splice(i,1)
       this.setState({dataCart:dataCar})
      } 
    }
    
    
   
  
    render() {
      return (
        <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
          
          { /*
           <View style={{height:20}} />
           <Text style={{fontSize:32,fontWeight:"bold",color:"#33c37d"}}>Cart food</Text>
          */ }
           
           <View style={{height:10}} />
  
           <View style={{flex:1}}>
  
             <ScrollView>
  
               {
                 this.state.dataCart.map((item,i)=>{
                   return(
                     <View style={{width:width-20,margin:10,backgroundColor:'transparent', flexDirection:'row', borderBottomWidth:2, borderColor:"#cccccc", paddingBottom:10}}>
                       <Image resizeMode={"contain"} style={{width:width/3,height:width/3}} source={{uri: item.food.image}} />
                       <View style={{flex:1, backgroundColor:'trangraysparent', padding:10, justifyContent:"space-between"}}>
                         <View>
                           <Text style={{fontWeight:"bold", fontSize:20}}>{item.food.name}</Text>
                           <Text>Lorem Ipsum de food</Text>
                         </View>
                         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                           <Text style={{fontWeight:'bold',color:"#33c37d",fontSize:20}}>${item.price*item.quantity}</Text>
                           <View style={{flexDirection:'row', alignItems:'center'}}>
                             <TouchableOpacity onPress={()=>this.onChangeQual(i,false)}>
                               <Icon name="ios-remove-circle" size={35} color={"#33c37d"} />
                             </TouchableOpacity>
                             <Text style={{paddingHorizontal:8, fontWeight:'bold', fontSize:18}}>{item.quantity}</Text>
                             <TouchableOpacity onPress={()=>this.onChangeQual(i,true)}>
                               <Icon name="ios-add-circle" size={35} color={"#33c37d"} />
                             </TouchableOpacity>
                           </View>
                         </View>
                       </View>
                     </View>
                   )
                 })
               }
  
               <View style={{height:20}} />
  
             
             </ScrollView>
  
  
             <TouchableOpacity style={{
                   backgroundColor:"#33c37d",
                   width:width-40,
                   alignItems:'center',
                   padding:10,
                   borderRadius:5,
                   margin:20
                 }}>
                 <Text style={{
                     fontSize:24,
                     fontWeight:"bold",
                     color:'white'
                   }}>
                   CHECKOUT
                 </Text>
               </TouchableOpacity>
  
               <View style={{height:0}} />
  
           </View>
  
        </View>
      );
    }
  };



const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
