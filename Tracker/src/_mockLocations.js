import * as Location from 'expo-location';

const tenMetersWithDegree = 0.0001;

const getLocation = (increment) =>
{
    return {
        timestamp: 10000000,
        coords:
        {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altidudeAccuracy: 5,
            altitude: 5,
            longitude: -122.03121 + increment * tenMetersWithDegree,
            latitude: 37.33233 + increment * tenMetersWithDegree
        }
    }
};

let counter = 0;

setInterval(()=>{
Location.EventEmitter.emit('Expo.LocationChanged', 
{
    watchID: Location._getCurrentWatchId(),
    location: getLocation(counter)
});
counter++;

},1000);