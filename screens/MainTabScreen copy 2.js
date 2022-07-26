import React from 'react';
import { Image, View } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';
import ReservationScreen from './ReservationScreen';
import SearchScreen from './SearchScreen';
import AddressScreen from './AddressScreen';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';

import {useTheme} from 'react-native-paper';


const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ReservationStack = createStackNavigator();
const AddressStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    
    
    <Tab.Navigator
      initialRouteName="Home"
      activeColor='#ff6346'   
      inactiveColor = '#9c8a87' 
          
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Food',   
          tabBarColor: '#fff',            
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons color={color} name="food-fork-drink" size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Reservation"
        component={ReservationStackScreen}
        options={{
          tabBarLabel: 'Reservation',   
          tabBarColor: '#fff',            
          tabBarIcon: ({ color }) => (
            <FontAwesome5 color={color} name="chair" size={26} />
          ),
        }}
      />


      <Tab.Screen
        name="AddressScreen"
        component={AddressStackScreen}
        options={{
          tabBarLabel: 'Location',
          tabBarColor: '#fff',   
         tabBarIcon: ({ color }) => (
            <FontAwesome color={color} name="address-card" size={26} />
          ),
        }}
      />

   <Tab.Screen
      name="Notifications"
      component={NotificationStackScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarColor: '#fff',   
        tabBarIcon: ({color}) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#fff',   
          tabBarIcon: ({ color }) => (
            <FontAwesome color={color} name="user" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#ff6346',
        borderBottomColor: '#ff6346',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }

    }}>
        
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'',
        headerLeft: () => (
          <View style={{flexDirection:'row', padding:10,marginLeft: 10}}>   
          <Icon.Button name="ios-menu" size={30} backgroundColor="#ff6346" color="#FFF" onPress={() => navigation.openDrawer()}></Icon.Button>       
          <Image style={{width:100,height:50}} resizeMode="contain" source={require("../assets/foodapp1.png")}  />
          </View>
           ),
        headerRight: () => (
            <View style={{flexDirection:'row', padding:10,marginLeft: 10}}>
            <Icon.Button name="ios-cart" size={30} backgroundColor="#ff6346" color="#FFF" onPress={() => navigation.navigate('CartStackScreen')}></Icon.Button>
            </View>
             )
        }} />

         <HomeStack.Screen name="SearchScreen" component={SearchScreen} />

           
</HomeStack.Navigator>
);

const NotificationStackScreen = ({navigation}) => (
  <NotificationStack.Navigator  screenOptions={{
    headerStyle: {
      backgroundColor: '#ff6346',
      borderBottomColor: '#ff6346',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold'
      }

  }}>
    <NotificationStack.Screen name="Notifications" component={NotificationScreen}  options={{
        title:'',
        headerLeft: () => (
          <View style={{flexDirection:'row', padding:10,marginLeft: 10}}>   
          <Icon.Button name="ios-menu" size={30} backgroundColor="#ff6346" color="#FFF" onPress={() => navigation.openDrawer()}></Icon.Button>       
          <Image style={{width:100,height:50}} resizeMode="contain" source={require("../assets/foodapp1.png")}  />
          </View>
           ),
        headerRight: () => (
            <View style={{flexDirection:'row', padding:10,marginLeft: 10}}>
            <Icon.Button name="ios-cart" size={30} backgroundColor="#ff6346" color="#FFF" onPress={() => navigation.navigate('CartStackScreen')}></Icon.Button>
            </View>
             )
        }} />
  </NotificationStack.Navigator>
);

  const ReservationStackScreen = ({navigation}) => (
    <ReservationStack.Navigator  screenOptions={{
      headerStyle: {
        backgroundColor: '#ff6346',
        borderBottomColor: '#ff6346',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }

    }}>
            <ReservationStack.Screen name="ReservationScreen" component={ReservationScreen} options={{
             title:'',
             headerLeft: () => (
               <View style={{flexDirection:'row', padding:10,marginLeft: 10}}>   
               <Icon.Button name="ios-menu" size={30} backgroundColor="#ff6346" color="#FFF" onPress={() => navigation.openDrawer()}></Icon.Button>       
               <Image style={{width:100,height:50}} resizeMode="contain" source={require("../assets/foodapp1.png")}  />
               </View>
                ),
             headerRight: () => (
                 <View style={{flexDirection:'row', padding:10,marginLeft: 10}}>
                 <Icon.Button name="ios-cart" size={30} backgroundColor="#ff6346" color="#FFF" onPress={() => navigation.navigate('CartStackScreen')}></Icon.Button>
                 </View>
                  )
             }} />
    </ReservationStack.Navigator>
    );


    const AddressStackScreen = ({navigation}) => (
   
   <AddressStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#ff6346',
      borderBottomColor: '#ff6346',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold'
      }

  }}>
          
            <AddressStack.Screen name="AddressScreen" component={AddressScreen} options={{
             title:'',
             headerLeft: () => (
               <View style={{flexDirection:'row', padding:10,marginLeft: 10}}>   
               <Icon.Button name="ios-menu" size={30} backgroundColor="#ff6346" color="#FFF" onPress={() => navigation.openDrawer()}></Icon.Button>       
               <Image style={{width:100,height:50}} resizeMode="contain" source={require("../assets/foodapp1.png")}  />
               </View>
                ),
             headerRight: () => (
                 <View style={{flexDirection:'row', padding:10,marginLeft: 10}}>
                 <Icon.Button name="ios-cart" size={30} backgroundColor="#ff6346" color="#FFF" onPress={() => navigation.navigate('CartStackScreen')}></Icon.Button>
                 </View>
                  )
             }} />

    </AddressStack.Navigator>

    );


    const ProfileStackScreen = ({navigation}) => {
      const {colors} = useTheme();
    
      return (
      <ProfileStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#ff6346',
          borderBottomColor: '#ff6346',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }    
      }}>

        <ProfileStack.Screen name="Profile"  component={ProfileScreen} options={{
           title:'',
             headerLeft: () => (
               <View style={{flexDirection:'row', padding:10,marginLeft: 10}}>   
               <Icon.Button name="ios-menu" size={30} backgroundColor="#ff6346" color="#FFF" onPress={() => navigation.openDrawer()}></Icon.Button>       
               <Image style={{width:100,height:50}} resizeMode="contain" source={require("../assets/foodapp1.png")}  />
               </View>
                ),

                headerRight: () => (
                  <View style={{flexDirection:'row', padding:10,marginLeft: 10}}>
                  <MaterialCommunityIcons.Button name="account-edit" size={30} backgroundColor="#ff6346" color="#FFF" onPress={() => navigation.navigate('EditProfile')}></MaterialCommunityIcons.Button>
                  </View>
                   )
              }} />

            
        <ProfileStack.Screen 
          name="EditProfile"
          options={{
            title: 'Edit Profile'
          }}
          component={EditProfileScreen}
        />
      </ProfileStack.Navigator>
    )};


    
    

