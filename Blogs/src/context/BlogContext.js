import createDataContext from "./createDataContext";
import jsonAPI from "../api/jsonAPI";

//Reducer
const reducer = (state, action) =>
{
  switch (action.type) {

    case "get_blog":
      return action.payload;
    // case "add_blog":
    //   return [
    //     ...state,
    //     {
    //       id: `${Math.floor(Math.random() * 9999)}`,
    //       title: action.payload.title,
    //       content: action.payload.content,
    //     },
    //   ];

    case "edit_blog":
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    case "delete_blog":
      return state.filter(blogPost => blogPost.id !== action.payload);

    default:
      return state;
  }
};

//Actions
const addBlogPosts = (dispatch) =>
{
    return async (title, content, callback) =>
    {
      const response = await jsonAPI.post('/blogposts', {title, content})
      //dispatch({ type: "add_blog", payload: { title, content } });
      if(callback) { callback()} //Call the callback once dispatch completed
    }
};

const editBlogPosts = (dispatch) =>
{
  return async(id, title, content, callback) =>
  {
    await jsonAPI.put(`/blogposts/${id}`, {title, content})
    //dispatch({ type: "edit_blog", payload: { id, title, content } });
    if (callback) { callback() } //Call the callback once dispatch completed
  };
};

const deleteBlogPosts = (dispatch) =>
{
    return async(id) =>
    {
        await jsonAPI.delete(`/blogposts/${id}`)
        //dispatch({ type: 'delete_blog', payload: id });
    }
}

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonAPI.get("/blogposts"); //Fetching data from API
    dispatch({ type: "get_blog", payload: response.data }); //Response.data is the actual data required
  };
};



//Exporting Context and Provider to Children
export const { Context, Provider } = createDataContext(
  reducer, //Passing Reducer
  { addBlogPosts, editBlogPosts, deleteBlogPosts, getBlogPosts }, //Passing Actions
  [] //Passing Initial State
);