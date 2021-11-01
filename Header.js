import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import logo from './assets/snack-icon.png';
import logo from './assets/NYUgradshotHandshake3.PNG';
export default function Header (props){
    return(
        <View style={styles.header}>
            <Image source={logo} style={{ width: 35, height:35 }} />
            <View>
                {/*  <Text style={styles.text}></Text> */}
                <Text style={styles.text} > This is the Header </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    text: {
      color: 'orange'
    //     fontFamily: 'OpenSans'
    }
})
