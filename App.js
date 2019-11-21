import React, {Component} from 'react';
import { StyleSheet, Text, View,Image, Dimensions, TextInput } from 'react-native';

import logo from './assets/logo.png'


const {width:WIDTH} = Dimensions.get('window')
export default class App extends Component {
  state = {  }
  render() { 
    return (
      <View style={styles.container}>

        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
      <Text style={styles.logoText}>iSavers</Text>
      <View>
        
        <TextInput 
        style={styles.input}
        placeholder={'Username'}
        placeholderTextColor={'rgba(255,255,255,0.7)'}
        underlinedColorAndroid={'transparent'}
        />
      </View>
      
      </View>
      
      );
  }
}
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: 
    null,
    backgroundColor: '#03c6fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  logo: {
    width: 142,
    height: 142
  },

  logoContainer:{
    alignItems: "center"
  },
  logoText:{
    color:'white',
    fontSize:60,
    fontWeight:'500',
    marginTop: 10,
    opacity: 0.8
  },
  input :{
    width: WIDTH -55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color:'rgba(255,255,255, 0.7)',
    marginHorizontal: 25

  },

  
});
