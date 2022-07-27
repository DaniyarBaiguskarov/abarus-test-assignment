export interface PostsState {
  posts: PostItem[];
  isLoading: boolean;
  error: null | string;
  page: number;
  totalPages: number;
  limit: number;
  query: string;
  sortField: string;
  order: boolean;
}

export interface PostItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export enum PostsActionTypes {
  FETCH_POSTS = "FETCH_POSTS",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
  SET_POSTS_PAGE = "SET_POSTS_PAGE",
  SET_QUERY = "SET_QUERY",
  SET_TOTAL_PAGES = "SET_TOTAL_PAGES",
  SORT_POSTS = "SORT_POSTS",
  SET_POSTS = "SET_POSTS",
}

interface FetchPostsAction {
  type: PostsActionTypes.FETCH_POSTS;
}
interface FetchPostsSuccessAction {
  type: PostsActionTypes.FETCH_POSTS_SUCCESS;
  payload: PostItem[];
}
interface FetchPostsErrorAction {
  type: PostsActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}
interface SetPostsPage {
  type: PostsActionTypes.SET_POSTS_PAGE;
  payload: number;
}
interface SetQuery {
  type: PostsActionTypes.SET_QUERY;
  payload: string;
}
interface SetTotalPages {
  type: PostsActionTypes.SET_TOTAL_PAGES;
  payload: number;
}
interface SortPosts {
  type: PostsActionTypes.SORT_POSTS;
  payload: string;
}
interface SetPosts {
  type: PostsActionTypes.SET_POSTS;
  payload: PostItem[];
}

export type PostsAction =
  | FetchPostsAction
  | FetchPostsErrorAction
  | FetchPostsSuccessAction
  | SetPostsPage
  | SetQuery
  | SetTotalPages
  | SortPosts
  | SetPosts;
