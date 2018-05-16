import React, {Component} from "react";
import {View, Text} from "react-native";

export default class ManHinhC extends Component{
  render(){
    return(
      <View style={{flex:1, backgroundColor:"blue"}}>
        <Text style={{color:"white", paddingTop:100}}>This is MHC</Text>
      </View>
    )
  }
}
