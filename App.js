/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
	onChangeText = (text) => {
		console.log('print :', text);
	}

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>
          Welcome to React Native! 555 aaa abcd 123 eee กดกดกดกด
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
		</Text> */}
		
		<Text>
			Please enter your note here
        </Text>

		<TextInput style={styles.textInput} onChangeText={this.onChangeText}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
	width: 200,
    height:100,
    borderColor: 'gray',
    borderWidth: 1
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
