import React, {Component} from "react";
import {View, Text, Button, NavigatorIOS, TouchableHighlight} from "react-native";
import PropTypes from 'prop-types';
import ManHinhB from "./ManHinhB.js";

export default class ManHinhA extends Component{

  render() {

    return(
      <View style={{flex:1, backgroundColor:"lightblue"}}>
        <Text style={{color:"blue", paddingTop:100}}>This is MHA</Text>
      </View>
    );
  }
}
