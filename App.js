import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Components
// import LoginPage from './src/components/login/login';
import Calendars from './src/components/calendars/calendars';

export default class App extends Component {
  render() {
    return (
      <Calendars/>
    );
  }
}

const styles = StyleSheet.create({
  
});
