import { PostsAction, PostsActionTypes, PostsState } from "../../types/post";

const initialState: PostsState = {
  posts: [],
  page: 1,
  error: null,
  limit: 10,
  isLoading: false,
  totalPages: 1,
  query: "",
  sortField: "",
  order: { id: true, title: true, body: true },
};

class Order {
  id: boolean = true;
  title: boolean = true;
  body: boolean = true;
  constructor(property: string, current: boolean) {
    this[property as "id" | "title" | "body"] = !current;
  }
}

export const postsReducer = (
  state = initialState,
  action: PostsAction
): PostsState => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS:
      return { ...state, isLoading: true };
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return { ...state, isLoading: false, posts: action.payload };
    case PostsActionTypes.FETCH_POSTS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case PostsActionTypes.SET_POSTS_PAGE:
      return { ...state, page: action.payload };
    case PostsActionTypes.SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload };
    case PostsActionTypes.SORT_POSTS:
      let dynamicKey = action.payload as keyof typeof state.order;
      return {
        ...state,
        sortField: action.payload,
        order: { ...new Order(action.payload, state.order[dynamicKey]) },
      };
    case PostsActionTypes.SET_QUERY:
      return { ...state, query: action.payload, page: 1 };
    case PostsActionTypes.SET_POSTS:
      return { ...state, posts: action.payload, page: 1 };

    default:
      return state;
  }
};
