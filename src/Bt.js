import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Bt = props => {
    const content = (
        <View style={[styles.button, { backgroundColor: props.color}]}>
          <Text style={styles.text}>{props.text}</Text>
        </View>    
    )
    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        width:'100%',
        height:60,
        borderRadius:24,
        alignItems: 'center'        
    },
    text: {
        color:'black',
        fontSize:30,
        paddingTop:'2%',
        paddingBottom:'5%',
        paddingLeft:'5%',
        paddingRight:'5%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Bt;