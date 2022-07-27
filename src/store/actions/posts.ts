import { Dispatch } from "redux";
import axios from "axios";
import { PostsAction, PostsActionTypes } from "../../types/post";

export const fetchPosts = (limit = 10) => {
  return async (dispatch: Dispatch<PostsAction>) => {
    try {
      dispatch({ type: PostsActionTypes.FETCH_POSTS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({
        type: PostsActionTypes.FETCH_POSTS_SUCCESS,
        payload: response.data,
      });
      dispatch({
        type: PostsActionTypes.SET_TOTAL_PAGES,
        payload: Math.ceil(response.data.length / limit),
      });
    } catch (e) {
      dispatch({
        type: PostsActionTypes.FETCH_POSTS_ERROR,
        payload: "Произошла ошибка при загрузке",
      });
    }
  };
};
export function setPostsPage(page: number): PostsAction {
  return { type: PostsActionTypes.SET_POSTS_PAGE, payload: page };
}

export function setTotalPages(totalPages: number): PostsAction {
  return { type: PostsActionTypes.SET_TOTAL_PAGES, payload: totalPages };
}

export function sortPosts(field: string): PostsAction {
  return {
    type: PostsActionTypes.SORT_POSTS,
    payload: field,
  };
}

export function setQuery(query: string): PostsAction {
  return { type: PostsActionTypes.SET_QUERY, payload: query };
}
