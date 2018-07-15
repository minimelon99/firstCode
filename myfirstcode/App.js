/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import ChildComponent from './ChildComponent';
import StatefulComponent from './StatefulComponent';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//child component
//to change the content, do content =
//content = new prop
export default class App extends Component {
  state = { showChild: true};
// 0 = false, null, undefined ''
  handleToggle = () =>{
    this.setState(({ showChild }) =>({
      showChild: !showChild
    }))
  }

  componentDidMount(){
    console.log('mounted')
  }
  componentDidUpdate(){
    console.log('update')
  }
  componentWillUnmount(){
    console.log('unmount')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>

       {this.state.showChild ? 
       (
       <View>
        <ChildComponent content = "content 1"/>
        <ChildComponent content = "content 2"/>
        </View>
       ) :
       <StatefulComponent />
       }
  
        
        <Button onPress={this.handleToggle} title = "Toggle" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
