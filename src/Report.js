import React, { useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Bt from './Bt'

export default class Report extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ready: false,
            where: {lat:null, lng:null},
            error: null, 
            username: '', 
        }        
    }
    componentDidMount(){
        let geoOptions = {
            enableHighAccuracy: true,
            timeOut: 20000,
            maximumAge: 20 * 1            
        };
        this.setState({ready:false, error: null });
        navigator.geolocation.getCurrentPosition( this.geoSuccess, this.geoFailure, geoOptions);                                                                                                
    }    
    geoSuccess = (position) => {    
        this.setState({
            ready:true,
            where: {lat: position.coords.latitude,lng:position.coords.longitude }
        })
    }    
    geoFailure = (err) => {
        this.setState({error: err.message});
    }
    static navigationOptions = {  
      title: 'Home',  
      headerStyle: {  
          backgroundColor: '#f4511e',  
      },
      headerTitleStyle: {  
          fontWeight: 'bold',  
      },  
  };   
    render() {     
        const a = "AA"
        const b = "BB"
        const c = "CC"
        const d = "DD"
        return ( 
            <View style={styles.container}>
              <View style={styles.header}><Text style={styles.headerText}>Your Coords</Text></View>                
                { !this.state.ready && (
                <View style={styles.body}><Text>Calculating Your Current Coordinates</Text></View>
                )}
                { this.state.error && (
                <View style={styles.body}><Text>{this.state.error}</Text></View>
                )}
                <View style={styles.body}><Text>
                { this.state.ready && (
                     <Text style={styles.body}>{
                    `Latitude: ${this.state.where.lat}
Longitude: ${this.state.where.lng}`
                    }
                    </Text> 
                )}
                </Text></View>
                <View style={styles.footer}>               
                    <Bt text="Plastic in Water" color="yellow" onPress={() => 
                    this.props.navigation.navigate('Api', {latt: this.state.where.lat, lngg:this.state.where.lng, opt: "Plastic in Water"})} />
                </View>
                <View style={styles.footer}>
                    <Bt text="Plastic on Land" color="yellow" onPress={() => 
                    this.props.navigation.navigate('Api', {latt: this.state.where.lat, lngg:this.state.where.lng, opt: "Plastic on Land"})} />
                </View>
                <View style={styles.footer}>
                    <Bt text="Chemicals in Water" color="yellow" onPress={() => 
                    this.props.navigation.navigate('Api', {latt: this.state.where.lat, lngg:this.state.where.lng, opt: "Chemicals in Water"})} />
                </View>
                <View style={styles.footer}>
                    <Bt text="Chemicals on Land" color="yellow" onPress={() => 
                    this.props.navigation.navigate('Api', {latt: this.state.where.lat, lngg:this.state.where.lng, opt: "Chemicals on Land"})} />
                </View>
                </View>
        );
    }
}

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
    textInput: {  
      height: 45,
      width: "95%",
      borderColor: "gray",
      borderWidth: 1,
      fontSize:20
    },     
    header: {
      flex: 0.2,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerText: {      
      fontSize: 48,
      color: 'white'
    },
    body: {
      flex: 0.5,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      color:'yellow',
      fontSize: 30
    },
    footer: {
      paddingTop:5,
      paddingBottom:5,
      flex: 0.2,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20    
    }
});
