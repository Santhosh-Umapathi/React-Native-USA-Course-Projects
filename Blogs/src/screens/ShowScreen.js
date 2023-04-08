import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//Context
import { Context as BlogContext } from '../context/BlogContext';
import { AntDesign } from "@expo/vector-icons";


const ShowScreen = ({navigation}) =>
{

    const itemID = navigation.getParam('itemID') //Getting Blog id from Home
    const { state } = useContext(BlogContext); //Retreiving all Blogs

    //Filtering all blogpost with id passed from home
    const blogPosts = state.find(blogpost => blogpost.id === itemID);


    return (
      <View style={styles.containerView}>
        <Text
          style={{
            marginTop: 10,
            marginBottom: 10,
            fontSize: 30,
            marginHorizontal: 10,
          }}
        >
          Title
        </Text>
        <Text style={styles.titleText}>
          {blogPosts.title}
        </Text>

        <Text
          style={{
            marginTop: 30,
            marginBottom: 10,
            fontSize: 30,
            marginHorizontal: 10,
          }}
        >
          Content
        </Text>
        <Text style={styles.titleContent}>{blogPosts.content}</Text>
      </View>
    );
};

ShowScreen.navigationOptions = ({navigation}) =>
{

  const item = navigation.getParam("item"); //Getting Blog id from Home

  return {
    headerTitle: `${item.title}`,
    headerRight: () =>
    (
      <TouchableOpacity
          onPress={() => navigation.navigate('Edit', {item: item})}
      >
        <AntDesign
          name="edit"
          size={25}
          color="white"
          style={{ marginRight: 20 }}
        />
      </TouchableOpacity>
    )
  };
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleText: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#F4C724",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  titleContent: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#F4C724",
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 80,
    marginHorizontal: 10,
  },
});

export default ShowScreen;