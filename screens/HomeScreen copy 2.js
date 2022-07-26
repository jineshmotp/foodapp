import React, { Component, useEffect } from 'react';
import { Text, FlatList, Image,StyleSheet,Dimensions,View,Vibration,ScrollView,TouchableOpacity, Keyboard} from 'react-native';
import { StatusBar } from 'expo-status-bar';

var {height, width } = Dimensions.get('window');
import Swiper from 'react-native-swiper'
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Header, SearchBar } from 'react-native-elements';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();  

  const theme = useTheme();
  
  const [state, setState] = React.useState({
      dataBanner:[],
      dataCategories:[],
      dataFood:[],
      selectCatg:0,
      isLoading : false       
    });

  

  const loadFood = ()=> {
    const url = "http://tutofox.com/foodapp/api.json"
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {

      setState({
        ...state,
        isLoading: false,
        dataBanner: responseJson.banner,
        dataCategories: responseJson.categories,
        dataFood:responseJson.food
      });

    })
    .catch((error) =>{
      console.error(error);
    });
  };

   
  const setcagval = (idval)=> {

    setState({
      ...state,
      selectCatg:idval,    
    });

    

  };
  
  const onClickAddCart = (data) => 
  {

    //alert(itmain.name);
    const itemcart = {
      food: data,
      quantity:  1,
      price: data.price
    }
 
    AsyncStorage.getItem('cart').then((datacart)=>{
        if (datacart !== null) {
          // We have data!!
          const cart = JSON.parse(datacart)
          cart.push(itemcart);
          AsyncStorage.setItem('cart',JSON.stringify(cart));
        }
        else{
          const cart  = [];
          cart.push(itemcart);
          AsyncStorage.setItem('cart',JSON.stringify(cart));
        }
        alert("Add Cart")
      })
      .catch((err)=>{
        alert(err)
      })


  };
  
  const gotoSearch = () => 
  {
    Keyboard.dismiss();
    navigation.navigate('SearchScreen');   
  }
 
  useEffect(() => {

  loadFood();     

   },[]);

   renderItem = ({item}) => {
    return(
      <TouchableOpacity style={[styles.divCategorie,{backgroundColor:item.color}]} onPress={()=> setcagval(item.id)}>
        <Image style={{width:100,height:80}} resizeMode="contain" source={{uri : item.image}} />
        <Text style={{fontWeight:'bold',fontSize:22}}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  renderItemFood= ({item}) => {
    let catg = state.selectCatg
    
  
    if(catg==0 || catg==item.categorie)
    {
      return(
        <TouchableOpacity style={styles.divFood}>
          <Image style={styles.imageFood} resizeMode="contain" source={{uri:item.image}} />
            <View style={{height:((width/2)-20)-90, backgroundColor:'transparent', width:((width/2)-20)-10}} />
            <Text style={{fontWeight:'bold',fontSize:20,textAlign:'center'}}>
              {item.name}
            </Text>
            <Text>Descp Food and Details</Text>
            <Text style={{fontSize:20,color:"green"}}>${item.price}</Text>
                   <TouchableOpacity onPress={()=>onClickAddCart(item)} style={styles.cartTouch} >
                        <Text style={{fontSize:18, color:"white", fontWeight:"bold"}}>Add Cart</Text>
                        <View style={{width:10}} />
                        <Icon name="ios-add-circle" size={30} color={"white"} />                   
                  </TouchableOpacity>
          </TouchableOpacity>
        )
    }
  
    
  }

  if( state.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center',alignContent:'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  
    return (
      
      <View>

          
            <StatusBar style="light" />
            
            <SearchBar placeholder="search Food..."      
            containerStyle={styles.containers} 
            inputContainerStyle={styles.inputcon}
            inputStyle={styles.inputs}
            style={styles.searchi}
            searchIcond
            clearIcon
            lightTheme
            round
            onFocus={gotoSearch}
            onSelectionChange={gotoSearch}
            />


      <ScrollView>
        <View style={{ flex: 1,backgroundColor:"#f2f2f2" }}>
        <View style={{width: width, alignItems:'center'}} >
           
         
           <Swiper style={{height:width/2}}  showsButtons={false} autoplay={true} autoplayTimeout={3}>
             {
                 state.dataBanner.map((itembann)=>{
                 return(
                   <Image style={styles.imageBanner} resizeMode="contain" source={{uri:itembann}}/>
                 )
               })
             }
           </Swiper>
           <View style={{height:20}} />
       </View>

          <View style={{width:width, borderRadius:20, paddingVertical:20, backgroundColor:'white'}}>


            <Text style={styles.titleCatg}>Categories</Text>
            <FlatList
              horizontal={true}
              data={state.dataCategories}
              renderItem={renderItem}          
              keyExtractor = { (item,index) => index.toString() }
            />
            <View style={{height:20}} />


            <FlatList
              //horizontal={true}
              data={state.dataFood}
              numColumns={2}
              renderItem={renderItemFood}
              keyExtractor = { (item,index) => index.toString() }
            />
            <View style={{height:50}} />
          

          </View>

        </View>
      </ScrollView>
      </View>
    );
  
};

const styles = StyleSheet.create({

  headerContainer: {
    height: Platform.select({
        android: 56,
        default: 44,
        
      }),
  },
  /*
  headerContainer: {
    height: Platform.select({
        android: 56,
        default: 44,
      }),
  },
  */
  imageBanner: {
    marginTop:1,
    height:width/2,
    width:width-40,
    borderRadius:10,
    marginHorizontal:20
  },
  divCategorie:{
    backgroundColor:'red',
    margin:5, alignItems:'center',
    borderRadius:10,
    paddingLeft:10,
    paddingRight:10,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  titleCatg:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:10
  },
  imageFood:{
    width:((width/2)-20)-10,
    height:((width/2)-20)-30,
    backgroundColor:'transparent',
    position:'absolute',
    top:-45
  },
  divFood:{
    width:(width/2)-20,
    padding:10,
    borderRadius:10,
    marginTop:55,
    marginBottom:5,
    marginLeft:10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation:8,
    shadowOpacity:0.3,
    shadowRadius:50,
    backgroundColor:'white',
  },
  cartTouch: {
              width:(width/2)-40,
              backgroundColor:'#33c37d',
              flexDirection:'row',
              alignItems:'center',
              justifyContent:"center",
              borderRadius:5,
              padding:4
  },
  lottie: {
    width: 100,
    height: 100
  },
  containers: {
    backgroundColor: '#ff6346',
    width:'100%', 
    borderBottomColor: 'transparent', 
    borderTopColor: 'transparent'
  },
  containers: {
    alignContent:'center',
    marginLeft:0,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#ff6346',
    width:'100%', 
    borderBottomColor: '#ff6346', 
    borderTopColor: '#ff6346'
  },
  inputcon: {
  backgroundColor: '#EDEDED',
  width:'100%',
  alignContent:'center',
  justifyContent:'center',
  },

  inputs: {
    alignContent:'center',
    justifyContent:'center',
    backgroundColor: '#EDEDED',
    borderRadius: 5,
    color: 'black',
    width:'100%'
  },
  searchi: {
    padding:0
  }


});

export default HomeScreen;