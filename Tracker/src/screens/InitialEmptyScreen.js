import { useContext, useEffect } from 'react';
import {Context as AuthContext} from '../context/AuthContext';


const InitialEmptyScreen = () =>
{

    const {localSignIn} = useContext(AuthContext);

    useEffect(()=>
    {
        localSignIn();
    },[]);


    return( null );
};

export default InitialEmptyScreen;