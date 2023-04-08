import React, { useContext } from 'react';
import {View, StyleSheet} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import {NavigationEvents} from 'react-navigation';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


const SignUpScreen = ({navigation}) =>
{

    const {state, signUp, clearErrorMessage} = useContext(AuthContext);

    return(
        <View style = {styles.viewStyle}> 
            <NavigationEvents 
                //onWillFocus={()=>{}}
                //onDidFocus
                onWillBlur={clearErrorMessage}
                //onDidBlur
            />
            <AuthForm 
            headerTitle = 'SignUp for Tracker'
            buttonTitle = 'Sign Up'
            errorMessage = {state.errorMessage}
            onSubmit = {({email, password})=>signUp({email, password})}
            />  

            <NavLink 
                text = 'Already have an Account'
                routeName = 'SignIn'
                buttonName = 'Sign In'
            />
        </View>
    );
};

SignUpScreen.navigationOptions = () =>
{
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    viewStyle:
    {
        flex: 1,
        marginTop: 70,
        alignItems: 'center'
    }
});



export default SignUpScreen;