import React, { useContext } from 'react';
import {View, StyleSheet} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import {NavigationEvents} from 'react-navigation';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


const SignInScreen = () =>
{
    const {state, signIn, clearErrorMessage} = useContext(AuthContext);

    return(
        <View style = {styles.viewStyle}> 
        <NavigationEvents 
            //onWillFocus={()=>{}}
            //onDidFocus
            onWillBlur={clearErrorMessage}
            //onDidBlur
        />

            <AuthForm 
            headerTitle = 'SignIn to Tracker'
            buttonTitle = 'Sign In'
            errorMessage = {state.errorMessage}
            onSubmit = {signIn}
            />  

            <NavLink 
                text = "Don't have an Account"
                routeName = 'SignUp'
                buttonName = 'Sign Up'
            />
        </View>
    );
};

SignInScreen.navigationOptions = () =>
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



export default SignInScreen;