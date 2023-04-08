import React, {useContext} from 'react';
import {
 Text,
 View,
 StyleSheet,
 TextInput,
 TouchableOpacity,
} from "react-native";
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () =>
{
    const {state:{name, recording, locations}, changeName, startRecording, stopRecording} = useContext(LocationContext)

    const [saveTrack] = useSaveTrack();


    return(
        <View style={styles.viewStyle}>
            <TextInput 
                placeholder="Enter Track Name"
                style={styles.inputStyle}
                onChangeText={changeName}
                value={name}
            />
            {recording ?  
                <TouchableOpacity onPress={stopRecording} style={styles.stopButtonStyle}>
                    <Text style={styles.buttonText}> Stop </Text>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={startRecording} style={styles.startButtonStyle}>
                    <Text style={styles.buttonText}> Start Recording </Text>
                </TouchableOpacity>
                
            }
            {
                !recording && locations.length ?
                <TouchableOpacity style={styles.saveButtonStyle} onPress={saveTrack}>
                    <Text style={styles.buttonText}> Save </Text>
                </TouchableOpacity> : null
            }
  
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:
    {
        marginTop: 50,
        marginHorizontal: 10
    },
    inputStyle:
    {
        borderColor:'lightblue',
        borderRadius:10,
        borderWidth:0.5,
        padding: 10,
        marginBottom: 20
    },
    startButtonStyle:
    {
        borderRadius:10,
        backgroundColor: 'lightblue',
        marginHorizontal: 20
    },
    stopButtonStyle:
    {  
        borderRadius:10,
        backgroundColor: 'red',
        marginHorizontal: 20
    },
    saveButtonStyle:
    {
        borderRadius:10,
        backgroundColor: 'lightblue',
        marginTop: 50,
        marginHorizontal: 20
    },
    buttonText:
    {
        padding: 15,
        alignSelf:'center',
    }

});

export default TrackForm;