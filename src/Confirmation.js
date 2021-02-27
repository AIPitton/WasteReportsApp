import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import Bt from './Bt'

const Confirmation = ({navigation}) => {
   
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Report Again?</Text>
      <Bt text="Yes" color="yellow" onPress={() => {navigation.navigate('Landing');}}/>
    </View>
  );
};

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
    },
    headerText: {      
        fontSize: 48,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',        
        paddingTop:'10%',
        paddingBottom:'5%',
        paddingLeft:'10%',
        paddingRight:'5%',
      }

})
 
export default Confirmation;