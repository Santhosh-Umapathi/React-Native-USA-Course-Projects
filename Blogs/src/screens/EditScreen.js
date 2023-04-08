import React, { useContext } from "react";
import { StyleSheet } from "react-native";
//Context
import { Context as BlogContext } from "../context/BlogContext";
import BlogForm from "../components/BlogForm";

const EditScreen = ({ navigation }) =>
{
    const item = navigation.getParam("item"); //Getting Blog id from Home

    //Context
    const { state, editBlogPosts } = useContext(BlogContext);
    //Filtering all blogpost with id passed from home
    const blogPosts = state.find(blogpost => blogpost.id === item.id);
    
  
  return (
    <BlogForm
      headerLabel = "Edit"
      buttonTitle="Update"
      initialValues={{ title: blogPosts.title, content: blogPosts.content }}
      onSubmit={(title, content) => {
        editBlogPosts(item.id, title, content, () => navigation.popToTop());
      }}
    />
  );
};

EditScreen.navigationOptions = () =>
{
    return {
        headerTitle:'Edit Blog'
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

export default EditScreen;
