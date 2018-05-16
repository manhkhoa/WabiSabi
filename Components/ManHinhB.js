import React, {Component} from "react";
import {View, Text} from "react-native";

export default class ManHinhB extends Component{
  render(){
    return(
      <View style={{flex:1, backgroundColor:"white", justifyContent:"center", alignItems:"center"}}>
        <Text style={{color:"blue", paddingTop:100, fontSize:40}}>This is Home</Text>
      </View>
    )
  }
}
