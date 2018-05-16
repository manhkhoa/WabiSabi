import React, {Component} from "react";
import {View, Text, Image,  NavigatorIOS} from "react-native";
import TabNavigator from 'react-native-tab-navigator';
import ManHinhB from "./ManHinhB.js";

export default class TabBar extends Component{
  constructor(props){
    super(props);
    this.state={
      selectedTab:"home"
    }
  }

  render(){
    return(
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => <Image source={require("../Images/home-black.png")} style={{height:25,width:25}} />}
          renderSelectedIcon={() => <Image source={require("../Images/home-green.png")} style={{height:25,width:25}} />}
          onPress={() => this.setState({ selectedTab: 'home' })}>

          <ManHinhB />

        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'products'}
          title="Products"
          renderIcon={() => <Image source={require("../Images/shop-black.png")} style={{height:25,width:25}} />}
          renderSelectedIcon={() => <Image source={require("../Images/shop-green.png")} style={{height:25,width:25}} />}
          onPress={() => this.setState({ selectedTab: 'products' })}>
          <View style={{flex:1, backgroundColor:"lightpink", justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"black", paddingTop:100, fontSize:40}}>This is Products List</Text>
          </View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'cart'}
          title="Shopping Cart"
          renderIcon={() => <Image source={require("../Images/cart-black.png")} style={{height:25,width:25}} />}
          renderSelectedIcon={() => <Image source={require("../Images/cart-green.png")} style={{height:25,width:25}} />}
          badgeText="3"
          onPress={() => this.setState({ selectedTab: 'cart' })}>
          <View style={{flex:1, backgroundColor:"lightgreen", justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"red", paddingTop:100, fontSize:40}}>This is Cart</Text>
          </View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          renderIcon={() => <Image source={require("../Images/profile-black.png")} style={{height:25,width:25}} />}
          renderSelectedIcon={() => <Image source={require("../Images/profile-green.png")} style={{height:25,width:25}} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <View style={{flex:1, backgroundColor:"lightblue", justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:"black", paddingTop:100, fontSize:40}}>This is Profile</Text>
          </View>
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}
