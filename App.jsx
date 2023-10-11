import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react'
import { NavigationContainer, useNavigation  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import { AntDesign,MaterialCommunityIcons } from '@expo/vector-icons'; 

import Login from './pages/Login'
import Join from './pages/Join'
import Main from './pages/CallMain'
import Add from './pages/NumberAdd'
import List from './pages/NumberList'

const Stack = createNativeStackNavigator();

export default function App() {
  function BackButton() {
    const navigation = useNavigation();

    const handleGoBack = () => {
      navigation.goBack();
    };

    return (
      <AntDesign
        name="left"
        size={24}
        color="black"
        onPress={handleGoBack}
      />
    );
  }

  function ListButton() {
    const navigation = useNavigation();

    const handleGoList = () => {
      navigation.push('List')
      // navigation.goBack();
    };
    return(
      <MaterialCommunityIcons name="format-list-bulleted-square" size={24} color="black" onPress={handleGoList}/>
    );
  }

  function AddButton() {
    const navigation = useNavigation();

    const handleGoAdd = () => {
      navigation.push('Add')
    };
    return(
      <AntDesign name="plus" size={24} color="black" onPress={handleGoAdd} />
    );
  }

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Login"> 
        {/* <Stack.Screen name="Login" component={Login}  
          options={{
            headerShown: false,
          }}/> */}
        <Stack.Screen name="Login" component={Login} options={{ title: 'ONly You',
        headerLeft: () => (
          <BackButton />
        ), headerTitleAlign: 'center', // 텍스트를 중앙 정렬
      }} 
        />
        <Stack.Screen name="Join" component={Join} options={{ title: 'ONly You',
        headerLeft: () => (
          <BackButton />
        ), headerTitleAlign: 'center', // 텍스트를 중앙 정렬
      }} 
        />
        <Stack.Screen name="Main" component={Main} options={{ title: '전화걸기' ,headerLeft: () => (
          <BackButton />
        ), headerRight: () => (
          <ListButton />
        ), headerTitleAlign: 'center'}} />
        <Stack.Screen name="List" component={List} options={{ title: '연락처 관리' ,headerLeft: () => (
          <BackButton />
        ), headerRight: () => (
          <AddButton />
        ), headerTitleAlign: 'center'}} />
        <Stack.Screen name="Add" component={Add} options={{ title: '연락처 등록' ,headerLeft: () => (
          <BackButton />
        ), headerTitleAlign: 'center'}} />
        
      </Stack.Navigator>

    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
