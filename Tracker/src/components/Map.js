import React, {useContext} from 'react';
import { StyleSheet, ActivityIndicator} from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';


const Map = () =>
{

    const {state: {currentLocation, locations}} = useContext(LocationContext);

    //console.log(state);

    if(!currentLocation)
    {
        return <ActivityIndicator size='large' style={{marginTop:200}}/>;
    };

    //let points = [];
    //Creating fake points on map.
    // for(let i=0; i<20; i++)
    // {
    //     if(i % 2 === 0)
    //     {
    //         points.push({
    //             latitude: 37.33233 + i * 0.01,
    //             longitude: -122.03121 + i * 0.01
    //         });
    //     }
    //     else
    //     {
    //         points.push({
    //             latitude: 37.33233 - i * 0.01,
    //             longitude: -122.03121 + i * 0.01
    //         }); 
    //     }
        
    // }

    return(
            <MapView 
                style = {styles.mapStyle}
                initialRegion=
                {{
                    // latitude: 37.33233,
                    // longitude: -122.03121,
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                // region=
                // {{
                //     ...currentLocation.coords,
                //     latitudeDelta: 0.01,
                //     longitudeDelta: 0.01
                // }}
            >
                <Circle
                    center={currentLocation.coords}
                    radius={30}
                    strokeColor='blue'
                    fillColor='rgba(124,145,234, 0.3)' 
                
                
                />

            <Polyline coordinates={locations.map(loc => loc.coords)} />

            </MapView>

    );
};

const styles = StyleSheet.create({
    mapStyle:
    {
        height: 300,    
    }
});

export default Map;