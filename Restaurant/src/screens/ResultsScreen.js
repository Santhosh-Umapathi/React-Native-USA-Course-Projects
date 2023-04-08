import React, {useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, FlatList, ActivityIndicator  } from 'react-native';
import yelpAPI from '../api/yelpAPI';

const ResultsScreen = ({navigation}) =>
{

    const id = navigation.getParam('id')
    const [results, setResults] = useState(null);

    //fetching images from Yelp API
    const getImages = async (id) => {
        const response = await yelpAPI.get(`/${id}`)
        setResults(response.data);
    };
    
    //Calling API only once
    useEffect(() =>
    {
        getImages(id);
    }, [])



    if (!results)
    {
        return <ActivityIndicator size='large' style={{justifyContent: 'center', alignItems: 'center',flex: 1}} />
    }


    return (
        <View style={styles.containerView}>
            <Text style={styles.text}>{results.name} - Gallery</Text>
            <FlatList
                data={results.photos}
                keyExtractor={key => key}
                renderItem={({item}) => 
                {
                    return (
                        <Image
                            source={{ uri: item }}
                            style={{height: 220, width: 300, borderRadius: 10, margin: 10}}
                        />
                    )
                }}
            />
        </View>
        );
};

const styles = StyleSheet.create({
    containerView:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: 
    {
        fontSize: 30,
    },
});

export default ResultsScreen;