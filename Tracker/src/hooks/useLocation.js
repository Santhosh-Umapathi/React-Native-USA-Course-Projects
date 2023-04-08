import {useState, useEffect} from 'react';
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location';

export default (shouldTrack, callback) => {

    const [permError, setPermError] = useState(null);
    

    useEffect(() =>
    {
        let subscriber;
        const startTracking = async() =>
        {
            try
            {
            const { granted } = await requestPermissionsAsync();
            if (!granted) 
            {
                throw new Error('Location permission not granted');
            }
               subscriber = await watchPositionAsync({
                   accuracy: Accuracy.BestForNavigation,
                   timeInterval: 1000,
                   distanceInterval: 10
               },callback);
            }
            catch(e)
            {
                console.log(e);
                setPermError(e);
            }
        };

        if (shouldTrack) {
            startTracking();
          } else {
            if (subscriber) {
              subscriber.remove();
            }
            subscriber = null;
          }

        return () => {
            if (subscriber) {
              subscriber.remove();
            }
          };
        }, [shouldTrack, callback]);



    return [permError];

};