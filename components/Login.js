import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput } from 'react-native';

class LoginUserInterface extends Component {
    render(){
        return(
            <View>
            <Image style={this.props.image}
            source={this.props.url}/>
            <TextInput style={this.props.input} placeholder="Username"/>
            <TextInput style={this.props.input} placeholder="Password" secureTextEntry={true}/>
            <Text> Hi {this.props.name}</Text>
        </View>
        );
    }
}

export default class Login extends React.Component{
    render() {
        var styleImage = {
            width: 150, 
            height: 150,
            alignSelf :'center'
        }
        var styleInput = {
            height: 50,
            width: 300,
            marginTop: 30,
            padding: 4,
            fontSize: 18,
            borderWidth: 1,
            borderColor: 'red'
        }
        var urlAddress =  {
            uri : 'https://facebook.github.io/react-native/docs/assets/favicon.png'
        }
        return (
            <LoginUserInterface name="Ibrar" image = {styleImage} input = {styleInput} url = {urlAddress}/>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 100, 
        height: 100,
        alignSelf :'center'
    },
    input: {
        height: 50,
        width: 300,
        marginTop: 30,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'green'
    }
});