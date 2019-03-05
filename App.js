import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import RunInfo from './components/run-info';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
  infoWrapper: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    flex: 1
  }
});


export default class App extends Component {
  
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{flex: 1, backgroundColor: 'red'}}>MAPVIEW</Text>
        <View style={styles.infoWrapper}>
          <RunInfo title="Distance" value="0 km" 
          ref={(info) => this.distanceInfo = info} />
          
          <RunInfo title="Speed" value="0 km/h" 
          ref={(info) => this.speedInfo = info} />

          <RunInfo title="Direction" value="NE" 
          ref={(info) => this.directionInfo = info} />
        </View>
      </View>
    );
  }
}
