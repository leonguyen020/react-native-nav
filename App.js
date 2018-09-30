import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Components
// import LoginPage from './src/components/login/login';

import { StackNav } from './src/components/utils/stackNav';

export default class App extends Component {
  render() {
    return (
      <StackNav/>
    );
  }
}

const styles = StyleSheet.create({
  
});
