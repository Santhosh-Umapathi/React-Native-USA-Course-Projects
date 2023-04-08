import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

const NavLink = ({navigation, text, routeName, buttonName}) =>
{
    return(
        <View style={styles.signInViewStyle}>
        <Text style={{fontSize:20}}> {text}</Text>
        
        <TouchableOpacity
            onPress={()=>{navigation.navigate(routeName) }}
        >
            <Text style={{color:'blue', fontSize:20}}> {buttonName}</Text>
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    signInViewStyle:
    {
        flexDirection:'row',
    }
});

export default withNavigation(NavLink);