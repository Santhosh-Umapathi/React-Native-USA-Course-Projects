import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import {AsyncStorage} from 'react-native';
import {navigate} from '../navigationRef'; // Custom Navigation file for outside React Component



const authReducer = (state, action) =>
{
    switch(action.type)
    {
        case 'add_error':
            return {...state, errorMessage: action.payload};

        case 'clear_error_message':
            return {...state, errorMessage:''};

        case 'signin':
            return {token: action.payload, errorMessage:""};

        case 'signout':
            return {token: null, errorMessage:''};

        default:
            return state;
    }
};

//Can also be const signIn = (dispatch) => async ({email, password}) =>// Direct Implicit reference
const signUp = (dispatch) =>
{
    return async ({email, password}) =>
    {
        try
        {
            const response = await trackerAPI.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token); //Settings user defaults value for token
            dispatch({type:'signin',payload:response.data.token})//SignIn since same method at the eod
            navigate('TrackList');
        }
        catch(err)
        {
            //console.log(err.message);
            dispatch({type:'add_error',payload:'Something went wrong during Sign Up'})
        }

    };
};

const signIn = (dispatch) => async ({email, password}) =>
    {
        try
        {
            const response = await trackerAPI.post('/signin', {email, password});
            await AsyncStorage.setItem('token', response.data.token); 
            dispatch({type:'signin',payload:response.data.token})
            navigate('TrackList');
        }
        catch(err)
        {
            //console.log(err.message);
            dispatch({type:'add_error',payload:'Something went wrong during Signing In'})
        }
    };

const signOut = dispatch => async() =>
{
    await AsyncStorage.removeItem('token');
    dispatch({type:'signout'});
    navigate('loginFlow');
};

const clearErrorMessage = dispatch => () =>
{
    return(
        dispatch({type:'clear_error_message'})
    );
    
};

const localSignIn = dispatch => async() =>
{
    const token = await AsyncStorage.getItem('token');
    if(token)
    {
        dispatch({type:'signin', payload: token})
        navigate('TrackList')
    }
    else
    {
        navigate('SignUp')
    }

};




export const {Context, Provider} = createDataContext(
    authReducer,
    {signIn, signOut, signUp, clearErrorMessage, localSignIn},
    { token: null, errorMessage: "" }
);
