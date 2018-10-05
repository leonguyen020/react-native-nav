import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet
} from 'react-native';
import { 
  Avatar,
  SocialIcon
} from 'react-native-elements'

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.masterContainer}>
        {/* Row container */}
        <View style={styles.rowContainer}>
          {/* Row Item */}
          <View style={styles.block}>
            
          </View>

          <View style={styles.block}>

          </View>

        </View>

        {/* Row container */}
        <View style={styles.rowContainer}>
          {/* Row Item */}
          <View style={styles.block}>

          </View>

          <View style={styles.block}>

          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  masterContainer:{
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  block:{
    width:150,
    height:150,
    // borderRadius: 15,
    backgroundColor:'#c0392b'
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})