import React, { Component, useEffect } from 'react';
import { FlatList, Text,View,Image,TouchableHighlight, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';

const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SearchScreen = ({navigation}) => {

  const [data, setData] = React.useState({
    search :''  
  });


   
  navigation.setOptions({
    headerTitle: props => <SearchBar 
    
    containerStyle={{
      backgroundColor: 'transparent',
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
      flex: 1
    }} 

    inputContainerStyle={{
      backgroundColor: '#EDEDED'
    }}
    inputStyle={{
      backgroundColor: '#EDEDED',
      borderRadius: 10,
      color: 'black'
    }}
    searchIcond
    clearIcon
    //lightTheme
    round
    
    placeholder="Type Here..." onChangeText={(txt) => updateSearch(txt)} value={data.search} />   
  })


  const updateSearch = (seval)=> {

    setData({
      ...data,
      search:seval,    
    });

    

  };

 
  
    return (
      <View style={styles.container1}>
        <Text>Search Screen</Text>
        
      </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 20,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 75,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15
  },
  container1: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 5
  }
});
