import React, {useContext, useCallback} from 'react';
import {Text, StyleSheet} from 'react-native';
import Map from '../components/Map'
import { SafeAreaView, withNavigationFocus} from 'react-navigation';
//import '../_mockLocations';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons';


const TrackCreateScreen = ({isFocused}) =>
{
    const {state, addLocation} = useContext(LocationContext);

    const callback = useCallback((location)=> {
        addLocation(location, state.recording)
    }, [state.recording]);

    const [permError] = useLocation(isFocused || state.recording, callback); //retrieved from hooks.
    

    return(
        <SafeAreaView forceInset={{top:'always'}}>
            <Text style={styles.headerStyle}> TrackCreateScreen </Text>
            <Map />
            { permError ? <Text> Enable Permisions </Text> : null }
            <TrackForm />
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} />
  };

const styles = StyleSheet.create({
    headerStyle:
    {
        fontSize: 30,
        margin: 20,
        alignSelf: 'center'
    }
});

export default withNavigationFocus(TrackCreateScreen);