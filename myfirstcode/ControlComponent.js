import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'

class ControlComponent extends Component {

   
  render(){
    const {  increment, decrement, children  } = this.props;
    return (

      <View>
        <Button onPress={increment} title="+"/> 
        {children}
        <Button onPress={decrement} title="-"  color= "rgb(200,155,155)"/>
      </View>
    );
  }
}

export default ControlComponent;
