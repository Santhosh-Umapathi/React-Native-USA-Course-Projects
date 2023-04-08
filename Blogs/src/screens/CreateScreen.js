import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
//Context
import { Context as BlogContext } from '../context/BlogContext';
//Component
import BlogForm from '../components/BlogForm';

const CreateScreen = ({navigation}) =>
{
    //Context
    const { addBlogPosts } = useContext(BlogContext);

  return (
    <BlogForm
      headerLabel = "Enter"
      buttonTitle="Save"
      onSubmit={(title, content) => {
        addBlogPosts(title, content, () => navigation.navigate("Home"));
      }}
    />
  );
};

CreateScreen.navigationOptions = ({navigation}) =>
{
    return {
        headerTitle:'Create Blog'
    };
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
    margin: 10,
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

export default CreateScreen;