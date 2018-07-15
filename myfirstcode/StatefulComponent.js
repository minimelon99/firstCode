import React, {Component} from 'react';
import {View, Text, Button } from 'react-native';
import ControlComponent from './ControlComponent';

class StatefulComponent extends Component{
    //givestate
    state = {
        counter: 0
    }
    increment = () => {
        //  this.setState({ counter: this.state.counter + 1 }) 
        //by doing () = no return necessary
  
       // this.setState(prevState => ({
         //   counter: prevState.counter + 1
        //}));
  
        this.setState(({ counter }) => ({
            counter: counter + 1
        }));
      }
  
      decrement = () => {
          this.setState(({ counter }) =>({
              counter: counter - 1
  
          }))
      }
   
             
    render() {
        return (
            <View>
                <ControlComponent increment= {this.increment} decrement ={this.decrement}>
                <Text> Current Counter: {this.state.counter} </Text>
               </ControlComponent>
            </View>
        );

    }
}

export default StatefulComponent;