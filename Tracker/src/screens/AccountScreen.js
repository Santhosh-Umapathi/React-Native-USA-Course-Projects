import React, { useContext } from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';


const AccountScreen = () =>
{

    const {signOut} = useContext(AuthContext);

    return(
        <View>
            <Text style={styles.headerText}> Account Screen </Text>
            <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={signOut}>
                <Text style={{fontSize:15, alignSelf:'center'}}>
                     Sign Out
                </Text>
            </TouchableOpacity>
           
        </View>
    );
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20} />
  };

const styles = StyleSheet.create({
    headerText:
    {
        fontSize: 30,
        margin: 80,
        alignSelf:'center'
    },

    buttonStyle:
    {
        margin: 10, 
        paddingHorizontal:70,
        paddingVertical:10, 
        backgroundColor:'lightblue',
        borderRadius: 10
    },
});

export default AccountScreen;