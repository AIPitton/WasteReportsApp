import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import Bt from './Bt'

const Landing = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Waste Reports App!</Text>
      <Bt text="Report Waste Now" color="yellow" onPress={() => navigation.navigate('Report')}/>
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
        fontSize: 30,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',        
        paddingTop:'10%',
        paddingBottom:'60%',
        paddingLeft:'10%',
        paddingRight:'5%',
      }
})
 
export default Landing;