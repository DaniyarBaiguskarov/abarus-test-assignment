import React, { SyntheticEvent } from "react";

interface SearchbarProps {
  setQuery(query: string): void;
}

const Searchbar: React.FC<SearchbarProps> = ({ setQuery }) => {
  return (
    <form className="searchbar app__searchbar">
      <input
        className="searchbar__input"
        type="text"
        onChange={(e: SyntheticEvent) => {
          e.preventDefault();
          setQuery((e.target as HTMLInputElement).value);
        }}
        placeholder="Поиск"
      />
      <button className="searchbar__button" />
    </form>
  );
};

export default Searchbar;
