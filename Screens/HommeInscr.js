import React from 'react';
import {Text, StyleSheet, View, Image , Pressable} from 'react-native';

import logo from '../assets/ll.png'
import logo1 from '../assets/op.webp'
const OnBoardScreenL = () => {
  return (
    <View style={{
      
        flexDirection: "row"
      }}> 
    <View style={{
        left:0,
      
        alignItems:'center',
        alignContent:'center',
        backgroundColor:'whitesmoke'
      }}>
        <Text  style={
            {
              alignItems:'center',
              textAlign:'center',
              
              fontSize:20,
              
              fontWeight:'bold',
              marginTop:70
            }
  
        }>Client</Text>
         <Image source={logo}  style={{
        width: 160,
        height: 160,
       
       
        justifyContent: 'space-between',
        left: 0,
        marginTop: 80,}}/>  
        <Pressable >
            <View style={styles.btn}>
              <Text style={{color: 'white'}}>Enter</Text>
            </View>
          </Pressable>
      </View>
      <View style={{
       right: 0,
       alignItems:'center',
       alignContent:'center',
      backgroundColor:'white'
    }}>
      <Text style={
          {
            alignItems:'center',
            textAlign:'center',
           fontSize:20,
            fontWeight:'bold',
            marginTop:80
          }

      }>Station Lavage</Text>
       <Image source={logo1}  style={{
    width: 160,
   
    height: 160,
    
    
    justifyContent: 'space-between',
    right: 0,
    marginTop: 120,}}/>
    <Pressable >
          <View style={styles.btn}>
            <Text style={{color: 'white'}}>Enter</Text>
          </View>
        </Pressable>
       </View>  
      </View>
    
      
   
  );
};

const styles = StyleSheet.create({
  logo:{
    width:120,
    height:120,
  },
  btn: {
    height: 50,
    width: 120,
    marginStart:30,
    backgroundColor: 'black',
    marginTop: 70,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd:30,
    marginBottom:130
  },
  logoContainer:{
    alignContent:'flex-start',
    flexDirection:'row',
    alignItems:'center',
    flex: 1,
    justifyContent: 'space-between',
    padding: 8,
    marginBottom:30
    },
  
});

export default OnBoardScreenL;