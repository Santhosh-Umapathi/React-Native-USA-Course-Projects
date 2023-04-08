import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from "react-native";
import {Text, Input} from 'react-native-elements';


const AuthForm = ({headerTitle, buttonTitle, errorMessage, onSubmit}) =>
{

    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    return(
        <> 
            <Text h3 style={styles.spacer}> {headerTitle} </Text>
            <Input 
                label = "Email" 
                style={styles.spacer}
                value={email}
                onChangeText={setEmail}
                autoCapitalize = "none"
                autoCorrect = {false}
            />
            <Input 
                label = "Password" 
                style={styles.spacer}
                value={password}
                onChangeText={setPassword}
                autoCapitalize = "none"
                autoCorrect = {false}
                secureTextEntry={true}
            />
            <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={()=>{onSubmit({email, password})}}
            >
                <Text style={{fontSize: 20}}>{buttonTitle} </Text>
            </TouchableOpacity>
           
            {errorMessage ? <Text style={{color:'red', fontSize: 20, margin: 10}}>{errorMessage}</Text> : null}
        </>
    );
};



const styles = StyleSheet.create({
    spacer:
    {
        margin: 15
    },
    buttonStyle:
    {
        margin: 10, 
        paddingHorizontal:70,
        paddingVertical:10, 
        backgroundColor:'lightblue',
        borderRadius: 10
    },
    viewStyle:
    {
        flex: 1,
        marginTop: 70,
        alignItems: 'center'
    },
    signInViewStyle:
    {
        flexDirection:'row',
    }

});



export default AuthForm;