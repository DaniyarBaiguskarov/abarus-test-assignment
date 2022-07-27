import React, { useEffect, useMemo } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import PagesList from "./components/PagesList";
import Searchbar from "./components/Searchbar";
import Table from "./components/Table";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { searchItem } from "./utils/search";
import { SortItems } from "./utils/sort";

const App: React.FC = () => {
  const { page, error, isLoading, posts, limit, totalPages, query, sortField } =
    useTypedSelector((state) => state.posts);
  const { fetchPosts, setPostsPage, setQuery, setTotalPages } = useActions();
  const history = useNavigate();

  const searchedAndSortedPosts = useMemo(() => {
    const searchedItems = searchItem(posts, query);
    const searchedAndSortedItems = SortItems(searchedItems, sortField);
    return searchedAndSortedItems;
  }, [query, sortField, posts]);

  useEffect(() => {
    history("/" + page, { replace: false });
    fetchPosts(limit);
  }, []);

  useEffect(() => {
    history("/" + page, { replace: false });
  }, [page]);

  useEffect(() => {
    setTotalPages(Math.ceil(searchedAndSortedPosts.length / limit));
  }, [searchedAndSortedPosts]);

  if (isLoading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Routes>
      <Route
        path={"/:page"}
        element={
          <div className="app">
            <Searchbar setQuery={setQuery} />
            <Table items={searchedAndSortedPosts} page={page} />
            <PagesList
              totalPages={totalPages}
              setPostsPage={setPostsPage}
              currentPage={page}
            />
          </div>
        }
      ></Route>
    </Routes>
  );
};

export default App;
