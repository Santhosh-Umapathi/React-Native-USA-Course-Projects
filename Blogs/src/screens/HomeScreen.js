import React, {useContext, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
//Context
import { Context as BlogContext } from '../context/BlogContext';
//Icons
import { Feather, Ionicons } from "@expo/vector-icons";

const HomeScreen = ({navigation}) =>
{
  const { state, deleteBlogPosts, getBlogPosts} = useContext(BlogContext);
  
  useEffect(() =>
  {
    getBlogPosts();
    //Second fetch when navigate back to home
    const listener = navigation.addListener("didFocus", () => getBlogPosts());
    //Removes listener when the screen is unmounted, avoids memory leak
    return () => { listener.remove() };
  }, [])


    return (
        <View style={styles.containerView}>
            <FlatList
                data={state}
                keyExtractor={key => key.id}
                renderItem={({item}) => 
                {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate('Show', {itemID: item.id,item: item })}}>
                        <View style={styles.rowStyle}>
                          <Text style={styles.text}>{item.title}</Text>
                          <TouchableOpacity
                            onPress={() => deleteBlogPosts(item.id)}
                          >
                            <Feather
                              name="trash"
                              size={30}
                              style={styles.iconStyle}
                            />
                          </TouchableOpacity>
                        </View>
                      </TouchableOpacity>
                    );
                }}
            />
        </View>
        );
};


HomeScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => 
        (
            <TouchableOpacity onPress={() => { navigation.navigate('Create') }}>
                <Ionicons
                    name="ios-add-circle-outline"
                    size={35}
                    color="white"
                    style={{ marginRight: 20 }}
                />
            </TouchableOpacity>
        ),
    };
}


const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
  },
  iconStyle: {
  },
  rowStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#F4C724",
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
    borderWidth: 1,
    marginBottom: 5,
    padding: 10,
  },
});

export default HomeScreen;
