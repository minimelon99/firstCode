import React, {Component} from 'react';
import {View, Text} from 'react-native';
/*
class ChildComponent extends Component {
    render() {
    //{ content : 'content 1'}
        return(
        <View>
        <Text>{this.props.content}</Text>
        </View>
        );
    }
}
*/
/*
function ChildComponent(props) {
    return
        <Text>{props.content}</Text>
    ;
}
*/
//same thing as the other codes on top
const ChildComponent = props => (
    <View>
        <Text>{props.content}</Text>
    </View>
);

export default ChildComponent;