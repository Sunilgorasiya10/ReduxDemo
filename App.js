import React, { Component } from 'react';
import { Button, Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {connect} from 'react-redux';
//import {counterIncrement, counterDecrement, welcomeAction} from './src/actions';
import withCounter from './src/hoc/withCounter';
import withWelcome from './src/hoc/withWelcome';

class App extends React.Component {

  render() {
    console.log(this.props)
    const { count, welcome:{ welcomeText }, counterIncrementAction, counterDecrementAction, createWellcomeAction } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.counterTitle}>Counter</Text>
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={counterIncrementAction}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.counterText}>{count}</Text>
          <TouchableOpacity onPress={counterDecrementAction}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <Text>{welcomeText}</Text>
        <Button title={'Button 1'} onPress={() => createWellcomeAction('Button 1 pressed')}/>
        <Button title={'Button 2'} onPress={() => createWellcomeAction('Button 2 pressed')}/>
      </SafeAreaView>
    )
  }
}
// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loggedInContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  loginButton: {
    marginTop: 20,
    paddingTop: 20,
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loggedInText: {
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '400',
    color: '#000',
  },
  counterTitle: {
    fontFamily: 'System',
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
  },
  counterText: {
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: '400',
    color: '#000',
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 50,
    fontWeight: '300',
    color: '#007AFF',
    marginLeft: 40,
    marginRight: 40,
  },
});

export default withWelcome(withCounter(App));
