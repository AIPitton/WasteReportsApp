import React, { useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import Bt from './Bt'

export default class Api extends React.Component {
    constructor(props) {
      super(props)
    }
    
    async ReportNow(lt,lg,op) {
      try {
        await fetch('https://webhook.site/c091f954-1951-47ab-b63f-f2c26bb1947b', {
        method: 'post',
        mode: 'no-cors',
        headers: {
          "Accept": "application/json",
          "Content-Type": 'application/json',   
          "Connection": "close",   
          "type": "getUserData",   
                 },
          "Connection": "close",   
          "type": "getUserData",
          body: JSON.stringify({
          latitude: {lt},
          longitude: {lg},
          details: {op}
        })
      });
    } catch(e) {
      console.log(e);
    }
}

render() {
  const {latt, lngg, opt} = this.props.route.params
  let lt = JSON.stringify(latt); 
  let lg = JSON.stringify(lngg); 
  let op = JSON.stringify(opt); 
  return (
    <View style={styles.container}>
      <Text></Text>
      <Bt text="Yes, I Agree." color="yellow" onPress={() => {this.ReportNow(lt,lg,op);this.props.navigation.navigate('Confirmation');}}/>
    </View>
  );
}}

const styles = StyleSheet.create({
    container: {
        paddingTop:'10%',
        paddingBottom:'5%',
        paddingLeft:'5%',
        paddingRight:'5%',
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'stretch',
        justifyContent: 'center'
    }
})
